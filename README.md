# Tree Generator

The Tree Generator is a simple application designed to display and interact with tree-structured data. It allows users to explore the tree by clicking on items or options, dynamically disabling unrelated options based on the selected item.

## Features

- Tree visualization: The application presents the tree data in a hierarchical structure, allowing users to navigate and explore the nodes.
- Dynamic option disabling: When an option is selected, all unrelated options are automatically disabled. Unrelated options are those that are not on the path from the root to the selected option and options that are children of the selected option.
- Backend: The application uses Node.js (latest version v20.3.1) for the backend to provide the tree data. The data source is hard-coded in the application.
- Frontend: The frontend is implemented in pure JavaScript, providing a lightweight and efficient user interface.

## Installation

1. Clone the repository:
   ```shell
   git clone https://github.com/tizhad/tree-generator.git
   ```

2. Install dependencies:
   ```shell
   cd tree-generator
   npm install
   ```

3. Start the application:
   ```shell
   npm start
   ```

4. Open your browser and visit `http://localhost:3000` to access the Tree Generator application.

## Usage

1. Upon launching the application, the tree data will be fetched from the backend and displayed as a tree structure.

2. Click on an item to select it. This action will disable all unrelated options.

3. Select an option from the dropdown menu. This will update the tree display and disable irrelevant options.

4. Continue exploring the tree by selecting items and options.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the [GitHub repository](https://github.com/your-username/tree-generator).

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute this code as needed.
