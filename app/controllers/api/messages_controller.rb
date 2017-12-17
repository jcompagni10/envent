class Api::MessagesController < ApplicationController

  def show
    @message = Message.find(params[:id])
    render :show
  end

  def index
    @messages = event_data("messages")
    render :index
  end

  def create
    @message = Message.new(message_params)
    @message.event_id = params[:event_id]
    unless @message.author_id
      @message.author = User.find_by(session_token: params[:message][:sessionToken])
    end
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
