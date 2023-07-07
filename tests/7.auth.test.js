import {test, expect} from "../playwright/fixtures"

test.only("User skipped mandatory payment info when placing the order", async({ page }) => {
    await page.goto("https://automationexercise.com/product_details/1");
    await page.getByRole('button', {name: ' Add to cart '}).click();
    await page.getByRole('link', {name: 'View Cart'}).click();
    await page.getByText('Proceed To Checkout').click();
    await page.getByRole('link', {name: 'Place Order'}).click();

    // payment
    await expect(page.getByRole('heading', {name: 'Payment'})).toBeVisible();
    await page.getByRole('button', {name: 'Pay and Confirm Order'}).click()
    expect(page.url()).toBe('https://automationexercise.com/payment');
});

test.only("User introduced a valid payment info when placing the order", async({ page }) => {
    // test case
    await page.goto("https://automationexercise.com/product_details/1");
    await page.getByRole('button', {name: ' Add to cart '}).click();
    await page.getByRole('link', {name: 'View Cart'}).click();
    await page.getByText('Proceed To Checkout').click();
    await page.getByRole('link', {name: 'Place Order'}).click();

    // payment
    await expect(page.getByRole('heading', {name: 'Payment'})).toBeVisible();
    await page.locator("//input[@data-qa='name-on-card']").type('MOHAMED ARAFA');
    await page.locator("//input[@data-qa='card-number']").type('2698148512562548');
    await page.locator("//input[@data-qa='cvc']").type('255');
    await page.locator("//input[@data-qa='expiry-month']").type('02');
    await page.locator("//input[@data-qa='expiry-year']").type('2025');
    await page.getByRole('button', {name: 'Pay and Confirm Order'}).click()
    await expect(page.locator("//h2[@data-qa='order-placed']")).toBeVisible();
});