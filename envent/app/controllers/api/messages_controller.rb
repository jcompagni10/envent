class Api::MessagesController < ApplicationController

  def show
    @message = Message.find(params[:id])
    render :show
  end

  def index
    event_id = params[:event_id]
    if event_id == "undefined"
      @messages = Messages.all
    elsif event_id == event_id.to_i.to_s
      @messages = Event.find_by(id: event_id).messages
    else
      @messages = Event.find_by(tag: event_id).messages
    end

    render :index
  end

  def create
    @message = Message.new(message_params)
    if @message.save
      render :show
    else
      render json: @message.errors.full_messages, status: 422
    end
  end
  
  def update
    @message = Message.find(params[:id])
    if @message.update_attributes(message_params)
      render :show
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def destroy
    @message = Message.find(params[:id])
    @message.destroy
    render json: {}
  end
  
  private

  def message_params
    params.require(:message).permit(:event_id, :author_id, :body)
  end
end
