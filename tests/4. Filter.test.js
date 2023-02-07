import { chromium, test, expect } from "@playwright/test"

test("Add product to cart", async () => {
    // 1. Launch browser
    const browser = await chromium.launch();
    const page = await browser.newPage();
    // 2. Navigate to url 'http://automationexercise.com'
    await page.goto("https://automationexercise.com");

    /** 
     * 3. TODO: Using CSS selectors -> Add 'Men Tshirt' product to the cart and verify 'Your product has been added to cart.' is visible 
     */ 
    await page.locator('[data-product-id="2"]').nth(0).click();
    await expect(page.getByText('Your product has been added to cart.')).toBeVisible();

    // 4. click on Continu shoping button
    await page.getByRole("button", {name: 'Continue Shopping'}).click();

    /** 
     * 5. TODO: Using playwright Filter -> Add 'Stylish Dress' product to the cart, 
     * and verify 'Your product has been added to cart.' is visible 
     */
    await page
        .locator('.productinfo')
        .filter({hasText: 'Stylish Dress'})
        .locator('.add-to-cart')
        .nth(0)
        .click()

    await expect(page.getByText('Your product has been added to cart.')).toBeVisible();
    // 6. click on Continue shoping button
    await page.getByRole("button", {name: 'Continue Shopping'}).click();

    /** 
     *  7. TODO: Using Filter Click on 'View Product' on item 'Summer White Top',
     *  and make sure the '/product_details/' page opened on 'Summer White Top' header 
     */
  
    const product = page
    .locator('.product-image-wrapper')
    .filter({hasText: 'Summer White Top'});

    await product.locator('.choose')
    .filter({has: page.getByRole('link', {name: 'View Product'}) })
    .click();

    expect(page.url()).toContain('/product_details/')
});