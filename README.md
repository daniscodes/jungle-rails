# Jungle

A mini e-commerce application built with Rails 6.1 for purposes of teaching Rails by example. Users can creat an account and log in, or shop anonymously. The admin can add new categories to the nav bar, and populate them with products. Checkout is handled using Stripe.

## Setup

1. Download repo
2. Run `bin/rails s -b 0.0.0.0` to start the server

## Stripe Testing

Use Credit Card # 4111 1111 1111 1111 for testing success scenarios.

More information in their docs: <https://stripe.com/docs/testing#cards>

## Dependencies

- Rails 6.1 [Rails Guide](http://guides.rubyonrails.org/v6.1/)
- Bootstrap 5
- PostgreSQL 9.x
- Stripe

- Tested using Cypress and Rspec

## Screenshots
!["Home Page"](https://github.com/daniscodes/jungle-rails/blob/master/screenshots/HomePage.png)
!["Product Display"](https://github.com/daniscodes/jungle-rails/blob/master/screenshots/Products.png)
!["Cart Dislpay"](https://github.com/daniscodes/jungle-rails/blob/master/screenshots/Cart.png)
!["Admin adds new category"](https://github.com/daniscodes/jungle-rails/blob/master/screenshots/AdminCategory.png)
!["Admin adds new product"](https://github.com/daniscodes/jungle-rails/blob/master/screenshots/AdminProduct.pngg)
