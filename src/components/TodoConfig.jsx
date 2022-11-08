import { useState } from "react";
import "../stylesheets/TodoConfig.css";
import "../stylesheets/responsive/TodoConfigResponsive.css";
import { BsTrashFill, BsPencilFill, BsCheckSquareFill } from "react-icons/bs";

function TodoConfig({ config, onDelete, edited, checkbox}) {

  const [edit, setEdit] = useState(false);

  function IsEditing() {

    
    const [update, setUpdate] = useState(config.title);


    function handleSubmit (e) {
      e.preventDefault()
    }

    function handleChange (e) {
      setUpdate(e.target.value);
    }

    function handleClick () {
      setEdit(false);
      edited(config.id, update);
    }


    return (

        <form  className="editedContainer" onSubmit={handleSubmit} key={config.id}>
          <input className="editedInput" text type="text" value={update} onChange={handleChange} />
          <button className="editedButton" onClick={handleClick}> <BsCheckSquareFill /> </button>
        </form>


    );
  }
  
  function NoEditing () {


    return(
      <div key={config.id} className="noEditedContainer">
        
        <div className="titleContainer">{config.title}</div>

        <div>
          <button className="noEditedDelete" onClick={(e) => onDelete(config.id) }> <BsTrashFill /> </button>
          <button className="noEditedEdit" onClick={() => setEdit(true)}> <BsPencilFill /> </button>
        </div>
        
      </div>
    );
  }

  return (
    <div>
      {
        edit ? <IsEditing /> : <NoEditing />
      }
      
    </div>
  );
}

export default TodoConfig;
