class SessionsController < ApplicationController
    def create
        user = User.find_by(email: params[:email])

        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: {
                status: 200,
                user: user
            }
        else
            render json: {
                status: 401,
                error: ["Incorrect Email or Password"]
            }
        end 
    end
    
    def logout
        reset_session
        render json: { status: 200 }
    end

    def current_login
        if logged_in?
            render json: {
                logged_in: true,
                user: current_user
            }
        else
            render json: {
                logged_in: false
            }
        end
    end 
end 