import './style.css';

// Will use this module to set everything up
// Import all other modules into here to inialize and coordinate everything
import Project from "./project";
import TodoItem from "./todoItem";
import { initHomePage, renderProject, renderForm, renderProjectsList } from './UI';

const projectsList = [];

const defaultProject = Project("Default Project");
projectsList.push(defaultProject);

defaultProject.addTodo(TodoItem("Default Title", "...", "01/01/2021", "Medium"));
defaultProject.addTodo(TodoItem("A Title", "desc", "01/03/2021", "Low"));
defaultProject.addTodo(TodoItem("The Title", "description...", "01/02/2021", "High"));

const otherProject = Project("Other Project");
projectsList.push(otherProject);

otherProject.addTodo(TodoItem("Title", "...", "01/01/2021", "Medium"));
otherProject.addTodo(TodoItem("todo", "desc", "02/03/2021", "High"));
otherProject.addTodo(TodoItem("Task", "description...", "03/02/2021", "High"));



initHomePage();
renderProjectsList(projectsList);
renderProject(defaultProject);

// renderProject(otherProject);



