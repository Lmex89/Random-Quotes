import React, { useState } from 'react';
import './App.css';


const Card = () => {
    const [quote, setQuote] = useState('Carpe Diem ');
    const [author, setAuthor] = useState('Anonimo ');

    function randomQuote() {
        const data = require('./quotes.json');
        let dataQuotes = data;
        let rNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[rNum];
        setQuote(randomQuote.quoteText);
        setAuthor("-" + randomQuote.quoteAuthor);

    }

    const handleClick = () => {
        randomQuote();

    };

    return ( <
        div className = "card"
        id = "quote-box" >
        <
        div id = "text" >
        <
        h2 > { quote } < /h2> < /
        div > <
        div id = "author" >
        <
        p > { author } < /p> < /
        div > <
        div id = "buttons" >
        <
        div className = "social-media" >
        <
        /
        div > <
        button onClick = { handleClick }
        id = "new-quote" >

        New Quote <
        /button> < /
        div > <
        /div>
    );
};

function App() {
    return ( <
        div className = "App" >
        <
        Card / >
        <
        /div>
    );
}

export default App;