import { chromium, test, expect } from "@playwright/test"

test("Accept Alerts", async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    // TODO: handle alert dialog to accept
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept('Hi, I am trying to learn Playwright');
    });
    // TODO 1. click on Js alert, then verify the result text
    await page.getByText('Click for JS Alert').click();
    expect(await page.locator('#result').innerText()).toContain('You successfully clicked an alert');
    // TODO 2. click on Js confirm, then verify the result text
    await page.getByRole('button', {name: 'Click for JS Confirm'}).click();
    expect(await page.locator('#result').innerText()).toContain('You clicked: Ok');
    // TODO 3. click on JS prompt, add 'Hi, I am trying to learn Playwright' as confirmation msg, then verify the result text
    await page.getByRole('button', {name: 'Click for JS Prompt'}).click();
    expect(await page.locator('#result').innerText()).toContain('You entered: Hi, I am trying to learn Playwright');
});

test("Dismiss Alerts", async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    // TODO: handle alert dialog to dismiss
    page.on('dialog', dialog => dialog.dismiss());
    // TODO 1. Js confirm, then verify the results text
    await page.getByRole('button', {name: 'Click for JS Confirm'}).click();
    expect(await page.locator('#result').innerText()).toContain('You clicked: Cancel');
});