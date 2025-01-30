import React from 'react'
import Quiz from '../../client/src/components/Quiz'

describe('<Quiz />', () => {
  it('should render the page and present a "Start Quiz" button to the user', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Quiz />);
    cy.get('[data-cy=start-screen]').should('be.visible');
  });

  it('should progess to the quiz when the "Start Quiz" button is clicked', () => {
    cy.mount(<Quiz />);
    cy.get('[data-cy=start-button]').click();
    cy.get('[data-cy=quiz-question]').should('be.visible');
  });

  it('should display the score once 10 questions are answered', () => {
    cy.mount(<Quiz />);
    cy.get('[data-cy=start-button]').click();
    for (let question = 0; question < 10; question++) {
      cy.get('[data-cy=button-0]').click();
    };
    cy.get('[data-cy=completion-screen]').should('be.visible');
  });

  it ('should take the user to a new quiz when the "Take New Quiz" button is pressed at the end of a quiz', () => {
    cy.mount(<Quiz />);
    cy.get('[data-cy=start-button]').click();
    for (let question = 0; question < 10; question++) {
      cy.get('[data-cy=button-0]').click();
    };
    cy.get('[data-cy=quiz-complete]').click();
    cy.get('[data-cy=quiz-question]').should('be.visible');
  });
});