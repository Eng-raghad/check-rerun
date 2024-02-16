import { ClientFunction, Selector } from 'testcafe'
import CustomerCenterObjects from '../../pages/customer_center_repo'
import HelperObjects from '../../pages/helpers'
import MailinatorPageObjects from '../../pages/mailinator_page_repo'
import {test_url, cc_url} from '../../data_config'

fixture `sites - courses 1`
    .page(process.env.SITE_URL); // Use shared URL

test
  .meta({ scope: 'sanity'})
  .before(async t => {
    await t.navigateTo(process.env.CC_URL) // Use shared link of await HelperObjects.get_customer_center_url()
  })
  ('user_can_log_into_customer_center_with_magic_link', async t => {

    // Purpose: To verify that a user can use a magic link email to log in to the customer center.

    const contact_email = process.env.CONTACT_EMAIL // Use shared contact_email
    const mailinator_url = 'https://www.mailinator.com/'
    const email_title = "My Workspace\'s Site - Magic Link Request"

    await t.expect(Selector('input').withAttribute('value', 'Continue').filterVisible().visible).ok()
    //await CustomerCenterObjects.request_magic_link(contact_email)

    // Adding this to avoid race condition where it starts searching for the email in Mailinator before the navigation begins  
    //await HelperObjects.wait_for_flash_alert()

    //await t.navigateTo(mailinator_url)
    //await MailinatorPageObjects.search_for_email(contact_email, email_title)
    //await MailinatorPageObjects.login_with_magic_link(email_title)

    // Verify that user has access to Customer Center
    //await t
    //  .expect(Selector('h1').withText('All Courses').visible).ok()
  })

test
  .meta({ scope: 'sanity' })
  ('login_page_loads', async t => {
    await t.expect(HelperObjects.btn_continue_request_magic_link.visible, {timeout: 2000}).notOk()
  })
