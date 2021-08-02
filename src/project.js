// Module representing a project

// Each project has a list to hold all todo items

import TodoItem from "./todoItem";

const Project = () => {
    const todos = [];

    let getTodos = () => todos;
    let addTodo = (todoItem) => {
        todos.push(todoItem);
    }

    return { getTodos, addTodo }
};

export default Project;
