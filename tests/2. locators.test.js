import { test, expect } from "@playwright/test"

test("Login Using Different PW locators", async ({page, baseURL}) => {

    // 1. open login page
    await page.goto("/web/index.php/auth/login");
    // 2. get company company-branding logo, then make sure it's visible 
    const logoXpath = page.locator("//img[@alt='company-branding']");
    const logoCSS = page.locator("[alt='company-branding']");
    const logoPw = page.getByAltText('company-branding');
    await expect(logoPw).toBeVisible();
    // 3. find form header, and make sure it's visible 
    const formHeaderXpath = page.locator("//div[@class='orangehrm-login-slot']//h5");
    const formHeaderCss = page.locator(".orangehrm-login-slot > h5");
    const formHeaderPw = page.getByRole("heading", { name: 'Login' });
    await expect(formHeaderPw).toBeVisible();
    // 4. find username, then type 'Admin'
    const usernameXpath =  page.locator("//input[@name='username']")
    const usernameCss =  page.locator("[name='username']")
    const usernamePw =  page.getByPlaceholder("Username");
    await usernameCss.type('Admin');
    // 5. find password, then type 'admin213'
    const passwordXpath =  page.locator("//input[@name='password']")
    const passwordCss =  page.locator("[name='password']")
    const passwordPw =  page.getByPlaceholder("Password");
    await passwordPw.type('admin123');
    // 6. find foret password, and make sure It's visible
    const forgotPassXpath = page.locator("//div[@class='orangehrm-login-forgot']//p");
    const forgotPassCss = page.locator(".orangehrm-login-forgot > p");
    const forgotPassPw = page.getByText("Forgot your password? ");
    await expect(forgotPassPw).toBeVisible();
    // 7. find login button, make sure the btn state is enabled then click on it
    const submitBtnXpath = page.locator("//button[@type='submit']");
    const submitBtnCSS = page.locator("[type=submit]");
    const submitBtnPW = page.getByRole('button', {type: 'submit'});
    expect(await submitBtnPW.isEnabled());
    await submitBtnPW.click();
    // 8. verify user redirected to dashbaord page
    expect(page.url()).toBe(baseURL + "/web/index.php/dashboard/index");
});