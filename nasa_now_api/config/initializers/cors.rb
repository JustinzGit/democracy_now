Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
        origins 'https://nasa-now-frontend.herokuapp.com'
        resource '*', headers: :any, methods: [:get, :post, :patch, :put, :delete], credentials: true 
    end  
end 