import './App.css';
import Header from './myComponents/Header'
import Footer from './myComponents/Footer';
import { useState } from 'react';
import Todos from './myComponents/Todos';
import AddTodo from './myComponents/AddTodo';

function App() {
  function addTodo(Title, Desc) {
    let date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let hour = date.getHours() + 1;
    let minutes = date.getMinutes() + 1;
    let seconds = date.getSeconds() + 1;

    const currentDate = day + '/' + month + '/' + year;
    const currentTime = hour + ':' + minutes + ':' + seconds;
    console.log(currentDate)
    let ToDos = {
      'title': Title,
      'desc': Desc,
      'date': currentDate,
      'time': currentTime
    }
      setTodos(toDos => [...toDos,ToDos])
    }
  const [toDos, setTodos] = useState([
    {
      'title': 'go to the market',
      'desc': 'buy Momos',
      'date': '23/06/2022',
      'time': '5:47 PM'
    },
    {
      'title': 'go to the mall',
      'desc': 'buy jordon shoes',
      'date': '23/06/2022',
      'time': '5:47 PM'
    },
    {
      'title': 'go To sabzi mandi',
      'desc': 'buy bhajiya',
      'date': '23/06/2022',
      'time': '5:47 PM'
    }

  ])
  function onDelete(index) {
    toDos.splice(index, 1)
    setTodos(toDos.filter((e) => {
      return e !== Todos
    }))
  }
  return (
    <div classnames="App margin-auto overflow-x-hidden">
      <header classnames="App-header">
        <Header title="My To Dos" bool="ture" />
      </header>
      <main>
        <Todos toDos={toDos} onDelete={onDelete} />
        <AddTodo addTodo={addTodo} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
