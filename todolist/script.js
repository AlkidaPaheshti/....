
   /*  document.addEventListener('DOMContentLoaded', () => {
    const loginPage = document.getElementById('login-page');
    const registerPage = document.getElementById('register-page');
    const todoPage = document.getElementById('todo-page');

    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const todoForm = document.getElementById('todo-form');

    const toRegister = document.getElementById('to-register');
    const toLogin = document.getElementById('to-login');
    const logoutButton = document.getElementById('logout');

    let users = JSON.parse(localStorage.getItem('users')) || [];
    let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUser) {
        showTodoPage();
    } else {
        showLoginPage();
    }

    toRegister.addEventListener('click', (e) => {
        e.preventDefault();
        showRegisterPage();
    });

    toLogin.addEventListener('click', (e) => {
        e.preventDefault();
        showLoginPage();
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            loggedInUser = user;
            localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
            showTodoPage();
        } else {
            alert('Invalid login credentials.');
        }
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;

        const user = { username, password };
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));

        showLoginPage();
    });

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = document.getElementById('task').value;
        const category = document.getElementById('category').value;
        const dueDate = document.getElementById('due-date').value;

        const taskItem = { task, category, dueDate };

        if (!loggedInUser.tasks) {
            loggedInUser.tasks = [];
        }

        loggedInUser.tasks.push(taskItem);
        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
        renderTasks();
    });

    logoutButton.addEventListener('click', () => {
        loggedInUser = null;
        localStorage.removeItem('loggedInUser');
        showLoginPage();
    });

    function showLoginPage() {
        loginPage.style.display = 'block';
        registerPage.style.display = 'none';
        todoPage.style.display = 'none';
    }

    function showRegisterPage() {
        loginPage.style.display = 'none';
        registerPage.style.display = 'block';
        todoPage.style.display = 'none';
    }

    function showTodoPage() {
        loginPage.style.display = 'none';
        registerPage.style.display = 'none';
        todoPage.style.display = 'block';
        renderTasks();
    }

    function renderTasks() {
        const taskList = document.getElementById('task-list');
        taskList.innerHTML = '';

        if (loggedInUser.tasks) {
            loggedInUser.tasks.forEach((taskItem, index) => {
                const li = document.createElement('li');
                li.textContent = `${taskItem.task} - ${taskItem.category} - ${taskItem.dueDate}`;
                
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.classList.add('delete-task');
                deleteButton.addEventListener('click', () => {
                    loggedInUser.tasks.splice(index, 1);
                    localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
                    renderTasks();
                });

                li.appendChild(deleteButton);
                taskList.appendChild(li);
            });
        }
    }
});//
 */

document.addEventListener('DOMContentLoaded', () => {
    const loginPage = document.getElementById('login-page');
    const registerPage = document.getElementById('register-page');
    const todoPage = document.getElementById('todo-page');

    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const todoForm = document.getElementById('todo-form');

    const toRegister = document.getElementById('to-register');
    const toLogin = document.getElementById('to-login');
    const logoutButton = document.getElementById('logout');

    let users = JSON.parse(localStorage.getItem('users')) || [];
    let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUser) {
        showTodoPage();
    } else {
        showLoginPage();
    }

    toRegister.addEventListener('click', (e) => {
        e.preventDefault();
        showRegisterPage();
    });

    toLogin.addEventListener('click', (e) => {
        e.preventDefault();
        showLoginPage();
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            loggedInUser = user;
            localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
            showTodoPage();
        } else {
            alert('Invalid login credentials.');
        }
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;

        const user = { username, password };
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));

        showLoginPage();
    });

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = document.getElementById('task').value;
        const category = document.getElementById('category').value;
        const completionDate = document.getElementById('completionDate').value;
        const description = document.getElementById('description').value;

        const taskItem = { task, category, completionDate ,description };

        if (!loggedInUser.tasks) {
            loggedInUser.tasks = [];
        }

        loggedInUser.tasks.push(taskItem);
        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
        renderTasks();
    });

    logoutButton.addEventListener('click', () => {
        loggedInUser = null;
        localStorage.removeItem('loggedInUser');
        showLoginPage();
    });

    function showLoginPage() {
        loginPage.style.display = 'block';
        registerPage.style.display = 'none';
        todoPage.style.display = 'none';
    }

    function showRegisterPage() {
        loginPage.style.display = 'none';
        registerPage.style.display = 'block';
        todoPage.style.display = 'none';
    }

    function showTodoPage() {
        loginPage.style.display = 'none';
        registerPage.style.display = 'none';
        todoPage.style.display = 'block';
        renderTasks();
    }

    function renderTasks() {
        const taskList = document.getElementById('task-list');
        taskList.innerHTML = '';

        if (loggedInUser.tasks) {
            loggedInUser.tasks.forEach((taskItem, index) => {
                const li = document.createElement('li');
                li.textContent = `${taskItem.task} - ${taskItem.category} - ${taskItem.completionDate} -${taskItem.description}`;
                
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.classList.add('delete-task');
                deleteButton.addEventListener('click', () => {
                    loggedInUser.tasks.splice(index, 1);
                    localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
                    renderTasks();
                });

                li.appendChild(deleteButton);
                taskList.appendChild(li);
            });
        }
    }
});
