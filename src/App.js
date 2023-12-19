import logo from './logo.svg';
import './App.css';
import MyHello from './chap3/MyHello';
import Books from './chap3/Books';
import data from './data/books.json';
import QueryPoke from './chap6/QueryPoke';
import FormBasic from './chap4/FormBasic';

function App() {
  const bookList = JSON.parse(JSON.stringify(data)).books;
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      {/* <MyHello name={'shu'} />
      <MyHello />
      <Books books={bookList}></Books> */}
      <QueryPoke />
      <FormBasic />
    </div>
  );
}

export default App;
