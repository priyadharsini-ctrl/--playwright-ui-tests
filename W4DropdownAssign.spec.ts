import {expect, test} from "@playwright/test"
test('Auto wait assignment',async ({page}) => {

    await page.goto(`https://leafground.com/select.xhtml`)
    await page.selectOption("//select[@class='ui-selectonemenu']",{value:'Selenium'})
    
    await page.locator("(//label[@class='ui-selectonemenu-label ui-inputfield ui-corner-all'])[1]").click()
    await page.locator("//li[text()='Brazil']").click()
    
    await page.locator("//button[@aria-label='Show Options']").click()
    await page.locator("//li[text()='AWS']").click()
    const dropdown= page.locator (("//button[@aria-label='Show Options']"))
    await expect(dropdown).toBeVisible();

     await page.locator (("//button[@aria-label='Show Options']")).click();
    await page.locator("//li[text()='Appium']").click()
    await expect(dropdown).toBeVisible();
    await page.locator("//button[@aria-label='Show Options']").click()
    await page.locator("//li[text()='Selenium WebDriver']").click()

    await page.locator("//label[text()='Select Language']").click()
    
    //await page.locator("//label[text()='Select Language']").click()
        const languageDropdown=page.locator("//ul[@class='ui-selectonemenu-items ui-selectonemenu-list ui-widget-content ui-widget ui-corner-all ui-helper-reset']/li")

       const count = await languageDropdown.count()
       console.log(count);
       
    for (let index = 0; index < count; index++) {

        console.log(await dropdown.nth(index).innerText());
   
 }
 await page.locator("//li[text()='English']").click()
    
    
})