import BasePage from './Base.page';

class SignupPage extends BasePage {
    constructor(page){
        super(page);
        // locators 
        this.getGenderMaleRBtn = page.locator("#id_gender1");
        this.getPasswordInput = page.locator("[data-qa='password']")
        this.getDaysList = page.locator("#days");
        this.getMonthsList = page.locator("#months");
        this.getYearsList = page.locator("#years");
        this.getNewsletterCheckbox = page.locator("#newsletter")
        this.getOffersCheckbox = page.locator("#optin")

        this.getFirstNameInput = page.locator("[data-qa='first_name']")
        this.getLastNameInput = page.locator("[data-qa='last_name']")
        this.getCompanyInput = page.locator("[data-qa='company']")
        this.getAddressInput = page.locator("[data-qa='address']")

        this.getCountryList = page.locator("#country");
        this.getStateInput = page.locator("[data-qa='state']")
        this.getCityInput = page.locator("[data-qa='city']")
        this.getZipCodeInput = page.locator("[data-qa='zipcode']")
        this.getMobileNumberInput = page.locator("[data-qa='mobile_number']")

        this.getCreateAccountBtn = page.locator("[data-qa='create-account']")
    }

    async navigate(){
        await super.navigate('/signup');
    }

    async fillAccountEnformationData(){
        await this.getGenderMaleRBtn.check();
        await this.getPasswordInput.type("Password123");

        await this.getDaysList.selectOption({value: '30'})
        await this.getMonthsList.selectOption({value: '1'})
        await this.getYearsList.selectOption({value: '1994'})

        await this.getNewsletterCheckbox.check();
        await this.getOffersCheckbox.check();

        await this.getFirstNameInput.type("Mohamed");
        await this.getLastNameInput.type("Ahmed");
        await this.getCompanyInput.type("Vodafone");
        await this.getAddressInput.type("22 Thawra St");

        await this.getCountryList.selectOption({value: 'United States'})
        await this.getStateInput.type("California");
        await this.getCityInput.type("Los Angeles");
        await this.getZipCodeInput.type("90002");
        await this.getMobileNumberInput.type("323 123456789");

        await this.getCreateAccountBtn.click();
    }
}

export default SignupPage