# TODO-app-using-VUE-js-and-FireBase

This Vue.js component is a simple todo list application that allows users to add, delete, and mark todos as complete or incomplete. It integrates with Firestore for data storage and retrieval.

## Features

- Add new todo items.
- Delete existing todo items.
- Mark todo items as complete or incomplete.
- Sort todos by complete and incomplete status.
- Clear completed todos.

## Tech Stack

- Vue.js
- Vuetify (for UI components)
- Firestore (for data storage)

## Project Structure

- `src/components/ToDoList.vue`: Vue component for managing todos.
- `firebase/db.js`: Firebase configuration and Firestore setup.

## Usage

1. Clone the repository: `git clone https://github.com/your-repo-url.git`.
2. Install dependencies: `npm install`.
3. Set up Firebase Firestore and update `firebase/db.js` with your Firebase configuration.
4. Run the development server: `npm run serve`.
5. Access the application at `http://localhost:8080` in your browser.

## Development

To contribute to this project:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Make your changes and commit them: `git commit -am 'Add new feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
