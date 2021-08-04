import './style.css';

// Will use this module to set everything up
// Import all other modules into here to inialize and coordinate everything
import Project from "./project";
import TodoItem from "./todoItem";
import { initHomePage, renderProject, renderProjectsList } from './UI';
import { loadLocalStorage, updateLocalStorage } from './localStorageLogic';

const projectsList = [];
loadLocalStorage();

const defaultProject = Project("Default Project");
projectsList.push(defaultProject);

defaultProject.addTodo(TodoItem("Default Title", "...", "01/01/2021", "Medium"));
defaultProject.addTodo(TodoItem("A Title", "desc", "01/03/2021", "Low"));
defaultProject.addTodo(TodoItem("The Title", "description...", "01/02/2021", "High"));


console.log(projectsList);

initHomePage();
renderProjectsList(projectsList);
renderProject(defaultProject);

// renderProject(otherProject);



