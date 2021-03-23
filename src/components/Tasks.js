import React from 'react'
import Task from './Task'


const Tasks = ({activities, onDelete, onToggle}) => {
    
    return (
        <div className = 'tasks'>
            {
                activities.map((task) => (      
                              
                       <Task key = {task.id} 
                       task = {task} 
                       onDelete = {onDelete}
                       onToggle = {onToggle}
                       />              
                ) )
            }
        </div>
    )
}

export default Tasks
