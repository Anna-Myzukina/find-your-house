# Final Capstone Project: Find Your House

![screen](https://github.com/Anna-Myzukina/find-your-house/blob/master/app/assets/images/screen.png)
### The reset to undo changes. The clean to remove any untracked files and directories.

            $ git reset --hard HEAD
            $ git clean -fd 

* NOTE before start chreate project using this command (name_of_project it`s example, you should change it on your own name of your project for example: facebook-clone...)

        rails new name_of_project --webpack=react --database=postgresql
       
* NOTE itis very important!!! You should install postgresql in your operating system! Next article should help: [How To Install and Use PostgreSQL on Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04)
        
        
## Materials to study:

* [ ] Article (Let’s Build a CRUD App with Ruby on Rails and React.js)[https://medium.com/@zayneabraham/lets-build-a-crud-app-with-ruby-on-rails-and-react-js-4308205d0adc]
* [ ] Video Part 1 (Let's build a CRUD app with Ruby on Rails and React.js - Part 1)[https://www.youtube.com/watch?time_continue=49&v=oyjzi837wME&feature=emb_logo]
* [ ] Video Part 2 (Let's build a CRUD app with Ruby on Rails and React.js - Part 2)[https://www.youtube.com/watch?v=F0xErjOtJAQ]
* [ ] Video Part 3 (Let's build a CRUD app with Ruby on Rails and React.js - Part 3)[https://www.youtube.com/watch?v=R19RT76rRa8]
* [ ] This article and video can be useful [The Ultimate Intermediate Ruby on Rails Tutorial: Let’s Create an Entire App!](https://www.freecodecamp.org/news/lets-create-an-intermediate-level-ruby-on-rails-application-d7c6e997c63f/) , 
* [ ] also this article [Adding Authentication with Devise](https://guides.railsgirls.com/devise) 
* [ ] and video: [Testing with RSpec](https://www.youtube.com/watch?v=71eKcNxwxVY)

* NOTE If you forgot during creating your app add next peace of code --database=postgresql please follow next article [Making the Change From SQLite3 to PostgreSQL - Ruby on Rails](https://dev.to/torianne02/making-the-change-from-sqlite3-to-postgresql-ruby-on-rails-2m0p) and add postgresql manually : But main you should add lat version of postgress.

* NOTE if you need to add column to your database please use next command

        rails generate migration add_fieldname_to_tablename fieldname:string. 
        
        
* NOTE Sometimes, even dropping a local development database is not a good idea. There are better ways to delete/destroy a specific migration in your Rails application.

You could use rails d migration command to destroy a particular migration:

rails d migration MigrationName
To undo the changes corresponding to a particular migration, you can use db:migrate:down method like this:

        rake db:migrate:down VERSION=XXX

* version you can find in file schema.rb

after you that command you delete that file donot forgor to run

        rails db:migrate

### How to start with --api

        rails new name-of-application --webpack=react --database=postgresql  --api -T

#### This will do next things for you:

* The `-T` flag instructs Rails to skip the generation of test files, since you won’t be writing tests for the purposes of this tutorial. This command is also suggested if you want to use a Ruby testing tool different from the one Rails provides.

* The --webpack instructs Rails to preconfigure for JavaScript with the webpack bundler, in this case specifically for a React application.

* Configure your application to start with a more limited set of middleware than normal. Specifically, it will not include any middleware primarily useful for browser applications (like cookies support) by default.

* Make ApplicationController inherit from ActionController::API instead of ActionController::Base. As with middleware, this will leave out any Action Controller modules that provide functionalities primarily used by browser applications.

* Configure the generators to skip generating views, helpers, and assets when you generate a new resource.

### Start without --api

! If you created your app running next command 

            rails new name-of-application --webpack=react --database=postgresql -T

and now you want to take an existing application and make it an API one, follow the next steps: 

In `config/application.rb` add the following line at the top of the Application class definition:

            config.api_only = true
            
In `config/environments/development.rb`, set `config.debug_exception_response_format` to configure the format used in responses when errors occur in development mode.

To render an HTML page with debugging information, use the value `:default`.

            config.debug_exception_response_format = :default
            
To render debugging information preserving the response format, use the value `:api`.

            config.debug_exception_response_format = :api
            
By default, `config.debug_exception_response_format` is set to `:api`, when config.api_only is set to true.

Finally, inside `app/controllers/application_controller.rb`, instead of:

                        class ApplicationController < ActionController::Base
                        end
do:

                        class ApplicationController < ActionController::API
                        end

        
        
        
        
### Testing https://leanpub.com/everydayrailsrspec/read_sample

## Features

- [ ] The user logs in the app, only by typing the username (a proper authenticated login is not a mandatory requirement, but it is in the nice-to-have list)

- [ ] The user is presented with a list of houses: apartment, house, room, etc.

- [ ] When a user selects a house, detailed information about the house is presented and the possibility add it to favourites

- [ ] The user can access a list of favourite apartments

* The database should have at least 2 tables — in this example, houses and favourites, i.e., the favourites can be accessed by all users unless you implement a proper user authentication (more on this later). To create ERD(Entity Relationship Diagram) diagram, it`s image of your future database, I used online tool [lucidchart](https://www.lucidchart.com/) to draw that diagram, create folder "docs" and add to folder that image with diagram. Follow this video to understand how it works [Entity Relationship Diagram (ERD) Tutorial - Part 1](https://www.youtube.com/watch?v=QpdhBUYk7Kk&vl=en)
* Watch next video to be familiar with Primary and Foreign Keys [Entity Relationship Diagram (ERD) Tutorial - Part 2](https://www.youtube.com/watch?v=-CuY5ADwn24)

Here is a screenshot with example of such image with diagram:
![screen](#)


## Environment:

- [ ] ruby '2.7.0'
- [ ] 'rails', '~> 6.0.3', '>= 6.0.3.1'
* 
##### I recommended to add next gems:



gem 'rails', '~> 6.0.3', '>= 6.0.3.1'
gem 'pg', '>= 0.18', '< 2.0'
gem 'puma', '~> 4.1'
gem 'sass-rails', '>= 6'
gem 'webpacker', '~> 4.0'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.7'
gem 'fast_jsonapi'
gem 'bootsnap', '>= 1.4.2', require: false
        
 
 Than use next command in your terminal
 
      $  bundle install
      $  bundle update

## Getting started
- [ ] To get started with the app, clone the repo and then install the needed gems:

```
$ bundle install --without production
```

- [ ] Next, migrate the database:

```
$ rails db:create
```

```
$ rails db:migrate
```

- [ ] Bootstrap, for styling your front-end components. jQuery and Popper, for working with Bootstrap. Run the following command in your Terminal window to install these packages with the Yarn package manager:

```
$  yarn add react-router-dom bootstrap jquery popper.js
```

- [ ] To run app

```
$ rails s
```



## Users, houses, favourits

In this project we Create models with associations and implement all requested features for users, houses and favourites. Add authentication as described in requirements.

```
rails generate scaffold User first_name:string last_name:string
```

```
rails db:migrate
```




### Run tests

Finally, run the test suite to verify that everything is working correctly:

```
$ rails db:migrate
```

## Run tests

- [ ] If the test suite passes, you'll be ready to run the app in a local server:

```
$ rails server
```
- [ ] Finally, run the test suite to verify that everything is working correctly:

```
$ rails generate rspec:install
```

```
$ rspec
```

## Show your support

- [ ] Give a ⭐️ if you like this project!

## 📝 License

* [ ] See [LICENSE.md]() for details.

## Authors

👤 **Author1**
* GitHub: [Anna Muzykina](https://github.com/Anna-Myzukina)
* LinkedIn: [Anna Muzykina](https://www.linkedin.com/in/anna-muzykina/)
* email: anna.muzykina83@gmail.com
