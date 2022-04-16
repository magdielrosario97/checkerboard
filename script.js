const body = document.body
// Create an empty color variable to reassigned
var color = ''
// Create a loop to iterate through 
for(var i = 1; i <= 72; i++) {
    // Create element 'div'
    let tile = document.createElement('div')
    // Add a class list called checker
    tile.classList.add('checker')
    // append tile variable to body
    body.appendChild(tile)
    // if index % 2 is not equal to 0
    if (i % 2 !== 0) {
        // if true reassign color to red
        // if true reassing color by invoking random color function
        // color = "red" // Uncomment whichever output is needed
        color = getRandomColor()
    } else {
        // else reassign color to black
        // else invoke random color function
        // color = "black" // Uncomment whichever output is needed
        color = getRandomColor()
    }
    // styles object that contains the properties of the tiles
    const styles = {
        'background-color': color,
        'width': '11.1%',
        'padding-bottom': '11.1%',
        'float': 'left',
    };
    // Assign styles obj to tiles
    Object.assign(tile.style, styles)
}

// This function randomizes the 6 characters for different color codes
function getRandomColor() {
    // Letter variable containing all possible characters for color code
    var letters = '0123456789ABCDEF';
    // Color variable that holds the pound sign needed for color codes
    var color = '#';
    // Iterate through letters and return the randomized 6 characters
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


/* const body = document.body
// Create an empty color variable to reassigned
var color = ''
// Create a loop to iterate through 
for(var i = 1; i <= 72; i++) {
    // Create element 'div'
    let tile = document.createElement('div')
    // Add a class list called checker
    tile.classList.add('checker')
    // append tile variable to body
    body.appendChild(tile)
    // if index % 2 is not equal to 0
    if (i % 2 !== 0) {
        // if true reassign color to red
        // if true reassing color by invoking random color function
        // color = "red" // Uncomment whichever output is needed
        color = getRandomColor()
    } else {
        // else reassign color to black
        // else invoke random color function
        // color = "black" // Uncomment whichever output is needed
        color = getRandomColor()
    }
    // styles object that contains the properties of the tiles
    const styles = {
        'background-color': color,
        'width': '11.1%',
        'padding-bottom': '11.1%',
        'float': 'left',
    };
    // Assign styles obj to tiles
    Object.assign(tile.style, styles)
} */