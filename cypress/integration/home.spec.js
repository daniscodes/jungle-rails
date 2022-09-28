describe("Jungle", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  });

  it("renders the home page when visited", () => {
    cy.contains("Where you can find any plants!");
  });


it("Confirms products are present", () => {
  cy.get(".products article").should("have.length", 13);
});
});