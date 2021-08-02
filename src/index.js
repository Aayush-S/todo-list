// Will use this module to set everything up
// Import all other modules into here to inialize and coordinate everything

import Project from "./project";
import TodoItem from "./todoItem";

const defaultProject = Project();

defaultProject.addTodo(TodoItem("Default", "...", "01/01/2021", "Medium"));

console.log(defaultProject.getTodos());