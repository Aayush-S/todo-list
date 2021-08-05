// Module that represents a todo item

// Will include:
// title, description, dueDate and priority. Optional: notes and/or checklist.

const TodoItem = (_title, _desc, _dueDate, _priority, _status) => {
    let title = _title;
    let description = _desc;
    let dueDate = _dueDate;
    let priority = _priority;
    let status = _status;
    
    return { title, description, priority, dueDate, status }
}

export default TodoItem;
