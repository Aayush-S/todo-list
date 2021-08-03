// Module that represents a todo item

// Will include:
// title, description, dueDate and priority. Optional: notes and/or checklist.


const TodoItem = (title, desc, dueDate, priority) => {
    let _title = title;
    let _description = desc;
    let _dueDate = dueDate;
    let _priority = priority;
    let _status = false;

    let getTitle = () => _title;
    let getDescription = () => _description;
    let getDueDate = () => _dueDate;
    let getPriority = () => _priority;
    let getStatus = () => _status;
    

    let updateTitle = (newTitle) => {
        _title = newTitle;
    }
    let updateDescription = (newDesc) => {
        _description = newDesc;
    }
    let updateDueDate = (newDueDate) => {
        _dueDate = newDueDate;
    }
    let updatePriority = (newPriority) => {
        _priority = newPriority;
    }
    let changeStatus = () => {
        _status = !(_status);
    }

    return { getTitle, getDescription, getDueDate, getPriority,
        updateTitle, updateDescription, updateDueDate, updatePriority,
        changeStatus }
}

export default TodoItem;
