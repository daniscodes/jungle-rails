class Admin::DashboardController < ApplicationController
  def show
    @products = Product.count
    @catagories = Category.count
  end
end
