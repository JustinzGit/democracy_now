# NASA Now
NASA Now is a web application built to display available data from [NASA's API portal](https://api.nasa.gov/). 
Currently, users can sign up and view information on nearby asteroids and NASAs 'Astronomy Picture of the Day'. 

# Installation
- Fork and clone this repository
- Be sure to have RubyGems installed (Ruby version 1.9+ comes with RubyGems by default)
- Be sure to have Rails installed (Rails 6.0.3.1+) [Rails Guide](https://guides.rubyonrails.org/v5.0/getting_started.html)
- Install the ruby gem bundler by running `gem install bundler` from the command line 
- In folder `nasa_now_api` install application dependencies by running `bundle install`
- In folder `nasa_now_api` run `rails s -p 3001` to start a rails server on port 3001
- In folder `nasa_now_client` run `npm install && npm start` to install dependencies and view the application within a browser

## Contributing
Bug reports and pull requests are welcome on GitHub at https://github.com/JustinzGit/nasa_now. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct

## License
This application is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).