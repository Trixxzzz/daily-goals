import React, { useEffect, useState } from 'react'
import Task from './Task'


const Home = () => {
    const initial = localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[]
    const [tasks, setTasks] = useState(initial);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    

    const submitHandler=(e)=>{
        e.preventDefault();

        setTasks([...tasks, {title,description}])
        setTitle("");
    setDescription("");     };
    const deleteTask=(index)=>{
        const filteredArray=tasks.filter((val,i)=>{
            return i!==index;
        })
       setTasks(filteredArray)
       
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          submitHandler(e);
        }
      };
    useEffect(() => {
     localStorage.setItem("tasks",JSON.stringify(tasks))
    }, [tasks])
    
  return (
    <div className="container">
        <form onSubmit={submitHandler}>
            <h1>DAILY GOALS</h1>
            <input type="text" placeholder='Title' 
            value={title} onChange={(e)=> setTitle(e.target.value)} />
            <textarea placeholder='Description' 
            value={description} onChange={(e)=> setDescription(e.target.value)} />
            <button type='submit'onKeyPress={handleKeyPress} >Add</button>
        </form>
        {tasks.map((item,index)=>(
           <Task key={index} title={item.title} 
           description={item.description}
           deleteTask={deleteTask}
           index={index}
          />
        ))}
    </div>
  )
}

export default Home