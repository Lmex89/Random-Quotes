import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import './App.css';


const Example = {
  quote : "Carpe Diem",
  author : "Anonimo" 
}

const Card = () => {
  const [quote, setQuote] = useState(Example.quote);
  const [author, setAuthor] = useState(Example.author);

  function randomQuote() {
    const data = require('./quotes.json'); 
    let dataQuotes = data;
    let rNum = Math.floor(Math.random() * dataQuotes.length);
    let randomQuote = dataQuotes[rNum];
    setQuote(randomQuote.quoteText);
    setAuthor('-' + randomQuote.quoteAuthor);
  }

  const handleClick = () => {
    randomQuote();
  };


  return (
    <div className="card col-12 col-sm-8 col-md-6 d-flex justify-content-center" id="quote-box">
      <div className= "card-body">
      <div id="text">
        <h2> {quote} </h2>{' '}
      </div>{' '}
      <div id="author">
        <p> {author} </p>{' '}
      </div>{' '}
      <div id="buttons">
        <div className="social-media"> 
        <button onClick={handleClick} id="new-quote">
          New Quote{' '}
        </button>{' '}
      </div>{' '}
      </div>
    </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Card />
    </div>
  );
}

export default App;
