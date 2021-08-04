// Renders everything with the DOM
import TodoItem from "./todoItem";
import Project from "./project";
import { updateLocalStorage } from './localStorageLogic';

// PROJECT DISPLAY IN THE CENTER -----------------------------------------------------

function createTodoItemNode(todoItem, index) {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo-item');
    todoDiv.classList.add(todoItem.priority);

    todoDiv.dataset.key = index;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList = "status-check";
    todoDiv.append(checkbox); 
    
    const title = document.createElement('h1');
    title.textContent = todoItem.title;
    todoDiv.append(title);
    
    const dueDate = document.createElement('p');
    dueDate.textContent = todoItem.dueDate;
    todoDiv.append(dueDate);

    let removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.classList.add('todo-remove-btn');

    
    
    
    todoDiv.appendChild(removeBtn);

    return todoDiv;
}

function createTodoFormNode(project, projectsList) {
    const formDiv = document.createElement('div');
    formDiv.classList.add('todo-form');

    const textbox = document.createElement('input');
    textbox.type = "text";
    textbox.classList.add('form-textbox');
    formDiv.append(textbox);

    const submitBtn = document.createElement('button');
    submitBtn.textContent = "Create";
    submitBtn.classList.add('submit-btn');

    submitBtn.addEventListener('click', () => {
        project.todos.push(TodoItem(textbox.value, "desc", "dueDate", "priority"));
        // render all the todos again.
        updateLocalStorage(projectsList);
        renderProject(project, projectsList);
    });
    formDiv.append(submitBtn);

    return formDiv;
}

function createProjectNode(project, projectsList) {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');

    const title = document.createElement('h1');
    title.textContent = project.title;
    projectDiv.append(title);

    project.todos.forEach((todo, index) => projectDiv.append(createTodoItemNode(todo, index)));

    const removeBtns = projectDiv.querySelectorAll('.todo-remove-btn');
    
    removeBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            project.todos.splice(e.target.parentElement.dataset.key, 1);
            renderProject(project, projectsList);
            updateLocalStorage(projectsList);
        });
    });

    const form = createTodoFormNode(project, projectsList);
    projectDiv.append(form);

    return projectDiv;
}

function renderProject(project, projectsList) {

    const projectNode = createProjectNode(project, projectsList);
    const projectContainer = document.querySelector('.project-container');

    // empty the container
    while (projectContainer.firstChild) {
        projectContainer.removeChild(projectContainer.firstChild)
    }

    // add the project node into the container
    projectContainer.append(projectNode);
}

// PROJECTS LIST ON THE SIDE -------------------------------------------------------------

function createProjectsListNode(projectsList) {
    const projectsListDiv = document.createElement('div');
    projectsListDiv.classList.add('projects-list');

    const title = document.createElement('h1');
    title.textContent = "Projects";
    projectsListDiv.append(title);

    projectsList.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        projectCard.dataset.key = index;

        const title = document.createElement('h1');
        title.textContent = project.title;
        projectCard.append(title);

        projectsListDiv.append(projectCard);
        
        projectCard.addEventListener('click', () => { renderProject(project, projectsList) });

        let removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.classList.add('todo-list-remove-btn');

        const projectRemoveBtns = projectsListDiv.querySelectorAll('.todo-list-remove-btn');
        projectRemoveBtns.forEach(btn => {
            btn.addEventListener('click', function (e) {
                projectsList.splice(e.target.parentElement.dataset.key, 1);
                renderProjectsList(projectsList);
                updateLocalStorage(projectsList);
            });
        });
    
        projectCard.appendChild(removeBtn);
    });

    return projectsListDiv;
}

function createProjectsListFormNode(projectsList) {
    const formDiv = document.createElement('div');
    formDiv.classList.add('projects-list-form');

    const textbox = document.createElement('input');
    textbox.type = "text";
    textbox.classList.add('projects-list-form-textbox');
    formDiv.append(textbox);

    const submitBtn = document.createElement('button');
    submitBtn.textContent = "Create";
    submitBtn.classList.add('submit-btn');

    submitBtn.addEventListener('click', () => {
        projectsList.push(Project(textbox.value));
        updateLocalStorage(projectsList);
        renderProjectsList(projectsList);
    });
    formDiv.append(submitBtn);

    return formDiv;
}

function renderProjectsList(projectsList) {
    const projectsListNode = createProjectsListNode(projectsList);
    const projectsListContainer = document.querySelector('.projects-list-container');

    // empty the container
    while (projectsListContainer.firstChild) {
        projectsListContainer.removeChild(projectsListContainer.firstChild)
    }

    // add the project node into the container
    projectsListContainer.append(projectsListNode);
    projectsListContainer.append(createProjectsListFormNode(projectsList));
}

function initHomePage() {
    // sets up the html skeleton for the homescreen
    const content = document.querySelector('#content');

    const header = document.createElement('div');
    header.classList.add('header');
    content.append(header);

    const projectsListContainer = document.createElement('div');
    projectsListContainer.classList.add('projects-list-container');
    content.append(projectsListContainer);

    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');
    content.append(projectContainer);

    
}

export { initHomePage, renderProject, renderProjectsList };