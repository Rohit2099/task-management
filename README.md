# About

A task managment app built using React.

To run the app:

1. Clone the github project
2. Run `npm install`
3. Run `npm run preview` to open the app.
   <br>
   <br>

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
    <br>
    <br>

# Design Decisions

## Context API to pass tasks to all the components

Reason: The tasks array is used by the home page, and the setTasks is used by addPage and editPage. Although technically, it was possible to use a state variable in the home page and use a callback to send to the add and edit page to update the tasks, I decided this was a cleaner approarch and promotes single responsibility.

## Separating components for reuse

Separated multiple components such as the Title input, Description inpur, Status identifier, accordian etc into its own modules to enable proper reuse and maintainability.

Note: I've maintained my quick notes/design notes on the [design file](./design.md).

## Grouping tasks by status

We have the original list of tasks from the context API. To display the filtered list, I maintain a state variable that is an array of 3 elements -> for 3 task statuses. This data structure resulted in an easier implementation of the accordian as well. The accordian component is given tasks grouped by status.
