function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

function loadLocalStorage() {
  // fetch from localStorage if available
  // set myLibrary to fetched value
  if (storageAvailable('localStorage')) {
    let projectsList = JSON.parse(localStorage.getItem('projectsList'));
    
    projectsList = (projectsList === null) ? [] : projectsList;
    console.log(projectsList);
    // projectsList = projectsList.map(book => new Book(book.title, book.author, book.pages, book.read));
    return projectsList;
  }
  else {
    alert("Local Storage not available. Content will not save on page reload.");
    return [];
  }
}

function updateLocalStorage(projectsList) {
  // Set variable in local storage to the current 'myLibrary' array
  
  localStorage.setItem('projectsList', JSON.stringify(projectsList));
  console.log(JSON.stringify(projectsList));
}

export { loadLocalStorage, updateLocalStorage };