import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoConfig from "./TodoConfig";
import "../stylesheets/Todo.css"
import "../stylesheets/responsive/TodoResponsive.css"

function Todo() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);

  function handleChange(e) {

    setTodo(e.target.value);

  }

  function handleSubmit(e) {

    if(todo != " "){
      e.preventDefault();

      const newTodo = {
        title: todo,
        id: uuidv4(),
        finished: false
      };
  
      setList([...list, newTodo]);
  
      setTodo(" ");

      const inputDOM = document.querySelector('.textInput');

      inputDOM.value = ""; 

    }
    

  }

  function handleDelete(id) {
    const newList = list.filter((item) => item.id != id);

    setList(newList);
  }

	function handleEdited (id, update){


    list.map((item) => {

      if(item.id == id) {
        item.title = update

      }

    })

	}

  return (
    <div className="todoContainer">
      <div className="todoItems">

        <h1>Todo App</h1>

        <div className="todoInput">
          <div  onSubmit={handleSubmit}>
            <input className="textInput"  type="text" onChange={handleChange} placeholder= "Escribe tu nota" />
            <input className="submitInput" type="submit" onClick={handleSubmit} />
          </div>
        </div>

        <div className="todosContainer">
          {list.map((item) => (
            <TodoConfig key={item.id} config={item} onDelete={handleDelete} edited={handleEdited}  />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Todo;
