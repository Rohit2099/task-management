# About

A task managment app built using React.

To run the app:

1. clone the github project
2. Run `npm install`
3. Run `npm run preview` to open the app.

# Features

-   Display task list
-   Add task
-   Edit task title, description and status
-   Delete task
-   Group task by status
-   Search tasks by title or description (search is debounced)
-   Task is persisted across sessions. (data is stored in local storage)
-   Error handling for incorrect routing
-   Error handling at task creation

# Design Decisions

## Context API to pass tasks to all the components

Reason: The tasks array is used by the home page, and the setTasks is used by addPage and editPage. Although technically, it was possible to use a state variable in the home page and use a callback to send to the add and edit page to update the tasks, I decided this was a cleaner approarch and promotes single responsibility.

## Separating components for reuse

Separated multiple components such as the Title input, Description inpur, Status identifier, accordian etc into its own modules to enable proper reuse and maintainability.
