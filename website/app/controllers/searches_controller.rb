class SearchesController < ApplicationController

  def index
    @arr = []
    10.times do
      @arr << rand(10..99)
    end
    @arr
  end

  def sort
    @arr = params[:arr]
    @index_pos = params[:swapPosition].to_i
    def swap_processor(i)
      arrow_array = ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none"]
      arrow_array[i]="block"
      return arrow_array
    end
    def sort_array(arr, index_pos)
      if index_pos < arr.length - 1
        i = index_pos
      else
        i = 0
      end
      complete_iteration = 0
      while i < arr.length - 1 && complete_iteration < 2
        if arr[i].to_i > arr[i+1].to_i
          arr[i], arr[i+1] = arr[i+1], arr[i]
          response = {
            arr: arr,
            sorted: false,
            swapPosition: i,
            arrow_array: swap_processor(i)
          }
          return response
        end
        if i < arr.length - 2
          i += 1
        else
          i = 0
          complete_iteration += 1
        end
      end
      response = {
        arr: arr,
        sorted: true,
        swapPosition: "",
        arrow_array: ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none"]
      }
    end

    @response = sort_array(@arr, @index_pos)
    if request.xhr?
      render json: @response
    end
  end

end
