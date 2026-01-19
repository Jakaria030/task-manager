# Task Manager
A modern React + Tailwind CSS project that demonstrates server-sides pagination, client-side search with debounce, light/dark mode, and in-memory status updates using the JSONPlaceholder Todos API.

## Live URL
[Visit Task Manager](https://task-manager-pink-beta.vercel.app/)

## Preview
![Project Image](public/task-manager.png)

## Features
- React + Vite + Tailwind CSS
- Server-side Pagination using _start & _limit
- Debounce search on todos title (Client-side filter)
- Light/Dark mode (Context API)
- Todo details page (React router)
- Status update (In-memory only)
- Custom data fetch (Hook)
- Clean folder structure

## API Used
1. For fetch single page todos
    ```bash
    https://jsonplaceholder.typicode.com/todos?_start={start}&_limit={limit}
    ```
2. For fetch single todo
    ```bash
    https://jsonplaceholder.typicode.com/todos/:id
    ```

## Getting Started
Follow these steps to set up and run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/Jakaria030/task-manager.git
   ```
2. Navigate to the project directory:
   ```bash
   cd task-manager
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```