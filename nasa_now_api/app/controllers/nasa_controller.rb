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
                media_type: apod_response['media_type'],
                date: apod_response['date'],
                title: apod_response['title'],
                copyright: apod_response['copyright'],
                hdurl: apod_response['hdurl'],
                url: apod_response['url'],
                explanation: apod_response['explanation'] 
            }
        end 
    end 


    def asteroids
        asteroid_response = Nasa.get_asteroids()

        if asteroid_response['element_count'] != 0
            render json: {
                status: 200,
                links: asteroid_response['links'],
                asteroid_count: asteroid_response['element_count'],
                near_earth_objects: asteroid_response['near_earth_objects']
            }
        end 
    end
end 