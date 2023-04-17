# Project Outline

## 1. Project Goal 


Our goal is to analyze the video game industry from multiple perspectives. The primary objective of this project is to explore the factors that contribute to the success of a video game.
To achieve the goal and have a whole picture of “what contributes to the success of video games” at the end of the analysis, we will go through the following steps:
- Explore the overall trend in the entire video game industry.
    - Game sales
    - Number of games released
    - Number of players
    - Player online time
- Take “Game Ratings” as the main indicators for measuring the success of a video game. The sales, player number, and average playing time are also key indicators. Explore the factors that contribute to the success of a video game.
    - Find the distribution for the possible factors: Game categories, genres, prices, langues, release time, hardware requirements, developer company/country, and audience.
    - Analyze the potential relationship between these factors and success indicators.

## 2. Data Science Questions

???

## 3. Data Summary

### 3.1 Video Game Sales with Ratings 

Video game sales from Vgchartz and corresponding ratings from Metacritic. (https://www.kaggle.com/datasets/rush4ratio/video-game-sales-with-ratings)


Alongside the fields: Name, Platform, Year_of_Release, Genre, Publisher, NA_Sales, EU_Sales, JP_Sales, Other_Sales, Global_Sales, we have:
- Critic_score - Aggregate score compiled by Metacritic staff
- Critic_count - The number of critics used in coming up with the Critic_score
- User_score - Score by Metacritic's subscribers
- User_count - Number of users who gave the user_score
- Developer - Party responsible for creating the game
- Rating - The ESRB ratings


### 3.2 Video Games Companies Regions 

This is a short dataset that contains information about video-games publishers. (https://www.kaggle.com/datasets/andreshg/videogamescompaniesregions)

- Developer: Company name
- City: City ​​of company headquarters
- Autonomous area: State in the case of United States
- Country: Country ​​of company headquarter
- Notable games: Top video games from the company


### 3.3 Steam Store Games 

Combined data of 27,000 games scraped from Steam and SteamSpy APIs. (https://www.kaggle.com/datasets/nikdavis/steam-store-games?select=steam_support_info.csv)

Features: gameid, name, release_date, language(english 1/0), developer, publisher, platforms, required age, categories(single/multi-player), genres(action/adventure…)


### 3.4 Steam Player Data 

This dataset contains the average players by month for the current top 100 games. It was scraped off https://steamcharts.com/top and converted into this easier to analyze format. (https://www.kaggle.com/datasets/jackogozaly/steam-player-data)


Features: month_year, avg_player, gain(gain in users from the prior month), percent_gain, peak_players, game_name


## 4. Visulization Summary

### 4.1 

