# frozen_string_literal: true

class StoreController < ApplicationController
  def index
    @products = Stripe::Product.list.to_json
    @skus = Stripe::SKU.list.to_json
  end
end
