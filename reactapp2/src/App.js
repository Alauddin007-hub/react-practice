import logo from './logo.svg';
import './App.css';

const welcome = {
  greeting: 'Hey',
  title: 'React',
  };

  function getTitle(title) {
    return title;
    }

    const numbers = [10, 20, 30, 40, 50];
    
  

function App() {
  const title = 'REACT'; 
  return (
    <div className="App">
   {/* <div> */}
      <h1>{getTitle("Hello")} {welcome.title} World</h1>
      <Search />
      <hr />
    
    {/* <List /> */}  <List></List>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function Search (){
  return(
    <>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </>
  )
}

function List(){
  return(
    <ol>
      {numbers.map(function(num){
        return <li> {num} </li>  
      })}
    </ol>
  )
}

export default App;
