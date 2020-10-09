class NasaController < ApplicationController
    def apod
        apod_response = Nasa.get_apod(params[:date])

        if apod_response['code'] == 400
            render json: {
                status: 400,
                error: [apod_response['msg']]
            }

        elsif apod_response['code'] == 401
            render json: {
                status: 401,
                error: ['Houston, we have a problem. Check back soon for the astronomy pic of the day.']
            }

        else
            render json: {
                status: 200,
                date: apod_response['date'],
                title: apod_response['title'],
                copyright: apod_response['copyright'],
                hdurl: apod_response['hdurl'],
                explanation: apod_response['explanation'] 
            }
        end 
    end 
end 