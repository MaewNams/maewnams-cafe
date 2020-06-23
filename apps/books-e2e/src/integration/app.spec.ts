import { getBooks, getAddBookButton } from '../support/app.po';

describe('books', () => {
  beforeEach(() => cy.visit('/'));

  it('should display books', () => {
    getBooks().should((t) => expect(t.length).equal(2));
    getAddBookButton().click();
    getBooks().should((t) => expect(t.length).equal(3));
  });
});
