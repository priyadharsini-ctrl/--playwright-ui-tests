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
        await page.locator("//a[text()='Create Lead']").click()
        await page.locator("#createLeadForm_companyName").fill("xys")
        await page.locator("#createLeadForm_firstName").fill("priya")
        await page.locator("#createLeadForm_lastName").fill("s")
        await page.locator("#createLeadForm_personalTitle").fill("Mrs")
        await page.locator("#createLeadForm_generalProfTitle").fill("Mrs")
          await page.locator("#createLeadForm_annualRevenue").fill("200000")
            await page.locator("#createLeadForm_departmentName").fill("IT")
          await page.locator("#createLeadForm_primaryPhoneNumber").fill("9840620987")
          await page.locator(".smallSubmit").click()
          const compName = await page.locator("#viewLead_companyName_sp").textContent()
          if(compName=='xys'){
            console.log("compName is " +compName);
          }
         const status = await page.locator("#viewLead_statusId_sp").textContent()
         if(status=='Assigned'){
            console.log("status is " +status);
          }
         const firstNAme = await page.locator("#viewLead_firstName_sp").textContent()
         if(firstNAme=='priya'){
            console.log("firstNAme is " +firstNAme);
          }
         const lastName = await page.locator("#viewLead_lastName_sp").textContent()
          if(lastName=='s'){
            console.log("lastName is " +lastName);
          }
           console.log("Title is " +await page.title());
            





})