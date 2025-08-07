
import React,{useState} from "react";

const PortfolioPage = () => {

  return (
    <div>
    <h2><center>My Projects</center></h2>
    <section className="portfolio">
        <div className="proj">
          <h3 className="project">1.School Bus Tracking And Attendance System</h3>
          <p className="des">This is TYBSC Computer Science Final Year Group Project</p>
          <p>Project Idea By Anosh Chodankar</p>
          <p>App was made using Android Studio with Language as Java</p>
          <p>Server using Node.js</p>
          <p>Database using PostgreSQL</p>
          <a href="https://github.com/Ayush-Maldar/School-Bus-Tracking-and-Attendance-System.git">Github Link</a>
        </div>

        <div className="proj">
          <h3 className="project">2.To do List</h3>
          <p>This is done using HTML,CSS and Javascript</p>
          <a href="https://ayush-maldar.github.io/Todolist">Try Here</a>
          <br/>
          <a href="https://github.com/Ayush-Maldar/Todolist.git">Github Link</a>
        </div>

        <div className="proj">
          <h3 className="project">3.Tic Tac toe</h3>
          <p>This is done using HTML,CSS and Javascript</p>
          <a href="https://ayush-maldar.github.io/Tictactoe">Try Here</a>
          <br/>
          <a href="https://github.com/Ayush-Maldar/Tictactoe.git">Github Link</a>
        </div>

        <div className="proj">
          <h3 className="project">4.Chess</h3>
          <p>This is done using HTML,CSS and Javascript</p>
          <a href="https://ayush-maldar.github.io/Chess">Try Here</a>
          <br/>
          <a href="https://github.com/Ayush-Maldar/Chess.git">Github Link</a>
        </div>
    </section>
    </div>
  );
};

export default PortfolioPage;