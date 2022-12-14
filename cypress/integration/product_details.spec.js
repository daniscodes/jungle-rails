describe("Jungle", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  });

  it("users can navigate from the home page to the product detail page by clicking on a product", () => {
    cy.contains("Where you can find any plants!");

    cy.get("a[href='/products/1']").click();

    cy.location('href').should("eq", "http://localhost:3000/products/1");
  });
});