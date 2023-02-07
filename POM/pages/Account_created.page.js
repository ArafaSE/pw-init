import BasePage from './Base.page';

class AccountCreatedPage extends BasePage {
    constructor(page){
        super(page);
        // locators 
        this.accountCreatedTxt = page.getByText('ACCOUNT CREATED!');
        this.getContinuBtn = page.locator("[data-qa='continue-button']")
    }
}

export default AccountCreatedPage