# News Aggregator

News Aggregator is a centralized platform to search for and read articles from 1000+ news sources, spanning a variety of different opinions.

## Setup and Installation

1. Make sure you have Node.js installed. You can download it here at [https://nodejs.org](https://nodejs.org).
2. Clone this repository with this command. `git clone https://github.com/andyl5/news-aggregator.git`
3. Sign up for a NewsAPI api key at [https://newsapi.org](https://newsapi.org). Open the file `.env` in a text editor and replace your-api-key-here with your api key. `REACT_APP_API_KEY=your-api-key-here` 
4. Open two terminals. Navigate both terminals to the project directory.
5. In one of the terminals, install the project dependencies. `npm install` Then, run the frontend application. `npm run start`
6. In the other terminal, run the backend. `node ExpressBackend.js`

## Features
* Search articles by search term
* Search articles by predefined categories
* Read articles without going to the original article website

## Technology Stack
* React
* Bootstrap
* Express
* Node
* NewsAPI
