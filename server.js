const express = require("express");
const app = express();
const port = 8000;

const { faker } = require('@faker-js/faker');

const createUser = () => {
    const newestUser = {
        firstName : faker.name.firstName(),
        lastName : faker.name.lastName(),
        email : faker.internet.email(),
        password : faker.internet.password(),
        phoneNumber : faker.phone.number('###-###-###'),
        _id : faker.datatype.number()
    }
    return newestUser
}

const createCompany = () => {

    const newestCompany = {
        _id : faker.datatype.number(),
        name : faker.company.name(),
        address : {
            street: faker.address.streetAddress(),
            city: faker.address.cityName(), 
            state: faker.address.stateAbbr(),
            zip: faker.address.zipCode(), 
            country: faker.address.country()
        },
    }
    return newestCompany
}

const newCompany = createCompany()

app.get('/api/users/new', (req, res) => {
    const newUser = createUser()
    
    return res.json(newUser)
})

app.get('/api/companies/new', (req, res) => {
    const newCompany = createCompany()
    
    return res.json(newCompany)
})

app.get('/api/user/company', (req, res) => {
    const newCompany = createCompany()
    const newUser = createUser()

    const data = {
        user: newUser,
        company: newCompany
    }

    return res.json(data)
})

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
