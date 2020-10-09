class Nasa < ApplicationRecord
    NASA_API_KEY = ENV['nasa_api_key']

    def self.get_apod(date=nil)
        date = Time.now.strftime("%F") if !date
        response = Faraday.get "https://api.nasa.gov/planetary/apod?api_key=#{NASA_API_KEY}&date=#{date}&hd=true"
        response = JSON.parse response.body
    end

    def self.get_asteroids()
        response = Faraday.get "https://api.nasa.gov/neo/rest/v1/feed?&api_key=#{NASA_API_KEY}"
        response = JSON.parse response.body
    end 
end
