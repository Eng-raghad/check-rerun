
import { ClientFunction, Selector } from 'testcafe'
import CustomerCenterObjects from '../../pages/customer_center_repo'
import HelperObjects from '../../pages/helpers'
import MailinatorPageObjects from '../../pages/mailinator_page_repo'
import {test_url, cc_url} from '../../data_config'

fixture `login`
    .page(process.env.SITE_URL); // Use shared URL


test
  .meta({ scope: 'sanity' })
  ('login_page_loads_without issues', async t => {
    await t.expect(HelperObjects.btn_continue_request_magic_link.visible, {timeout: 2000}).Ok()
  })