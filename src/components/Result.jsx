import '../assets/css/result.scss';

export const Result = (props) => {
  return (
    <div className="questions-board">
      <Question index={1} question='Inside which HTML element do we put the JavaScript?' options={['javascript', 'scripting', 'js', 'script']} isCorrect={true}/>
      <Question index={2} question='Inside which HTML element do we put the JavaScript?' options={['javascript', 'scripting', 'js', 'script']} isCorrect={true}/>
      <Question index={3} question='Inside which HTML element do we put the JavaScript?' options={['javascript', 'scripting', 'js', 'script']} isCorrect={false}/>
      <Question index={4} question='Inside which HTML element do we put the JavaScript?' options={['javascript', 'scripting', 'js', 'script']} isCorrect={false}/>
      <Question index={5} question='Inside which HTML element do we put the JavaScript?' options={['javascript', 'scripting', 'js', 'script']} isCorrect={false}/>
      <Question index={6} question='Inside which HTML element do we put the JavaScript?' options={['javascript', 'scripting', 'js', 'script']} isCorrect={false}/>
      <Question index={7} question='Inside which HTML element do we put the JavaScript?' options={['javascript', 'scripting', 'js', 'script']} isCorrect={true}/>
      <Question index={8} question='Inside which HTML element do we put the JavaScript?' options={['javascript', 'scripting', 'js', 'script']} isCorrect={true}/>
    </div>
  );
}
const Question = (props) => {
  return (
    <div className={`question-block ${props.isCorrect ? 'question-correct' : 'question-incorrect'}`}>
      <div className="question-content">
        <span><b>{props.index}. {props.question}</b></span>
      </div>
      <div className="answers">
        {props.options.map((option, index) => (
          <div className="option" key={`question${props.index}-option${index}`}>
            <input type="radio" name={`question-${props.index}`} value={index} />
            <label>{option}</label>
          </div>
        ))}
      </div>
      <div className={`question-result ${props.isCorrect ? 'correct' : 'incorrect'}`}>{props.isCorrect ? 'Your answer is Correct' : 'Your answer is Incorrect'}</div>
    </div>
  );
}