const base = require('@playwright/test');
import { writeFileSync, readFileSync, existsSync } from 'fs'

exports.test = base.test.extend({
  page: async ({ page, context}, use) => {
        /** Set session storage in a new context */
        let cookies = ''
        let isCookiesExpired = false;
        const fileExists = existsSync("playwright/.auth/cookies.json")

        if(fileExists){
            cookies = await JSON.parse(readFileSync('playwright/.auth/cookies.json', 'utf-8'));
            isCookiesExpired = JSON.stringify(cookies[0].expires).split('.')[0].concat('000') < Date.now()
            console.log(isCookiesExpired)
        }

        if(!fileExists || isCookiesExpired){
            await page.goto('https://automationexercise.com/login');
            await page.locator("//input[@data-qa='login-email']").type(process.env.LOGIN_EMAIL)
            await page.locator("//input[@data-qa='login-password']").type(process.env.LOGIN_PASSWORD)
            await page.getByRole('button', {name: 'Login'}).click();

            /**  Get cookies and store it in json file */
            const browserCookies = await context.cookies();
            cookies = browserCookies.filter(function (entry) {
                return entry.name === 'sessionid';
            });
            writeFileSync('playwright/.auth/cookies.json', JSON.stringify(cookies), "utf-8");
        }
        await context.addCookies(cookies);
        await use(page);
  },
});
exports.expect = base.expect;