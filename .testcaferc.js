require('dotenv').config()

// Agnostic for all environments
let skipped_tests = [

    // Located in affiliate_center_page_tests.js
    'user_can_add_new_affiliate_campaign', // 08-09-23
]

// List of tests that open new window and thus needs native-automation to be disabled
let multiple_window_tests = [
    'user_can_log_into_customer_center_with_magic_link',
    'user_is_able_to_add_a_section_column_row_and_element_to_editor'
]

// Filter that joins ALL filtered scripts so that they are not run for a full suite
let full_filter = skipped_tests.concat(multiple_window_tests)

let build_filter = () => {

    // Purpose: To set the suite that we want to run. (isolated, regression, sanity)

    var filter = {}
    
    switch(process.env.ENV) {
        case 'staging':
            filter = {
                testGrep: `^(?!.*(${full_filter.join('|')})).*$`
            }
    }
    return filter
}

let determine_concurrency = () => {

    // Purpose: To set concurrency dependant on the scope that is passed
    
    let concurrency = 2
    return concurrency
}

module.exports = {
    assertionTimeout: 5000,
    browsers: [
        "chrome:headless --window-size=1920,1159"
    ],
    skipJsErrors: true,
    concurrency: determine_concurrency(),
    cache: true,
    disableMultipleWindows: true,
    filter: build_filter(),
    hostname: "localhost",
    pageLoadTimeout: 30000,
    reporter: [
        {
            name: "spec",
            output: "artifacts/reports/spec_results"
        },
        {
            name: "xunit",
            output: "artifacts/reports/xunit_results.xml"
        }
    ],
    runExecutionTimeout: 4500000,
    screenshots: {
        path: "artifacts/screenshots",
        pathPattern: "${TEST}_${DATE}_${TIME}.png",
        takeOnFails: true,
        thumbnails: false
    },
    selectorTimeout: 5000,
    skipUncaughtErrors: true,
    src: "tests/**",
    testExecutionTimeout: 600000
}
