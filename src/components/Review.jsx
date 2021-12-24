import '../assets/css/review.scss';

const AnswerStatus = (props) => {
  return (
    <div className={`answer-status ${props.status && 'answered'}`}>{props.index}. {props.status ? 'Answered' : 'Not Answered'}</div>
  )
}
export const Review = (props) => {
  const answers = [1,1,1,1,0,0,0,0,0,1];
  return (    
    <div className="review-status">
      { answers.map((status, index) => {
        return <AnswerStatus key={`status-${index}`} status={status} index={index+1}/>
      })}
    </div>    
  );
}