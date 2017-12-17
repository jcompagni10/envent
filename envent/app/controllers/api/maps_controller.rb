class Api::MapsController < ApplicationController
  
  def create
    @map = Map.new(map_params)
    @map.event_id = params[:event_id]
    if @map.save
      render :show
    else
      render json: @map.errors.full_messages, status: 422
    end
  end

  def show
    event = Event.find(params[:event_id])
    
    @map = event.map
    # @map = Map.find(params[:id]) 
  
   
    render :show
  end

  def update 
    
  end

  def destroy
    @map = Map.find(params[:id])
    @map.destroy
    render json: {}
  end

  private

  def map_params
    params.require(:map).permit(
      :title, 
      :img_url,
      # :event_id
    )
  end
end
