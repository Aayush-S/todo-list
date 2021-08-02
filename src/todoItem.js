// Module that represents a todo item

// Will include:
// title, description, dueDate and priority. Optional: notes and/or checklist.


const TodoItem = (title, desc, dueDate, priority) => {
    let _title = title;
    let _description = desc;
    let _dueDate = dueDate;
    let _priority = priority;

    let getTitle = () => _title;
    let getDescription = () => _description;
    let getDueDate = () => _dueDate;
    let getPriority = () => _priority;

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

    return { getTitle, getDescription, getDueDate, getPriority,
        updateTitle, updateDescription, updateDueDate, updatePriority}
}

export default TodoItem;
