import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";
import type { Task } from "./types";

function App()
{
    const [tasks, setTasks] =
        useState<Task[]>([]);

    function addTask(title: string): void
    {
        const newTask: Task =
        {
            id: Date.now(),
            title: title,
            completed: false
        };

        setTasks([
            ...tasks,
            newTask
        ]);
    }

    function toggleTask(id: number): void
    {
        setTasks(
            tasks.map((task) =>
                task.id === id
                ? {
                    ...task,
                    completed:
                        !task.completed
                }
                : task
            )
        );
    }

    function deleteTask(id: number): void
    {
        setTasks(
            tasks.filter(
                (task) => task.id !== id
            )
        );
    }

    return (
        <div>

            <h1>Typed To-Do List</h1>

            <TaskInput
                onAdd={addTask}
            />

            <ul>
                {tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onToggle={toggleTask}
                        onDelete={deleteTask}
                    />
                ))}
            </ul>

        </div>
    );
}

export default App;