import { Selector, t } from 'testcafe'

class HelperObjects {
    constructor() {
      this.flash_alert = Selector('#toaster').child('div').withAttribute('data-controller', 'alert')
      this.btn_continue_request_magic_link = Selector('#magic_link').find('input')

    }
  
    // Comment
    async wait_for_flash_alert(checks = 30) {
  
      // Purpose: To wait for the flash alert to appear and then disappear
      // Param checks - Int
  
      let count = 0
  
      while (await this.flash_alert.visible == false && count < checks) {
        await t
          .wait(250)
  
        count++
      }
  
      count = 0
      
      while (await this.flash_alert.visible && count < checks) {
        await t
          .wait(250)
  
        count++
      }
    }
  
  async wait_for_element(element, visible_or_exists = 'visible', boolean, count = 10) {
  
      // Purpose: To wait for an element
      // Param: element - testcafe Selector - locator
      // Param: visible_or_exists - String - Check if the element is visible or exists
      // Param: boolean - Bool - true/false
      // Param: count - Int - The amount of loops we will be waiting for
  
      // This is a custom request hook that is waiting for a failed request.
      // await CustomRequestHooks.waitForFailedRequest(5000)
  
      switch(visible_or_exists) {
        case 'visible':
          while (await element.visible == boolean && count > 0) {
            await t
              .wait(250)
              count--
          }
          break
  
        case 'exists':
          while (await element.exists == boolean && count > 0) {
            await t
              .wait(250)
              count--
          }
          break
      }
    }
  
  
  
  }
  export default new HelperObjects()  
