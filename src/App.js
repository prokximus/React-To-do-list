import './App.css';
import Header from './myComponents/Header'
import Footer from './myComponents/Footer';
import { useState } from 'react';
import Todos from './myComponents/Todos';
import AddTodo from './myComponents/AddTodo';

function App() {
  const [toDos, setTodos] = useState([
    {
      'title': 'go to the market',
      'desc': 'buy Momos',
      'date':'23/06/2022',
      'time':'5:47 PM'
    },
    {
      'title':'go to the mall',
      'desc':'buy jordon shoes',
      'date':'23/06/2022',
      'time':'5:47 PM'
    },
    {
      'title':'go To sabzi mandi',
      'desc':'buy bhajiya',
      'date':'23/06/2022',
      'time':'5:47 PM'
    }

  ])
  function onDelete(index){
    console.log('I am ondelete of ',index)
    toDos.splice(index,1)
    setTodos(toDos.filter((e)=>{
      return e!== Todos
    }))
  }
  return (
    <div classnames="App margin-auto">
      <header classnames="App-header">
        <Header title="My To Dos" bool="ture" />
      </header>
      <main>
        <Todos toDos={toDos} onDelete={onDelete}/>
        <AddTodo />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
