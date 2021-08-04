// Will use this module to set everything up
// Import all other modules into here to inialize and coordinate everything
import './style.css';
import Project from "./project";
import TodoItem from "./todoItem";
import { initHomePage, renderProject, renderProjectsList } from './UI';
import { loadLocalStorage, updateLocalStorage } from './localStorageLogic';

const projectsList = loadLocalStorage();

// generate some sort of default project if none
if (projectsList.length === 0) {
    const defaultProject = Project("Default Project");
    projectsList.push(defaultProject);

    defaultProject.todos.push(TodoItem("Create", "desc", "01/01/2021", "Medium"));
    defaultProject.todos.push(TodoItem("A", "desc", "01/02/2021", "Low"));
    defaultProject.todos.push(TodoItem("Todo", "desc", "01/03/2021", "High"));
    defaultProject.todos.push(TodoItem("Below!", "desc", "01/04/2021", "High"));
}

initHomePage();
renderProjectsList(projectsList);
renderProject(projectsList[0], projectsList);