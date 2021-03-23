import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Poking holes into Government Systems",
      day: "TODAY, 17TH MATRCH 2021 at 1500hr",
      reminder: true,
    },
    {
      id: 2,
      text: "Check my emails",
      day: "18th March at noon",
      reminder: false,
    },
    {
      id: 3,
      text: "finish up on my react course",
      day: "friday, 20th March",
      reminder: true,
    },
  ]);
  //ADDING A TASK. WE HAVE A FUNCTION TO HANDLE THAT
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1);

    // console.log(id)       //THIS TOO DOES NOT APPEAR ON THE CONSOLE
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //DELETE TASK
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //TOGGLE REMINDER (set it to the opposite of what it is)
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header onAdd ={()=>setShowAddTask(!showAddTask)}/>

      {showAddTask && <AddTask onAdd={addTask} />}

      {tasks.length > 0 ? (
        <Tasks
          activities={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        />
      ) : (
        "HOORAY! YOU HAVE CLEARED ALL OF TODAY'S TASKS "
      )}

      {/* <Tasks activities={tasks2} />   */}
    </div>
  );
};
export default App;
