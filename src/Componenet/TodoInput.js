import React, { useState } from 'react';



function TodoInput(props) {


    const { addOneItem } = props;
    const [input, setInput] = useState([]);

    return [
        <input
            type="text"
            placeholder='Add Task here...'
            value={input}
            onChange={(event) => {
                setInput(event.target.value);
            }}
        />,
        <button
            onClick={() => {
                if (input !== "") {
                    addOneItem(input);
                    setInput("");
                }
            }}
        >
            Add
        </button>

    ];
}
export default TodoInput;