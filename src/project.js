// Module representing a project
// Each project has a list to hold all todo items

const Project = (_title) => {
    const todos = [];
    const title = _title; 

    return { todos, title }
};

export default Project;
