import {test, expect} from "@playwright/test"

test("User can login with valid credentials", async({page, baseURL}) => {
    await page.goto("/web/index.php/auth/login");
    await page.locator("[name='username']").type('Admin');
    await page.locator("[name='password']").type('admin123');
    const submitBtn = page.locator("[type='submit']");
    await submitBtn.click();

    expect(page.url()).toBe(baseURL + '/web/index.php/dashboard/index');
});
