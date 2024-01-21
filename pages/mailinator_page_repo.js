import HelperObjects from '../pages/helpers'
import { Selector, t } from 'testcafe'


class MailinatorPageObjects {
    constructor() {
      this.txt_email_search = Selector('#search').withAttribute('placeholder', 'Enter Public Mailinator Inbox')
      this.btn_go_to_email = Selector('button').withAttribute('value', 'Search for public inbox for free')
      this.email_received_time = Selector('tbody').find('td').withText(/(minute|just now)/)
      this.link_links = Selector('#pills-links-tab')
      this.link_login_link = Selector('a').withAttribute('href', /.*(magic_link|reset_password).*/)
  
  
    }
  
   async search_for_email(user_email, email_title) {
  
      // Purpose: To search for an email address within mailinator
      // Param: user_email - string
      // Param: email_title - string
  
      await HelperObjects.wait_for_element(this.txt_email_search, 'visible', false, 100)
  
      await t
        .typeText(this.txt_email_search, user_email, { replace: true, paste: true })
        .click(this.btn_go_to_email)
  
      await HelperObjects.wait_for_element(this.email_received_time.sibling('td')
                                          .withText(email_title),'visible', false, 50)
    }
  
   async login_with_magic_link(email_title){
  
      // Purpose: Navigates to the links tab and clicks the magic link
      // Param: email_title - string
  
      await t
        .click(this.email_received_time.sibling('td').withText(email_title))
        .click(this.link_links)
  
      await HelperObjects.wait_for_element(this.link_login_link, 'visible', false)
  
      await t.click(this.link_login_link)
    }
}  
export default new MailinatorPageObjects()  