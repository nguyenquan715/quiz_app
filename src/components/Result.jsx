export const Result = (props) => {
  return (
    <Question index={1} question='Inside which HTML element do we put the JavaScript?' options={['javascript', 'scripting', 'js', 'script']} isCorrect={false}/>
  );
}
const Question = (props) => {
  return (
    <div className="question-block">
      <div className="question-content">
        <span><b>{props.index}. {props.question}</b></span>
      </div>
      <div className="answers">
        {props.options.map((option, index) => <input type="checkbox" name={`question-${props.index}`} value={index}>{option}</input>)}
      </div>
      <div className={`question-result ${props.isCorrect && 'correct'}`}>{props.isCorrect ? 'Your answer is Correct' : 'Your answer is Incorrect'}</div>
    </div>
  );
}