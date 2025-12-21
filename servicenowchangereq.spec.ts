import { expect, test } from "@playwright/test";

let id : any // GLobal variable declaration, explicit inference with any datatype
let shortDescription: any

test.describe.serial(`Service Now`,async()=>{

test(`servicenow CR with playwright`, async ({ request }) => {

    const response = await request.post(`https://dev291487.service-now.com/api/now/table/change_request`,
        {
            headers: {
                "Authorization": "Basic YWRtaW46QjdoL1E3T3dqYy9C", //YWRtaW46QjdoL1E3T3dqYy9C
                "Content-Type": "application/json"
            },
            data: {
                "short_description":"check create CR with playwright"

            }
        }
    )

    const responseBody = await response.json();
    console.log(responseBody);

    console.log(response.status());
    console.log(response.statusText());
    
    //Assert status code
    expect(response.status()).toBe(201);
    
    //Assert status text
    expect(response.statusText()).toBe("Created");

    //Get the sys_id from responseBody:

    id = responseBody.result.sys_id
    console.log(id);  

})


test(`Fetch incident in Service Now using Playwright with API`, async ({ request }) => {

    const response = await request.get(`https://dev291487.service-now.com/api/now/table/change_request/${id}`,
        {
            headers: {
                "Authorization": "Basic YWRtaW46QjdoL1E3T3dqYy9C", //YWRtaW46QjdoL1E3T3dqYy9C
                "Content-Type": "application/json"
            }
        }
    )

    // const resp = await response.json();
    // console.log(resp);

    console.log(response.status());
    console.log(response.statusText());
    
    //Assert status code
    expect(response.status()).toBe(200)
    
    //Assert status text
    expect(response.statusText()).toBe("OK")


})


test(`patch   in Service Now using Playwright with API`, async ({ request }) => {

    const response = await request.patch(`https://dev291487.service-now.com/api/now/table/change_request/${id}`,
        {
            headers: {
                "Authorization": "Basic YWRtaW46QjdoL1E3T3dqYy9C", //YWRtaW46QjdoL1E3T3dqYy9C
                "Content-Type": "application/json"
            },
            data: {
          short_description: `change CR with playwright`,
        },
        }
    )

    const resp = await response.json();
     console.log(resp);
     shortDescription = resp.result.short_description;
      console.log("Updated Incident Short Description:", shortDescription);

    console.log(response.status());
    console.log(response.statusText());
    
    //Assert status code
    expect(response.status()).toBe(200)
    
    //Assert status text
    expect(response.statusText()).toBe("OK")


})

test(`GET Request - To Validate Updated Short Description`, async ({ request }) => {
        const response = await request.get(`https://dev291487.service-now.com/api/now/table/change_request/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Basic YWRtaW46QjdoL1E3T3dqYy9C", //by btoa method ,nothing but base64 encoding
          },
        });
    
        console.log("Get request Status:", response.status());
        console.log("Get request Status text", response.statusText);
    
        const responseBody = await response.json();
        console.log("Get Request Response:", responseBody);
        expect(response.status()).toBe(200);
        expect(response.statusText()).toBe("OK");
    
        // Verify the fetched incident matches the updated one
        expect(responseBody.result.short_description).toBe(shortDescription);
        console.log("Verified - Fetched incident sys_id matches:", shortDescription);
      });


      test(`Delete Request`, async ({ request }) => {
        const response = await request.get(`https://dev291487.service-now.com/api/now/table/change_request/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic YWRtaW46QjdoL1E3T3dqYy9C", //by btoa method ,nothing but base64 encoding
          },
        });
    
        console.log("Get request Status:", response.status());
        console.log("Get request Status text", response.statusText);
    
       
        expect(response.status()).toBe(200);
        //expect(response.statusText()).toBe("OK");
    
        
      });

})