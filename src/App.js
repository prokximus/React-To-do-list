import logo from './logo.svg';
import './App.css';
import Header from './myComponents/Header'
import Main from './myComponents/main'
import Footer from './myComponents/Footer';

function App() {
  return (
    <div classNameName="App">
      <header classNameName="App-header">
        <Header title="My To Dos" bool="ture"/>
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
