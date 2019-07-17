Feature:host application
  the page should show products

  Scenario: opening the application
    Given a browser page open to "/index.html"
    Then window.location should be "/index.html"
    And the "body" should contain "hi there"