import {useState} from "react";

import AddForm from "./components/add_new_form";
import TodoList from "./components/todo_list";

export default function App() {
    const [todos, setTodos] = useState([]);
    console.log(todos);
    return (
        <div>
            <div className="container">
               
                <TodoList todos={todos} setTodos={setTodos}/>
            </div>
        </div>
    )
}