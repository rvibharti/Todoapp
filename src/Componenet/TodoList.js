import React, { useState } from "react";
import TodoInput from "./TodoInput";
import { Link } from "react-router-dom";

export function TodoItem(props) {
    const { children, done, onClick, onDelete } = props;
    return (
        <>
            <li style={{ color: done ? "green" : "red" }}>
                {children}
                <input type="checkbox" onClick={() => { onClick(children) }} />
                <button onClick={() => { onDelete(children) }}>Delete</button>
            </li>
        </>
    );
}

export function TodoItemView(props) {
    const { content, done } = props;
    return (
        <>
            <li>
                <input type="checkbox" checked={done} disabled />
                <label>{content}</label>
                <br></br>
            </li>
        </>
    );
}

function TodoList() {
    const [tasks, setTasks] = useState([]);

    function addOneItem(str) {
        setTasks([...tasks, { content: str, done: false }]);
    }

    function deleteOneItem(str) {
        const newArr = tasks.filter((task) => task.content !== str);
        setTasks(newArr);
    }

    function setItemToTrue(str) {
        const newArr = tasks.map((task) => {
            if (task.content === str) {
                task.done = !task.done;
                return task;
            }
            return task;
        });
        setTasks(newArr);
    }

    return (

        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}
        >
            <h2>To-Do</h2>
            <TodoInput addOneItem={addOneItem} />

            {tasks.map((task) => {
                return (
                    <TodoItemView
                        done={task.done} content=
                        {task.content}
                    >
                    </TodoItemView>
                );
            })}

            <ul>
                {tasks.map((task) => {
                    return (
                        <TodoItem
                            onDelete={deleteOneItem}
                            onClick={setItemToTrue}
                            done={task.done}
                        >
                            {task.content}
                        </TodoItem>
                    );
                })}
            </ul>
            <Link to="/logout">logout</Link>

        </div >
    );
}

export default TodoList;