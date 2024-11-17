

import Quiz from '../../client/src/components/Quiz';
import { it } from 'vitest';




describe('<Quiz/>', () => { 
    //quiz component should render
  it('should render', () => {
    cy.mount(<Quiz />);
    // //check if th start button exist 
    cy.contains('Start Quiz').should('exist');
  });


   // if quiz started by clicking the start button, the first question should be displayed
   it('should display first question when quiz starts', () => {
    cy.mount(<Quiz />);
    // intercept the api request for questions before the button is clicked
    cy.intercept('GET', "/api/questions/random", { fixture: 'questions.json' }).as('getRandomQuestion'); 
    cy.contains('Start Quiz').click();
    // check if question is displayed after clicking the start quiz button
    cy.wait('@getRandomQuestion');
    // check if h2 exist
    cy.get('h2').should('exist');
    //check if score is displayed
    cy.contains('Score: ').should('exist');
    //check if next button is displayed
    cy.contains('Take New Quiz').should('exist');
    
   });

 


  
    });

