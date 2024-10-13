import Sentiment from 'sentiment'
import './App.css'
import { useEffect, useState } from 'react';

const App = () => {
  const sentiment = new Sentiment();
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState();

  useEffect(() => {
    const tempResult = sentiment.analyze(inputText);
    setResult(tempResult);
    console.log(tempResult);
  }, [inputText]);

  return (
    <div className='app-header'>
      <p className="icon">{result?.score === 0 ? '😐' : result?.score > 0 ? '😃' : '😔'}</p>
      <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder='Enter your text here' />
      <div className="result">
        {result?.negative.map((item) => <span className="negative">{item}</span> )}
        {result?.positive.map((item) => <span className="positive">{item}</span> )}
      </div>
    </div>
  )
}

export default App
