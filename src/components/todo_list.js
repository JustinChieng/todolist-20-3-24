import TodoItem from "./todo_item";
import AddForm from "./add_new_form";

export default function TodoList(props) {
  const { todos, setTodos } = props;

  return (
    <div
      className="card rounded shadow-sm mx-auto my-4"
      style={{ maxWidth: "500px", margin: "60px auto" }}
    >
      <div className="card-body">
        <AddForm todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}
