class Api::MapsController < ApplicationController
  
  def create
    @map = Map.new(map_params)
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

  def destroy
    @map = Map.find(params[:id])
    @map.destroy
    render json: {}
  end

  private

  def map_params
    params.require(:schedule_items).permit(
      :title, 
      :img_url,
      :event_id
    )
  end
end
