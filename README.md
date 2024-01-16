# Todo List Application

This is a Todo List application built with React and TypeScript.

## Project Structure

- `src/App.tsx`: The main entry point for the application.
- `src/index.tsx`: The root component of the application.
- `src/components/`: Contains reusable components like `Button` and `Modal`.
- `src/icons/`: Contains SVG icons used in the application.
- `src/modules/TodoList/`: Contains the main logic for the Todo List feature.
  - `CreateTodo/`: Contains the logic for creating new todos.
  - `Task/`: Contains the logic for individual tasks in the Todo List.
  - `index.tsx`: Contains the main TodoList component.
- `src/types/`: Contains TypeScript type definitions used in the application.
- `src/utils/`: Contains utility functions and constants.

## Features

- Add new tasks with a unique ID and title.
- Edit existing tasks.
- Delete tasks.
- Filter tasks by status and priority.

## How to Run

1. Install dependencies:

```sh
yarn install
yarn start


Project Structure
.gitignore
.vscode/
    settings.json
    tailwind.json
package.json
public/
    index.html
    manifest.json
    robots.txt
README.md
src/
    App.tsx
    components/
        Button/
            button.scss
            index.tsx
        Modal/
            index.tsx
    icons/
        Cross.tsx
        Edit.tsx
        Filter.tsx
        Plus.tsx
        Trash.tsx
    index.css
    index.tsx
    modules/
        TodoList/
            CreateTodo/
                index.tsx
            Task/
                index.tsx
            index.tsx
    types/
        index.ts
    utils/
        index.ts
tailwind.config.js
tsconfig.json
```
