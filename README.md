React To-Do Application
A simple To-Do application built with ReactJS that allows users to add, view, edit, and delete tasks. This application uses Redux for state management and demonstrates the use of React hooks, functional components, and persistent storage with localStorage.

Features
Add Task: Users can input a task and add it to the list.
View Tasks: Display all added tasks in a list format.
Edit Task: Each task can be edited.
Delete Task: Each task can be deleted.
Toggle Task: Mark tasks as completed without deleting them.
Persistent Storage: Tasks are saved to local storage and are not lost on page reload.
Technologies Used
ReactJS
Redux
HTML
CSS
JavaScript (ES6)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/todo-app.git
cd todo-app
Install dependencies:

bash
Copy code
npm install
Run the application:

bash
Copy code
npm start
Open your browser and navigate to http://localhost:3000.

Project Structure
arduino
Copy code
todo-app/
├── public/
├── src/
│   ├── components/
│   │   ├── TaskInput.js
│   │   ├── TaskList.js
│   │   ├── Task.js
│   ├── redux/
│   │   ├── actions.js
│   │   ├── reducers.js
│   │   ├── store.js
│   ├── App.js
│   ├── index.js
│   ├── App.css
│   ├── index.css
Components
TaskInput
Component for adding a new task.

TaskList
Component for displaying the list of tasks.

Task
Component representing an individual task with edit and delete functionalities.

Redux
Actions
ADD_TASK
DELETE_TASK
EDIT_TASK
TOGGLE_TASK
Reducer
Handles the task state updates based on the dispatched actions.

Store
Configured with the reducer and includes persistent storage logic to save and load tasks from localStorage.

Styling
The application is styled with CSS to provide a modern and clean user interface.

Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.
