import React from "react";
import './index.css'
const triviaImg = require('../../Assets/Trivia.png');
const techBlog = require('../../Assets/TechBlog.png');
const stockIt = require('../../Assets/stockIt.png');


function Projects() {
    return (
        <div className="projects container-fluid">
            <div className="cards">
                <div className="card">
                    <div className="card-body">
                        <img className="project-img" src={triviaImg} alt="Trivia Game App" />
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
                            <button type="button" className="btn git-btn" href="https://github.com/DlonMusk/tech-blog-challenge">Git Hub</button>
                            <button type="button" className="btn deploy-btn" href="https://warm-woodland-22974.herokuapp.com/">Deployed</button>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <img className="project-img" src={stockIt} alt="Stock Watchlist App" />
                        <h5 className="card-title">Stock Watchlist</h5>
                        <p className="card-text">A application to watch and track stocks, this was a group application and I handled the api data handling</p>
                        <div className="buttons-div">
                            <button type="button" className="btn git-btn" href="https://github.com/DlonMusk/stock-it-watch-it">Git Hub</button>
                            <button type="button" className="btn deploy-btn" href="https://dlonmusk.github.io/stock-it-watch-it/">Deployed</button>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <img className="project-img" src="https://www.tesla.com/xNVh4yUEc3B9/04_Desktop.jpg" alt="" />
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="buttons-div">
                            <button type="button" className="btn git-btn">Git Hub</button>
                            <button type="button" className="btn deploy-btn">Deployed</button>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <img className="project-img" src="https://www.tesla.com/xNVh4yUEc3B9/04_Desktop.jpg" alt="" />
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="buttons-div">
                            <button type="button" className="btn git-btn">Git Hub</button>
                            <button type="button" className="btn deploy-btn">Deployed</button>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <img className="project-img" src="https://www.tesla.com/xNVh4yUEc3B9/04_Desktop.jpg" alt="" />
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="buttons-div">
                            <button type="button" className="btn git-btn">Git Hub</button>
                            <button type="button" className="btn deploy-btn">Deployed</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;