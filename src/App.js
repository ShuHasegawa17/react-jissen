import logo from './logo.svg';
import './App.css';
import MyHello from './chap3/MyHello';
import Books from './chap3/Books';
import data from './data/books.json';
import QueryPoke from './chap6/QueryPoke';
import FormBasic from './chap4/FormBasic';
import FormYup from './chap4/FormYup';
import TodoList from './todolist/TodoList';

function App() {
  const styleBorder = { border: '1px solid', padding: '20px' };
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
      <div style={styleBorder}>
        <QueryPoke />
      </div>
      <div style={styleBorder}>
        <FormBasic />
      </div>
      <div style={styleBorder}>
        <FormYup />
      </div>
      <div style={styleBorder}>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
