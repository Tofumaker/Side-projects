class SearchesController < ApplicationController

  def index
    @arr = []
    10.times do
      @arr << rand(1..99)
    end
    @arr
  end

  def sort
    @arr = params[:arr]
    i = 0
    @sorted = true
    while i < @arr.length - 1
      if @arr[i] > @arr[i+1]
        @arr[i], @arr[i+1] = @arr[i+1], @arr[i]
        @sorted = false
      end
      i += 1
    end
    @response = {
      arr: @arr,
      sorted: @sorted
    }
    if request.xhr?
      render json: @response
    end
  end


end
