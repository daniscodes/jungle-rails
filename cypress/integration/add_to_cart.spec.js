describe("Jungle", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  });

  it(`users can click the 'Add to Cart' button for a product on the home page
    and in doing so their cart increases by one`, () => {
    cy.contains("Where you can find any plants!");

    cy.contains("Add").click();
    cy.contains("My Cart").should("include.text", "1")
  });
});