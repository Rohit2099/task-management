# Design

Figma link: https://www.figma.com/design/D3oHwiBHw5ccsjs3J0BbpJ/Interview?node-id=0-1&t=XnZro08OSTqK76iX-0

## Functional Requirements

-   Display task list
-   Add task to list
-   Edit task
    -   Edit description
    -   Edit completed status
-   Delete task
-   Filter task
    -   By completion status
    -   Using fuzzy search
-   Task persistance
    -   Using local storage
-   Smooth transition animations during actions
-   Visually pleasant UI

## Technical Requirements

-   Clean code
-   Modularized
-   Maintanable
-   Performance optimized

## Tech stack

-   React with JavaScript
-   TailwindCSS for styling
-   Vite as the development server

# Technical Design

## Components

-   NavBar
    -   Home
        -   SearchField
        -   Tasks
            -   Task
                -   Title
                -   Description
                -   LastUpdated
                -   CompletionStatus
                -   DeleteButton
        -   AddTaskButton
    -   AddTask
        -   Title
        -   Description
        -   CancelButton
        -   AddButton
    -   EditTask
        -   Title
        -   Description
        -   CompletionStatus
        -   CancelButton
        -   AddButton

Structure of Task:

1. Title
2. Description
3. Completion status
