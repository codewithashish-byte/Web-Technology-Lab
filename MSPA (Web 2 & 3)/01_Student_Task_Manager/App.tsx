import { useState } from "react";

interface Task { id: number; title: string; completed: boolean; }

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");

  function addTask() {
    if (!title.trim()) return;
    setTasks([...tasks, { id: Date.now(), title: title.trim(), completed: false }]);
    setTitle("");
  }

  function toggleTask(id: number) {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  }

  function deleteTask(id: number) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const completed = tasks.reduce((sum, task) => sum + (task.completed ? 1 : 0), 0);

  return <main style={{fontFamily:"Arial",maxWidth:700,margin:"40px auto",padding:20}}>
    <h1>Student Task Manager</h1>
    <p>Add tasks, mark them complete, and track your progress.</p>
    <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter task" />
    <button onClick={addTask}>Add Task</button>
    <p>Total: {tasks.length} | Pending: {tasks.filter(t => !t.completed).length} | Completed: {completed}</p>
    <ul>{tasks.map(task => <li key={task.id}>
      <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
      <span style={{textDecoration:task.completed?"line-through":"none"}}>{task.title}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>)}</ul>
  </main>;
}