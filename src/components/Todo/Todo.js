import React from "react";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const Todo = () => {
  const [input, setInput] = useState("");
  const [array, setArray] = useState();
  const [selectedTodo, setSelectedTodo] = useState(null);

  const textChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedTodo) {
      setArray([{ id: Date.now(), content: input, status: false }, ...array]);
      setInput("");
    } else {
      let idx = array.findIndex((val) => val.id === selectedTodo.id);
      setArray([
        ...array.slice(0, idx),
        { ...selectedTodo, content: input },
        ...array.slice(idx + 1),
      ]);
      setInput("");
      setSelectedTodo(null);
    }
  };

  const handleDelete = (id) => {
    const newArray = array.filter((val) => val.id !== id);
    setArray(newArray);
  };

  const handleUpdate = (id) => {
    const idx = array.findIndex((val) => val.id === id);
    setInput(array[idx].content);
    setSelectedTodo(array[idx]);
  };

  const handleCancel = () => {
    setSelectedTodo(null);
    setInput("");
  };

  const handleChecked = (id) => {
    let newArr = array.map((val) => {
      if (val.id === id) {
        val.status = !val.status;
      }
      return val;
    });
    setArray(newArr);
  };

  return (
    <div className="todo">
      <div className="wrapper">
        <h1>TODO LIST</h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            value={input}
            className="text"
            onChange={textChange}
            type="text"
            placeholder="Enter text"
            required
          />
          <button>{selectedTodo ? "Update" : "Add"}</button>
          {selectedTodo && <button onClick={handleCancel}>Cancel</button>}
        </form>

        <ul>
          {array.length ? (
            array.map((val) => (
              <li
                className={val.status ? "new-item checked" : "new-item"}
                key={val.id}
              >
                <div onClick={() => handleChecked(val.id)} className="content">
                  {val.content}
                </div>
                <div className="group-icon">
                  <div className="inner">
                    <EditOutlined
                      className="icon icon-edit"
                      onClick={() => handleUpdate(val.id)}
                    />
                    <DeleteOutlined
                      className="icon icon-delete"
                      onClick={() => handleDelete(val.id)}
                    />
                  </div>
                </div>
              </li>
            ))
          ) : (
            <li>
              <div className="content">No item</div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
