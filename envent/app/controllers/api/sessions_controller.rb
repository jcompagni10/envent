class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params)
    if @user
      login(@user)
      render :show
    else
      render json: ['Invalid Password/Username'], status: 422
    end
  end

  def destroy
    if current_user
      logout
      render json: { success: true }
    else
      render json: ["No User Logged In"], status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
