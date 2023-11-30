```javascript
// This utility will be used to convert the data received from OpenAI API into shape parameters

const getShapeParameters = (data) => {
    let shapeParameters = {};

    // Assuming the data received from OpenAI API is in the format {shape: 'cube', dimensions: {length: 10, width: 10, height: 10}}
    // The actual implementation will depend on the exact format of data received from OpenAI API

    shapeParameters.type = data.shape;
    shapeParameters.dimensions = data.dimensions;

    return shapeParameters;
}

module.exports = getShapeParameters;
```