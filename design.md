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

## Scope for optimization

-   Cache NavBar

## Things to consider

-   ~~How to handle error pages in routing?~~
-   ~~Match for incorrect routes and creat a error component.~~
-   ~~Convert add and edit to forms so we can handle empty title case.~~
-   Add link to homepage in navbar.
-   WHy is "react-select" and "react-icon" not working?
-   Accept newLines in text area
-   ~~Convert task icons to alphabet icons~~
-   ~~Add accordian~~
-   ~~Add border on hover for buttons~~
-   Add animations for delete action
-   Add transitions on editing and routing.
-   Add no data text when there are no tasks
