import './App.css';
import Header from './myComponents/Header'
import Footer from './myComponents/Footer';
import { useState } from 'react';
import Todos from './myComponents/Todos';

function App() {
  const [toDos, setTodos] = useState([
    {
      'title': 'go to the market',
      'desc': 'buy Momos'
    },
    {
      'title':'go to the mall',
      'desc':'buy jordon shoes',
    },
    {
      'title':'go To sabzi mandi',
      'desc':'buy bhajiya',
    }

  ])
  return (
    <div classnamename="App">
      <header classnamename="App-header">
        <Header title="My To Dos" bool="ture" />
      </header>
      <main>
        <Todos toDos={toDos}/>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
