import TodoItem from "./todoitem";
import styles from "./todoItems.module.css";

const TodoItems =({todoItems,ondeleteclick1})=>{

  return (
    <div className={styles.itemscontainer}>

      {todoItems.map((items) => (<TodoItem TodoDate={items.duedate}  TodoName={items.name} ondeleteclick={ondeleteclick1}></TodoItem>)
)}

    </div>
  )
}
 export default TodoItems;