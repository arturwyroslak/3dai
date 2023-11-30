# AI-Driven 3D Geometry Visualizer

This is a web application that allows users to generate 3D geometric shape visualizations based on textual descriptions. The application utilizes the OpenAI API to interpret text and convert it into the necessary parameters for creating 3D models.

## Key Requirements and Features

### Front-End

- Technology: React.js.
- UI Elements: text input field, "Generate" button, 3D model display area.

### Back-End

- Programming Language: Node.js.
- REST API to handle requests from the front-end.
- Integration with OpenAI API.

### 3D Visualization

- Library: Three.js or Babylon.js for rendering geometric shapes.
- Conversion of data from AI into parameters for generating 3D models.

### AI and Natural Language Processing

- Use of OpenAI API to analyze textual descriptions and convert them into geometric data.

## Technologies and Tools

- Front-End: React.js
- Back-End: Node.js
- AI: OpenAI API
- 3D Visualization: Three.js or Babylon.js
- Communication: REST API
- Security: API security measures
- Version Control: Git

## Functional Description

- The user enters a textual description of a geometric shape.
- Upon clicking "Generate", the description is sent to the back-end.
- The back-end uses the OpenAI API to analyze the text and generate shape parameters.
- These parameters are passed to the 3D library, which renders the geometric shape.
- The generated shape is displayed to the user in the browser.

## Requirements

- The application should be responsive and compatible with major browsers.
- The code should be well-documented.
- The application should be secured against basic web threats.

## Installation

1. Clone the repository
```
git clone https://github.com/your-repo/AI-Driven-3D-Geometry-Visualizer.git
```
2. Install dependencies
```
npm install
```
3. Start the server
```
npm start
```
4. Open your browser and navigate to `http://localhost:3000`

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)