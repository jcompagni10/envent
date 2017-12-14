class Api::InfoController < ApplicationController
  def create
    @info = Info.new(info_params)
    if !@info.event_id
      @info.event_id = params[:event_id]
    end
    
    if @info.save
      render :show
    else
      render json: @info.errors.full_messages, status: 422
    end
  end

  def show
    # @info = Info.find(params[:id])
    @info = Event.find(params[:event_id]).info
    render :show
  end

  def update
    # @info = Info.find(params[:id])
    # debugger;
    @info = Event.find(params[:event_id]).info
    if @info.update_attributes(info_params)
      render :show
    else
      render json: @info.errors.full_messages, status: 422
    end
  end
  
  private
  
  def info_params
    params.require(:info).permit(
      :start_date,
      :end_date,
      :location,
      :message,
      :event_id
    )
  end
end
