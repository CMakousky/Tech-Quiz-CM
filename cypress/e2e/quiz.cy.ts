const quizUri = "http://127.0.0.1:3001/"

describe('tech quiz', () => {
  context('Setup', () => {
    it('should render the page and present a "Start Quiz" button to the user', () => {
      cy.visit(`${quizUri}`);
      cy.get('[data-cy=start-screen]').should('be.visible');
    });
  });

  context('Start Quiz', () => {
    it('should progess to the quiz when the "Start Quiz" button is clicked', () => {
      cy.visit(`${quizUri}`);
      cy.get('[data-cy=start-button]').click();
      cy.get('[data-cy=quiz-question]').should('be.visible');
    });
  });

  context('Answer Questions', () => {
    it('should display the score once 10 questions are answered', () => {
      cy.visit(`${quizUri}`);
      cy.get('[data-cy=start-button]').click();
      for (let question = 0; question < 10; question++) {
        cy.get('[data-cy=button-0]').click();
      };
      cy.get('[data-cy=completion-screen]').should('be.visible');
    });
  });

  context('Start a New Quiz', () => {
    it ('should take the user to a new quiz when the "Take New Quiz" button is pressed at the end of a quiz', () => {
      cy.visit(`${quizUri}`);
      cy.get('[data-cy=start-button]').click();
      for (let question = 0; question < 10; question++) {
        cy.get('[data-cy=button-0]').click();
      };
      cy.get('[data-cy=quiz-complete]').click();
      cy.get('[data-cy=quiz-question]').should('be.visible');
    });
  });
})