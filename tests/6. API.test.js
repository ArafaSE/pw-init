import { test, expect } from "@playwright/test"

test("1. Get user by id", async ({request}) => {
    const baseUrl = 'https://reqres.in';

    // 1. use pw request '/api/users/2' to get single user
    const response = await request.get(baseUrl + '/api/users/2');
    // 2. verify that response status is 200
    expect(response.status()).toBe(200);
    // 3. extract json body from reponse then make sure the user returned with id '2' and email value
    const responseBody = await response.json();
    expect(responseBody.data.id).toBe(2);
    expect(responseBody.data.email).toBeTruthy();
    // 4. print the response body
    console.log(responseBody)
});

test("2. Get users with page number", async ({request}) => {
    const baseUrl = 'https://reqres.in';

    // 1. use pw request '/api/users' to get users with param 'page=2' eg. 
    const response = await request.get(baseUrl + '/api/users', {
        params: {
            page: 2
        }
    })
    // 2. verify that response status is 200, then print the response url
    expect(response.status()).toBe(200);
    // 3. extract json body from reponse 
    const responseBody = await response.json();
    // 4. verify that page number value is 2 
    expect(responseBody.page).toBe(2);
    // 5. verify that total users value is 12
    expect(responseBody.total).toBe(12);
    // 6. verify that first user id returned value is 7
    expect(responseBody.data[0].id).toBe(7);
    // 7. print the response body
    console.log(responseBody)
});

test("3. Create new user", async ({request}) => {
    const baseUrl = 'https://reqres.in';
    
    // 1. use pw request '/api/users' to create new user with request data {name, job}
    const response = await request.post(baseUrl + '/api/users', {
        data: {
            "name": "Mohamed",
            "job": "Test Automation Engineer"
        }
    })
    // 2. verify that response status is 201
    expect(response.status()).toBe(201);
    // 3. extract json body from reponse then make sure the user returned with same name and job sent and also has an id value
    const responseBody = await response.json();
    expect(responseBody.name).toBe('Mohamed');
    expect(responseBody.job).toBe('Test Automation Engineer');
    expect(responseBody.id).toBeTruthy();
    // 4. print the response body
    console.log(responseBody)
});

test("4. Update user", async ({request}) => {
    const baseUrl = 'https://reqres.in';
    
    // 1. use pw request '/api/users/2' to update job value using put method
    const response = await request.put(baseUrl + '/api/users/2', {
        data: {
            "name": "Mohamed",
            "job": "Quality Control Engineer"
        }
    })
    // 2. verify that response status is 200
    expect(response.status()).toBe(200);
    // 3. extract json body from reponse then make sure the user returned with the same name but with updated job 
    const responseBody = await response.json();
    expect(responseBody.name).toBe('Mohamed');
    expect(responseBody.job).toBe('Quality Control Engineer');
    // 4. print the response body
    console.log(responseBody)
});

test("5. Delete user", async ({request}) => {
    const baseUrl = 'https://reqres.in';
    
    // 1. use pw request '/api/users/2' to delete user
    const response = await request.delete(baseUrl + '/api/users/2');
    // 2. verify that response status is 204
    expect(response.status()).toBe(204);
});