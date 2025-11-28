import { chromium, firefox, test, webkit } from "@playwright/test";
test("Browser launch",async()=>{
  const browser=  await chromium.launch()
  //const browser=  await firefox.launch()
    const context=await browser.newContext()
    const page = await context.newPage()
        await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.locator('#username').fill('Demosalesmanager')
        await page.locator('#password').fill('crmsfa')
        await page.locator('.decorativeSubmit').click()
        await page.locator('#label').click()
        await page.locator("//a[text()='Leads']").click()
        await page.locator("//a[text()='Find Leads']").click()
        await page.locator("xpath=(//input[@name='firstName'])[3]").fill("priya")
        await page.locator("//button[text()='Find Leads']").click()
        await page.locator("xpath=(//div/a[@class='linktext'])[4]").click()
        await page.locator("//a[text()='Edit']").click()
        await page.locator("#updateLeadForm_companyName").clear()
        await page.locator("#updateLeadForm_companyName").fill("Test")
        await page.locator("#updateLeadForm_annualRevenue").clear()
        await page.locator("#updateLeadForm_annualRevenue").fill("12345")
        await page.locator("#updateLeadForm_departmentName").clear()
        await page.locator("#updateLeadForm_departmentName").fill("Its")
        await page.locator("#updateLeadForm_description").fill("Testing")
        await page.locator("//input[@value='Update']").click()
        const compName = await page.locator("#viewLead_companyName_sp").textContent()
          if(compName?.includes('Test')){
            console.log("compName is " +compName);
          }
        const annualRevenue = await page.locator("#viewLead_annualRevenue_sp").textContent()
          if(annualRevenue?.includes('12345')){
            console.log("annualRevenue is " +annualRevenue);
          }
        const department = await page.locator("#viewLead_departmentName_sp").textContent()
          if(department=='Its'){
            console.log("department is " +department);
          }
 console.log("Title is " +await page.title());
}
)