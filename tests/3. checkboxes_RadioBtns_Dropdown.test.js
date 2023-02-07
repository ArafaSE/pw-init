import { chromium, test, expect } from "@playwright/test"

test("Register user", async () => {
    // generate random email address
    const emailAddress = (Math.random() + 1).toString(36).substring(2) + "@gmail.com";
    // 1. Launch browser
    const browser = await chromium.launch();
    const page = await browser.newPage();
    // 2. Navigate to url 'http://automationexercise.com'
    await page.goto("https://automationexercise.com");
    // 3. Click on 'Signup / Login' button
    await page.locator("//a[@href='/login']").click();
    // 4. Verify 'New User Signup!' is visible
    await expect(page.getByText('New User Signup!')).toBeVisible();
    // 5. Enter valid name and email address
    await page.locator("[data-qa='signup-name']").type('Mohamed');
    await page.locator("[data-qa='signup-email']").type(emailAddress);
    /**
     *  6. TODO: Press enter
     */
    await page.locator("[data-qa='signup-email']").press('Enter');
    // 7. Verify that 'ENTER ACCOUNT INFORMATION' is visible
    await expect(page.getByText('ENTER ACCOUNT INFORMATION')).toBeVisible();

    /**
     *  8. TODO: Select Title, Password, Date of birth 
     */
    await page.locator('#id_gender1').check();
    await page.locator("[data-qa='password']").type('Password1234');
    const days = page.locator('#days');
    const months = page.locator('#months');
    const years = page.locator('#years');

    await days.selectOption({ value: '2' });
    await months.selectOption({ label: 'August' });
    await years.selectOption({ value: '1994' });
    /**
     *  9. TODO: Select checkbox 'Sign up for our newsletter!', and verify it's checked
     */
    const newslettterCheckBox = page.locator('#newsletter');
    await newslettterCheckBox.setChecked(true);
    await expect(newslettterCheckBox).toBeChecked();
    // 10. Fill details: First name, Last name, Company, Address
    await page.locator("#first_name").fill("Mohamed");
    await page.locator("#last_name").fill("Ahmed");
    await page.locator("#company").fill("Vodafone");
    await page.locator("#address1").fill("22 Thawra St");

    /**
     *  11. TODO: Seelct Country
     */
    const countries = page.locator('#country');
    await countries.selectOption({value: 'United States'});

    // 12. Fill State, City, Zipcode, Mobile Number
    await page.locator("#state").fill("California");
    await page.locator("#city").fill("Los Angeles");
    await page.locator("#zipcode").fill("90002");
    await page.locator("#mobile_number").fill("323 123456789");
    // 13. Click 'Create Account button'
    await page.locator("[data-qa='create-account']").click();
    // 14. Verify that 'ACCOUNT CREATED!' is visible
    await expect(page.getByText('ACCOUNT CREATED!')).toBeVisible();

    await browser.close();
});