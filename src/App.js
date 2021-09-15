import  React ,{useState ,useEffect}  from "react";
import './App.scss';
import COLORS_ARRAY from './colorsArray'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
let quoteDBUrl = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

function App() {
  const [quote, setQuote] = useState("Life isn’t about getting and having, it’s about giving and being.llo Qoute")
  const [author, setAuthor] = useState("Kevin Kruse")
  const [, setRandomNumber] = useState(0)
  const [quotesArray, setQuotesArray] = useState(null)
  const [accentColor, setAccentColor] = useState('#282c34')
  const fetchQuotes = async (url) => {
    const response = await fetch (url)
    const parsedJson = await response.json()
    setQuotesArray(parsedJson.quotes)
  }

useEffect(() => {
  fetchQuotes(quoteDBUrl)
}, [])

const getRandomQuote = () => {
  let randomInteger = Math.floor(quotesArray.length * Math.random()) 
  setRandomNumber(randomInteger)
  setAccentColor(COLORS_ARRAY[randomInteger])
  setQuote (quotesArray[randomInteger].quote)
  setAuthor(quotesArray[randomInteger].author)
}

  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor :accentColor}}>
        <div id="quote-box" style={{color: accentColor}}>
        <p id="text">
          "{quote}"
          </p>

        <p id="author"> 
          - {author} 
         </p>
         <div className="button">
         <a id="tweet-quote" style={{backgroundColor :accentColor}} href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`}><FontAwesomeIcon icon={faTwitter} /></a>
         </div>
         <button id="new-quote" style={{backgroundColor :accentColor}} onClick={()=> getRandomQuote()}> Next Quote </button>
         
       </div>
      </header>
    </div>
  );
}

export default App;
