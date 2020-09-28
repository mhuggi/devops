describe('App ', function() {
    beforeEach(function() {
        cy.visit('http://localhost:3001')
      })
    
    it('front page can be opened', function() {
      cy.contains('<h1>', 'Hello world', '</h1>')
    })
    it('API calls on buttonclick', function() {
        cy.contains('Get data').click()
        cy.contains('Data:')
        cy.contains('5 : 5')
    })
  })
  