import {expect, test} from "@playwright/test"
test('Auto wait assignment',async ({page}) => {

    await page.goto(`https://leafground.com/radio.xhtml`)
    const radio =  page.locator("(//div[@class='ui-radiobutton-box ui-widget ui-corner-all ui-state-default ui-state-active'])[4]")
    await expect(radio).toBeEnabled()

    await page.locator("(//label[text()='Chrome'])[1]").click()

    await page.locator("(//label[text()='Chennai'])[1]").click()

    
})