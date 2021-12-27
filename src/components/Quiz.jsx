import { useEffect, useRef, useState } from 'react';
import '../assets/css/quiz.scss'

export const Quiz = (props) => {  
  return (    
    <div className="quiz">
      <QuestionsCount index={1} total={10}/>
      <QuestionAnswer index={1} question='Inside which HTML element do we put the JavaScript?' options={['javascript', 'scripting', 'js', 'script']}/>
      <Pagination/>
    </div>
  );
}

const QuestionsCount = (props) => {
  return (     
    <span className="questions-count">Question {props.index} of {props.total}</span>    
  )
}

const Pagination = (props) => {
  return (
    <div className="pagination">
      <button className="btn-pagination">First</button>
      <button className="btn-pagination">Prev</button>
      <button className="btn-pagination btn-active">Next</button>
      <button className="btn-pagination">Last</button>
    </div>
  )
}

const QuestionAnswer = (props) => {
  return (
    <div className='question-answer'>
      <div className="question-content">
        <span>{props.index}. {props.question}</span>
      </div>
      <div className="answers">
        {props.options.map((option, index) => (
          <div className="option" key={`question${props.index}-option${index}`}>
            <input type="radio" name={`question-${props.index}`} value={index} />
            <label>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
}