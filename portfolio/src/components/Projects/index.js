import React from "react";
import './index.css';

const triviaImg = require('../../Assets/Trivia.png');
const techBlog = require('../../Assets/TechBlog.png');
const stockIt = require('../../Assets/stockIt.png');
const weatherApp = require('../../Assets/WeatherApp.png');
const codeQuiz = require('../../Assets/CodeQuiz.png');
const Locally = require('../../Assets/Locally.png');


function Projects() {
    return (
        <div className="projects container-fluid">
            <div className="cards">
            <div className="card">
                    <div className="card-body">
                        <img className="project-img" src={Locally} alt="Locally App img" />
                        <h5 className="card-title">Locally App</h5>
                        <p className="card-text">A Fullstack web application to buy and sell products locally</p>
                        <div className="buttons-div">
                            <a type="button" className="btn git-btn" href="https://github.com/DlonMusk/Locally">Git Hub</a>
                            <a type="button" className="btn deploy-btn" href="https://dry-badlands-98649.herokuapp.com/">Deployed</a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="img-animator">
                            <img className="project-img" src={triviaImg} alt="Trivia Game App" />
                        </div>
                        <h5 className="card-title">VS Trivia game</h5>
                        <p className="card-text">Movie trivia game to test your knowledge in multiple categories</p>
                        <div className="buttons-div">
                            <a type="button" className="btn git-btn" href="https://github.com/DlonMusk/fullstack-movie-vs-trivia">Git Hub</a>
                            <a type="button" className="btn deploy-btn" href="https://serene-carlsbad-caverns-28814.herokuapp.com/login">Deployed</a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <img className="project-img" src={techBlog} alt="Tech Blog App" />
                        <h5 className="card-title">Tech Blog</h5>
                        <p className="card-text">A Fullstack blog application for learners built using SQL, Sequelize and a MVC architecture</p>
                        <div className="buttons-div">
                            <a type="button" className="btn git-btn" href="https://github.com/DlonMusk/tech-blog-challenge">Git Hub</a>
                            <a type="button" className="btn deploy-btn" href="https://warm-woodland-22974.herokuapp.com/">Deployed</a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <img className="project-img" src={stockIt} alt="Stock Watchlist App" />
                        <h5 className="card-title">Stock Watchlist</h5>
                        <p className="card-text">A application to watch and track stocks, this was a group application and I handled the api data handling</p>
                        <div className="buttons-div">
                            <a type="button" className="btn git-btn" href="https://github.com/DlonMusk/stock-it-watch-it">Git Hub</a>
                            <a type="button" className="btn deploy-btn" href="https://dlonmusk.github.io/stock-it-watch-it/">Deployed</a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <img className="project-img" src={weatherApp} alt="Weather App" />
                        <h5 className="card-title">Weather App</h5>
                        <p className="card-text">An Application to check the weather in a searched location</p>
                        <div className="buttons-div">
                            <a type="button" className="btn git-btn" href="https://github.com/DlonMusk/weather-dashboard-challenge">Git Hub</a>
                            <a type="button" className="btn deploy-btn" href="https://dlonmusk.github.io/weather-dashboard-challenge/">Deployed</a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <img className="project-img" src={codeQuiz} alt="Code Quiz App" />
                        <h5 className="card-title">Coding Quiz</h5>
                        <p className="card-text">A web application to test your knowledge and try to beat your highscore</p>
                        <div className="buttons-div">
                            <a type="button" className="btn git-btn" href="https://github.com/DlonMusk/code-quiz-challenge">Git Hub</a>
                            <a type="button" className="btn deploy-btn" href="https://dlonmusk.github.io/code-quiz-challenge/">Deployed</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;