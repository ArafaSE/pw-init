import BasePage from './Base.page';

class AccountDeletedPage extends BasePage {
    constructor(page){
        super(page);
        // locators 
        this.accountDeletedTxt = page.getByText('Account Deleted!');
        this.getContinuBtn = page.locator("[data-qa='continue-button']")
    }
}

export default AccountDeletedPage