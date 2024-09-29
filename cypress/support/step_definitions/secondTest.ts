import { Given } from "node_modules/@badeball/cypress-cucumber-preprocessor/lib/methods";


Given("User navigate to google site", () => {

    cy.visit("https://google.co.in", { timeout: 10000 })

});