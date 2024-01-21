import { Selector, t } from 'testcafe'
import HelperObjects from '../pages/helpers'

class CustomerCenterObjects {
    constructor() {
      this.txt_field_email = Selector('input').withAttribute('data-testid', 'contact_email')
      this.btn_request_magic_link = Selector('input').withAttribute('value', 'Request magic link')
    }
  
    async request_magic_link(user_email){
  
      //Purpose: Fills in email and clicks on the magic link button
      //Param: user_email - String - uses magic link user email
      
      await t
        .typeText(this.txt_field_email, user_email, { replace: true, paste: true })
        .click(HelperObjects.btn_continue_request_magic_link)
    }
  }
export default new CustomerCenterObjects()