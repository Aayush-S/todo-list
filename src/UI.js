// Renders everything with the DOM
import TodoItem from "./todoItem";
import Project from "./project";

function renderTodoItem(todoItem) {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo-item');
    todoDiv.classList.add(todoItem.getPriority());

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList = "status-check";
    todoDiv.append(checkbox); 
    
    const title = document.createElement('h1');
    title.textContent = todoItem.getTitle();
    todoDiv.append(title);
    
    const dueDate = document.createElement('p');
    dueDate.textContent = todoItem.getDueDate();
    todoDiv.append(dueDate);

    return todoDiv;
}

function createProjectNode(project) {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');

    const title = document.createElement('h1');
    title.textContent = project.getTitle();
    projectDiv.append(title);

    project.getTodos().forEach(todo => projectDiv.append(renderTodoItem(todo)));

    const form = renderForm(project);

    projectDiv.append(form);

    return projectDiv;
}

function renderProject(project) {

    const projectNode = createProjectNode(project);
    const projectContainer = document.querySelector('.project-container');

    // empty the container
    while (projectContainer.firstChild) {
        projectContainer.removeChild(projectContainer.firstChild)
    }

    // add the project node into the container
    projectContainer.append(projectNode);
}

function renderForm(project) {
    const formDiv = document.createElement('div');
    formDiv.classList.add('form');

    const textbox = document.createElement('input');
    textbox.type = "text";
    textbox.classList.add('form-textbox');
    formDiv.append(textbox);

    const submitBtn = document.createElement('button');
    submitBtn.textContent = "Create";
    submitBtn.classList.add('submit-btn');

    submitBtn.addEventListener('click', () => {
        project.addTodo(TodoItem(textbox.textContent, "desc", "dueDate", "priority"));
        // render all the todos again.
    });
    formDiv.append(submitBtn);

    return formDiv;
}

function initHomePage() {
    // sets up the html skeleton for the homescreen
    const content = document.querySelector('#content');

    const header = document.createElement('div');
    header.classList.add('header');
    content.append(header);

    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');
    content.append(projectContainer);

    const projectsListContainer = document.createElement('div');
    projectsListContainer.classList.add('projects-list-container');
    content.append(projectsListContainer);

}

export { initHomePage, renderProject };