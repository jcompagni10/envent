class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  helper_method :current_user

  def login(user)
    session[:session_token] = user.reset_session_token
  end

  def logout
    current_user.reset_session_token
    session[:session_token] = nil
    true
  end

  def current_user
    User.find_by(session_token: session[:session_token])
  end


  def event_data(association, admin = false)
    event_id = params[:event_id]
    if event_id == "undefined"
      data = class_name.all
    elsif event_id == event_id.to_i.to_s
      # find by event_id
      event = Event.find_by(id: event_id)
      @admin = event.creator if admin
      data = event.send(association)
    else
      # find by event tag
      event = Event.find_by(tag: event_id)
      data = event.send(association)
      @admin = event.creator if admin
    end
    data
  end
end
