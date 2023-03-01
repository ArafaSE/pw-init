import { test, expect } from "@playwright/test"

import HomePage from "../pages/Home.page";
import LoginPage from "../pages/Login.page";

let loginPage, homePage;

test.beforeEach(async ({page}) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    await loginPage.navigate();  
});

test.describe('Login user', async () => {
    test("Login user with correct email and password @hp", async () => {
        // 1. Write your login email and passowrd then submit
        await loginPage.login(process.env.LOGIN_EMAIL, process.env.LOGIN_PASSWORD);
        // 2. Verify that 'Logged in as username' is visible
        await expect(await homePage.getElementByText(' Logged in as Mohamed')).toBeVisible();
    });
    
    test("Login user with incorrect email and password @wip", async () => {
        // 1. Write incorrect login email and password then submit
        await loginPage.login(process.env.LOGIN_IEMAIL, process.env.LOGIN_IPASSWORD)
        // 2. Verify that 'Your email or password is incorrect!' is visible
        await expect(await loginPage.getElementByText('Your email or password is incorrect!')).toBeVisible();
    });
});