//To do POSTMAN API testing for SERVICE NOW :

//endpoint.
//Headers.
//Authorization
//Request Body
//CRUD Operation -> POST, GET, PATCH, DELETE 

//page fixture we have goto, locator,... --> UI // It comes from Page Interface
//request fixture we have post,get,patch,...  --> API testing // It comes from 


import { expect, test } from "@playwright/test";

let id : any // GLobal variable declaration, explicit inference with any datatype

test.describe.serial(`Service Now`,async()=>{

test(`Creating incident in Service Now using Playwright with API`, async ({ request }) => {

    const response = await request.post(`https://dev291487.service-now.com/api/now/table/incident`,
        {
            headers: {
                "Authorization": "Basic YWRtaW46QjdoL1E3T3dqYy9C", //YWRtaW46QjdoL1E3T3dqYy9C
                "Content-Type": "application/json"
            },
            data: {
                "short_description": "Email not working",
                "description": "User cannot send or receive emails",
                "comments": "Updated via Playwright with API",
                "work_notes": "Checked mail server logs",
                "subcategory": "Email",
                "impact": "2",
                "urgency": "2"

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

    const response = await request.get(`https://dev291487.service-now.com/api/now/table/incident/${id}`,
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

})