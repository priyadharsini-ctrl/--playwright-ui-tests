import {expect, test} from "@playwright/test"
test('Auto wait assignment',async ({page}) => {

    await page.goto(`https://leafground.com/waits.xhtml`)

    await page.locator("(//span[text()='Click'])[1]").click()
    await page.locator("(//span[text()='I am here'])[1]").waitFor({ state: 'visible' });

    await page.locator("(//span[text()='Click'])[2]").click()
    const ele =  page.locator("(//span[text()='I am about to hide'])[1]")
   //await expect(ele).toBeHidden()
   await page.locator("(//span[text()='I am about to hide'])[1]").waitFor({ state: 'hidden' });

   await page.locator("//span[text()='Click First Button']").click()
    await page.locator("//span[text()='Click Second']").waitFor({ state: 'visible' });
   await page.locator("//span[text()='Click Second']").click()

   await page.locator("(//span[text()='Click'])[3]").click()
   await page.locator("//span[text()='Did you notice?']").waitFor({ state: 'visible' });
    await expect(page.locator("//span[text()='Did you notice?']")).toHaveText("Did you notice?");

})