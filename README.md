(View Raw will give you the markdown that you can copy to your repos!)


![MIT LICENSE](https://img.shields.io/github/license/lucasgabrielson/weekend-movie-sagas.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/lucasgabrielson/weekend-movie-sagas.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/lucasgabrielson/weekend-movie-sagas.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/lucasgabrielson/weekend-movie-sagas.svg?style=social)

# PROJECT NAME

## Description

_Duration: 2 Days_

In this project I wanted to learn how to use sagas in redux and many to many sql joins. I took a collection of movies and allowed users to click the films in order to see the description and genres associated with the fims. To accomplish this I created three databases that stores the total available genres, the movies and their descriptions and a database that linked those two databases. I used hashrouters and params to take users from the MovieList to the description of the films. The params allows the user to refresh the page and continue to see the description of the film. I styled the app simply using CSS grid. 

## Screen Shot

<img width="410" alt="Screen Shot 2021-04-11 at 4 01 18 PM" src="https://user-images.githubusercontent.com/74149109/114323672-dff06d80-9aeb-11eb-8930-3d283c4c43e8.png">
<img width="412" alt="Screen Shot 2021-04-11 at 4 01 28 PM" src="https://user-images.githubusercontent.com/74149109/114323673-e252c780-9aeb-11eb-9e56-b19e36b18127.png">


### Prerequisites

- [Node.js](https://nodejs.org/en/)


## Installation

1. Create a database named `your database name`,
2. The queries in the `tables.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries.  
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage

1. Add movies to your database through the application or database
2. Deploy on heroku to share with your friends



## Built With

- React
- Redux
- React-sagas
- JS
- Node.js
- Express
- PostgreSQL


## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. (Thank your people)

## Support
If you have suggestions or issues, please email me at lucascgabrielson@gmail.com
