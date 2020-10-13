class UsersController < ApplicationController
    def create
        user = User.new(user_params)

        if user.save
            session[:user_id] = user.id
            render json: {
                status: 201,
                user: user
            }
        else
            render json: {
                status: 500,
                error: user.errors.full_messages
            }
        end 
    end

    private

    def user_params
      params.permit(:email, :password, :password_confirmation)
    end
end 