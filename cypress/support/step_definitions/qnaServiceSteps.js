import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor'

Given('User navigates to the QNAService page', () => {
    cy.visit('http://localhost:8000/')
  })

When('User Select a single document by clicking on the Choose file input', () => {
      cy.get("input[type='file']").selectFile('myTestFileToUpload.txt');
   })

When('User Click on the Upload icon', () => {
      cy.get('button').eq(0).click({force:true});
   })

Then('Document must uploaded successfully', () => {
      cy.get('*[class^="flex items-center justify-between p-2"]').should('exist');
      cy.get('span').contains('myTestFileToUpload.txt').should('exist');
   })

Then('User deletes the unprocessed File Successfully', () => {
       cy.get('div').contains("Unprocessed").siblings('button[aria-label="Delete file"]').click({force:true,multiple:true});
   })

Given('Document is in unprocessed state', () => {
      cy.get('div').should('contain.text',"Unprocessed");
   })

When('User clicks the play button', () => {
    cy.get('div').contains("Unprocessed").siblings('button[aria-label="Process file"]').click({force:true});
   })

Then('Document must be processed successfully', () => {
      cy.get('div').should('contain.text',"Processed");
   })

When('User enter {string} in the text box', (query) => {
      cy.get('div').children('textarea[placeholder="Ask a question about the uploaded documents..."]').type(query);
   })

When('click on the Ask Question button to get the answer',() => {
    cy.get('button').contains("Ask Question").click({force:true});
})

Then('{string} will be displayed in the Answer section',(answer) => {
    cy.get('div[class^="p-4 bg-secondary rounded-md"]',{timeout:10000}).children('p').should('contain.text',answer)
 })

When('User click on expand to see references',() => {
    cy.get('div[class="w-full"]').find('svg').first().click({force:true});
})


 Then('User can see the source of the answer',() => {
     cy.get('div[role="region"]').should("exist")
  })


  Then('User deletes File Successfully',() => {
      cy.get('div').contains("Processed").siblings('button[aria-label="Delete file"]').click({force:true,multiple:true});
   })
