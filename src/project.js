// Module representing a project

// Each project has a list to hold all todo items

import TodoItem from "./todoItem";

const Project = (title) => {
    const _todos = [];
    const _title = title; 

    let getTodos = () => _todos;
    let addTodo = (todoItem) => {
        _todos.push(todoItem);
    }

    let getTitle = () => _title;
    let setTitle = (newTitle) => {
        _title = newTitle;
    }

    return { getTodos, addTodo, getTitle, setTitle }
};

export default Project;
