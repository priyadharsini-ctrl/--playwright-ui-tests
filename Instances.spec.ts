import { chromium, test, webkit } from "@playwright/test";

test("Redbus and Flipkart in Edge and Webkit browser instance", async () => {
    const browser=await chromium.launch({channel: 'msedge'})
       const context=await browser.newContext()
           const page = await context.newPage()
           await page.goto('https://www.redbus.in/')
           console.log("Page title" +await page.title());
           console.log("Page url" +page.url());

           const browser2 = await webkit.launch();
           const context2 = await browser2.newContext();
           const page2 = await context2.newPage()
           await page2.goto(`https://www.flipkart.com/`);
           console.log("Page title" +await page2.title());
           console.log("Page url" +page2.url());
});