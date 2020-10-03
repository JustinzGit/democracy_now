class UsersController < ApplicationController
    def create
        user = User.new(user_params)

        if user.save
            session[:user_id] = user.id
            render json: {
                status: 201,
                logged_in: true,
                user: user
            }
        else
            render json: {
                status: 500,
                error: 'User could not be created'
            }
        end 
    end

    private

    def user_params
      params.permit(:email, :password, :password_confirmation, :street_address, :city, :state, :zip_code, :country)
    end
end 