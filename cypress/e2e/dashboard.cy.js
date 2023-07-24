describe('dashboard', () => {

  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/tricks", {
      statusCode: 200,
      fixture: "tricksFixture"
    })
    cy.visit("http://localhost:3000/")
  })


  it('should display trick cards on page load', () => {
    cy.get(".trick-container").should("have.length", 1)
      .get(".trick-card").first().contains("p", "treflip")
      .get(".trick-card").last().contains("p", "Link to Tutorial: https://www.youtube.com/watch?v=XGw3YkQmNig")
      
  })

  it('should display trick cards on page load', () => {
    cy.get("form")
      .get("select[name='stance']")
      .get("input[name='name']")
      .get("select[name='obstacle']")
      .get("input[name='tutorial']")
  })

  it('should add a new trick card on submit', () => {
    cy.get("form")
      .get("select[name='stance']").select('regular')
      .get("input[name='name']").type('LOL')
      .get("select[name='obstacle']").select('ledge')
      .get("input[name='tutorial']").type('LOL')
      .get('button').click()
      .get(".trick-container").should("have.length", 2)
  })

});