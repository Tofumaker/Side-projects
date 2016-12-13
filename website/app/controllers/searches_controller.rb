class SearchesController < ApplicationController

  def index
    @arr = []
    10.times do
      @arr << rand(10..99)
    end
    @arr
  end

  def sort
    def sort_array()

    end
    @arr = params[:arr]
    i = 0
    @sorted = true
    while i < @arr.length - 1
      if @arr[i].to_i > @arr[i+1].to_i
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
