import  {useState} from "react";
import Input from "../../../19.3/src/components/input";

export default function AddForm(props) {
  const {todos, setTodos} = props;
  const [value, setValue] = useState("");
    return (
      <div class="mt-4">
      <form class="d-flex justify-content-between align-items-center" 
      onSubmit={(event) => {
        event.preventDefault();
        setTodos([...todos, {
          id: Math.random(),
          name: value
        }]);
        setValue("");
      }}>
        <Input
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
          
        />
        <button class="btn btn-primary btn-sm rounded ms-2">Add</button>
      </form>
    </div>
    );
}