import React, { useState, useEffect, useRef } from 'react';

const options = [
    {
      label: "To-Do",
      value: "to-do",
    },
    {
      label: "Ongoing",
      value: "ongoing",
    },
    {
      label: "Stalled",
      value: "stalled",
    },
    {
      label: "Done",
      value: "done",
    },
  ];

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      title: input,
      description: input,
      status: input,
      date: input
    });
    setInput('');
  };

  return (
      <form onSubmit={handleSubmit} className='todo-form'>
        {props.edit ?(
            <>
                
                <input placeholder='Update Description' type="text" name="name" className='todo-input' onChange={handleChange} ref={inputRef}/>
                <input placeholder='Update Title' type="text" name="name" className='todo-input' onChange={handleChange} ref={inputRef}/>
                
                <select className='todo-input'>
                    {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                    ))}
                </select>
                <input placeholder='Date' type="date" name="name" className='todo-input'/>
                <input type="submit" value="Update" className='todo-input-button' onClick={handleSubmit}/>
            </>
        ):(
            <>
                
                <input placeholder='Description' type="text" name="name" className='todo-input' onChange={handleChange} ref={inputRef}/>
                <input placeholder='Title' type="text" name="name" className='todo-input' onChange={handleChange} ref={inputRef}/>
                
                <select className='todo-input' >
                    {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                    ))}
                </select>
                <input placeholder='Date' type="date" name="name" className='todo-input'/>
                <input type="submit" value="Add" className='todo-input-button' onClick={handleSubmit}/>
            </>

        )}
      </form>
  );
}

export default TodoForm;
