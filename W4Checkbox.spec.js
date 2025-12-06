import {expect, test} from '@playwright/test'

test(`Test for check box`,async ({page})=>{

    await page.goto(`https://leafground.com/checkbox.xhtml`);

    await page.locator("//span[text()='Basic']").click()

   await page.locator("//span[text()='Ajax']").click()
   await expect(page.locator(`//span[text()='Checked']`)).toBeVisible();

   await page.locator("//label[text()='Java']").click()

   await page.locator("//h5[text()='Tri State Checkbox']/following::div[1]/div/div[1]").click()

   await page.locator(".ui-toggleswitch-slider").click()
      await expect(page.locator(`//span[text()='Checked']`)).toBeVisible();


     await page.locator("//h5[text()='Verify if check box is disabled']/following::div[1]").isDisabled()
     

     await page.locator("//ul[@data-label='Cities']").click()
     await page.locator("(//div[@class='ui-chkbox ui-widget'])[9]").click()
          await page.locator("(//div[@class='ui-chkbox ui-widget'])[10]").click()

          await page.close()

})