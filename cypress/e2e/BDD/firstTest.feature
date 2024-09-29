Feature: Greencart End to End scenario

    @smoke
    Scenario Outline: Verify the user is able to place the order for multiple products

        Given User navigate to Greencart webshop
        When Add the product to cart "<Product_1>"
        When Add the product to cart "<Product_2>"
        Then Click cart link
        Then click the proceed to checkout link
        Then click Place order on cart page
        Then Select the country India in select country dropdown
        Then check the Agree terms and condition checkbox
        Then click the Proceed button
        Then verify the Thank you place the order message is displayed

        Examples:
            | Product_1 | Product_2 |
            | Apple     | Carrot    |

