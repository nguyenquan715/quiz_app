import '../assets/css/layout.scss';
import { PAGE } from './../constants/constants';

export const Layout = (props) => {
  return (
    <div className="container">
      <Header/>
      <div className="main-content">
        {props.children}
      </div>
      <Footer handleClickPage={(id) => props.handleClickPage(id)}/>
    </div>
  );
}

const Header = (props) => {
  return (
    <div className="header">
      <div className="header-above">
        <span className="header-text">
          Quiz Application
        </span>
        <form>
          <div className="form-group">
            <label>Select Quiz:</label>
            <select className="form-control" name="quiz-select" id="quiz-select">
              <option value="1">Javascript</option>
              <option value="2">ASP.NET</option>
              <option value="3">C Sharp</option>
              <option value="4">Design Patterns</option>
            </select>
          </div>
        </form>
      </div>
      <div className="header-under">
        <p>Javascript Quiz</p>
      </div>
    </div>
  );
}

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="button-block">
        <button className="info" onClick={() => {props.handleClickPage(PAGE.QUIZ)}}>Quiz</button>
        <button className="info" onClick={() => {props.handleClickPage(PAGE.REVIEW)}}>Review</button>
        <button className="primary" onClick={() => {props.handleClickPage(PAGE.RESULT)}}>Submit Quiz</button>
      </div>
    </div>
  );
}