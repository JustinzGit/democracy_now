class SessionsController < ApplicationController
    def create
        user = User.find_by(email: params[:email])

        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: {
                status: 201,
                logged_in: true,
                user: user
            }
        else
            render json: {
                status: 401,
                error: 'Incorrect email or password'
            }
        end 
    end 
end 