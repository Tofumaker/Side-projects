class SearchesController < ApplicationController
  def index
    @arr = []
    10.times do
      @arr << rand(1..99)
    end
    @arr
  end

  def sort
    @response = "harroooo"
    p "HARoooooooO!"
    if request.xhr?
      render json: @response
    end
  end





end
