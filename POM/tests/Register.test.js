import { test, expect } from "@playwright/test"

import AccountCreatedPage from "../pages/Account_created.page";
import AccountDeletedPage from "../pages/Account_deleted.page";
import HomePage from "../pages/Home.page";
import LoginPage from "../pages/Login.page";
import SignupPage from "../pages/Signup.page";

let homePage, loginPage, signupPage, accountCreatedPage, accountDeletedPage, randomEmail;

test.beforeEach(async ({page}) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    signupPage = new SignupPage(page);
    accountCreatedPage = new AccountCreatedPage(page);
    accountDeletedPage = new AccountDeletedPage(page);
    
    randomEmail = (Math.random() + 1).toString(36).substring(2) + "@gmail.com";
    await loginPage.navigate();
});

test.describe('Register user', async () => {
    test("Register user with new email address", async ({page}) => {
        // 1. From login page verify that 'New User Signup' text is visible
        await expect(await loginPage.getElementByText('New User Signup!')).toBeVisible();
        // 2. login with name and random email
        await loginPage.signup('Mohamed', randomEmail)
        // 3. Verify that 'ENTER ACCOUNT INFORMATION' text is visible
        await expect(await signupPage.getElementByText('Enter Account Information')).toBeVisible();
        // 4. Fill all account information form
        await signupPage.fillAccountEnformationData();
        // 5. Verify that 'ACCOUNT CREATED!' text msg is visible
        await expect(accountCreatedPage.accountCreatedTxt).toBeVisible();
        // 6. Click on 'Continue' button
        await accountCreatedPage.getContinuBtn.click();
        // 7. Verify that ' Logged in as Mohamed' in home page
        await expect(await homePage.getElementByText(' Logged in as Mohamed')).toBeVisible();
        // 8. Click on 'Delete Account' button from page header
        await homePage.getDeleteAccountBtn.click();
        // 9. Verify that 'ACCOUNT DELETED!' text is visible
        await expect(accountDeletedPage.accountDeletedTxt).toBeVisible();
    });
    
    test("Register user with existing email address @wip", async () => {
        
    });
});
