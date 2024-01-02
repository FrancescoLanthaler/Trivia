import { useState, useEffect, useCallback } from 'react'
import './App.css'
import he from 'he';
import PulseLoader from "react-spinners/PulseLoader";


function Question(props) {
  const { text } = props;
  return (
    <div className='question'>
      <h2>{he.decode(text)}</h2>
    </div>
  )
}

function Button(props) {
  const { text, onClick, className, disabled } = props;
  return (
    <button disabled={disabled} className={className} onClick={onClick}>{text}</button>
  )
}


function Option(props) {
  const { answered, text, correct, onAnswerClick } = props;
  const [cls, setCls] = useState("");

  useEffect(() => {
    if (answered) {
      if (correct) {
        setCls("correct");
      } else {
        setCls("wrong")
      }
    }
    else {
      setCls("");
    }
  }, [answered, props]);

  return (
    <Button text={text} disabled={answered} onClick={() => { onAnswerClick(); }} className={`answer ${cls}`} />
  )
}


function Answers({ answers, checkAnswer }) {
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    setAnswered(false);
  }, [answers]);

  return (
    <div className='answers'>
      {answers.map((answer) => (
        <Option key={answer.text} answered={answered} text={he.decode(answer.text)} correct={answer.correct} onAnswerClick={() => { checkAnswer(answer); setAnswered(true); }} />
      ))}
    </div>
  )
}

function QuestionBlock(props) {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [error, setError] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [start, setStart] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(() => {
    setLoading(true);
    return fetch('https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        setLoading(false);
        return response.json();
      })
      .then(json => setData(json))
      .catch(error => { setError(error.message); setStart(false) });
  }, []);

  useEffect(() => {
    if (start && answeredQuestions > 10) {
      setAnsweredQuestions(0);
      setCount(0);
      setStart(false);
    }
  }, [answeredQuestions, start, fetchData]);

  const dataArr = data?.results || [];

  useEffect(() => {
    if (start && data?.results.length > 0) {
      setAnswers(createAnswers());
    }
  }, [data, answeredQuestions, start]);

  function createAnswers() {
    const currentQuestion = data?.results[answeredQuestions];
    if (currentQuestion) {
      const incorrect = currentQuestion.incorrect_answers.map((answer) => ({ text: answer, correct: false }));
      const updatedAnswers = [...incorrect, { text: currentQuestion.correct_answer, correct: true }];
      return updatedAnswers.sort(() => Math.random() - 0.5);
    }
    return [];
  }

  function handleAnswer(text) {
    if (text.correct) {
      console.log('Correct!');
      setCount(count + 1);
    } else {
      console.log('Wrong!');
    }
    setTimeout(() => {
      setAnsweredQuestions(answeredQuestions + 1);
    }, 1000);
  }

  if (start) {
    return (
      <>
        {loading && <PulseLoader color="#6a6a6a" />}

        {answeredQuestions < dataArr.length && (
          <>
            <Question text={dataArr[answeredQuestions]?.question} />
            <Answers answers={answers} checkAnswer={handleAnswer} />
          </>
        )}
        {answeredQuestions >= dataArr.length && dataArr.length !== 0 &&
          <>
            <h2>Quiz completed!</h2>
            <p>Score: {count}</p>
            <Button text="Start again" onClick={() => { setStart(true); fetchData().then(() => { setAnsweredQuestions(0); setCount(0); }); }} className="start" />
          </>}
      </>
    );
  } else {
    return (
      <>
        <StartScreen onStartClick={() => { setStart(true); fetchData(); }} />
        {
          error &&
          <>
            <p>{error}</p>
            <p>Please wait a couple of seconds before trying again.</p>
          </>
        }
      </>
    );
  }
}

function StartScreen(props) {
  const { onStartClick } = props;

  return (
    <div>
      <h1>Test your knowledge</h1>
      <Button text="Start the quiz" onClick={onStartClick} className="start" />
    </div>
  )
}

function App() {
  return (
    <>
      <div className="App">
        <QuestionBlock />
      </div>
    </>
  );
}

export default App;
