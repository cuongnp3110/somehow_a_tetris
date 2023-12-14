const draggableElements = document.querySelectorAll(".draggable");
const droppableElements = document.querySelectorAll(".droppable");

var coordinates;
var onMouseDownShape;
var dropCoordinates;
let dropCell = [
  {
    row: 0,
    col: 0
  }
];

let coordinateArrangement = [
  {
    shape: "L_block",
    numberOfBlock: 4,
    arrangement: [
      [[0, 0], [1, 0], [1, 0], [0, 1],], 
      [[-1, 0], [1, 0], [1, 0], [0, 1],], 
      [[-2, 0], [1, 0], [1, 0], [0, 1],], 
      [[0, 0], [0, -1], [-1, 0], [-1, 0],],
    ]
  },
  {
    shape: "L_reverse_block",
    numberOfBlock: 4,
    arrangement: [
      [[0, 0], [1, 0], [1, 0], [0, -1],], 
      [[-1, 0], [1, 0], [1, 0], [0, -1],], 
      [[-2, 0], [1, 0], [1, 0], [0, -1],], 
      [[0, 0], [0, 1], [-1, 0], [-1, 0],],
    ]
  },
  {
    shape: "O_block",
    numberOfBlock: 4,
    arrangement: [
      [[0, 0], [0, 1], [1, 0], [0, -1],], 
      [[0, 0], [1, 0], [0, -1], [-1, 0],], 
      [[0, 0], [-1, 0], [0, 1], [1, 0],], 
      [[0, 0], [0, -1], [-1, 0], [0, 1],],
    ]
  },
  {
    shape: "I_block",
    numberOfBlock: 4,
    arrangement: [
      [[0, 0], [1, 0], [1, 0], ], 
      [[-1, 0], [1, 0], [1, 0], ], 
      [[-2, 0], [1, 0], [1, 0], ], 
    ]
  },
  {
    shape: "S_block",
    numberOfBlock: 4,
    arrangement: [
      [[0, 0], [0, 1], [-1, 0], [0, 1],], 
      [[0, 0], [-1, 0], [0, 1], [1, -2],], 
      [[0, 0], [1, 0], [0, -1], [-1, 2],], 
      [[0, 0], [0, -1], [1, 0], [0, -1],],
    ]
  },
  {
    shape: "Z_block",
    numberOfBlock: 4,
    arrangement: [
      [[0, 0], [0, 1], [1, 0], [0, 1],], 
      [[0, 0], [1, 0], [0, 1], [-1, -2],], 
      [[0, 0], [-1, 0], [0, -1], [1, 2],], 
      [[0, 0], [0, -1], [-1, 0], [0, -1],],
    ]
  }
];

draggableElements.forEach(elem => {
  elem.addEventListener("dragstart", dragStart);
});

droppableElements.forEach(elem => {
  elem.addEventListener("dragenter", dragEnter); // Fires when a dragged item enters a valid drop target
  elem.addEventListener("dragover", dragOver); // Fires when a dragged item is being dragged over a valid drop target, repeatedly while the draggable item is within the drop zone
  elem.addEventListener("dragleave", dragLeave); // Fires when a dragged item leaves a valid drop target
  elem.addEventListener("drop", drop); // Fires when an item is dropped on a valid drop target
});

droppableElements.forEach(function (cell) {
  cell.addEventListener("drop", function (event) {
    event.preventDefault();

    // Get the dropped data
    var droppedData = event.dataTransfer.getData("text/plain");

    // Get the coordinate from the data attributes
    dropCell.row = cell.dataset.row;
    dropCell.col = cell.dataset.col;
    dropCoordinates = cell.getAttribute('data-draggable-id');

    console.log("Dropped coordinate: ", dropCoordinates);
    // Log the dropped data and coordinate to the console
    console.log("Dropped shape:", droppedData);
    console.log("Coordinate: Row =", dropCell.row, ", Column =", dropCell.col);
  });
});

// Drag and Drop Functions

//Events fired on the drag target

function dragStart(event) {
  event.dataTransfer.setData("text", event.target.id); // or "text/plain" but just "text" would also be fine since we are not setting any other type/format for data value
  // console.log(event.target.id);
}

function dragEnter(event) {
  if(!event.target.classList.contains("dropped")) {
    event.target.classList.add("droppable-hover");
  }
}

function dragOver(event) {
  if(!event.target.classList.contains("dropped")) {
    event.preventDefault(); // Prevent default to allow drop
  }
}

function dragLeave(event) {
  if(!event.target.classList.contains("dropped")) {
    event.target.classList.remove("droppable-hover");
  }
}

function getSubBlock(x, y, shape) {
  // var coordinates;
  // const size = 240;
  coordinates = undefined;
  onMouseDownShape = shape;
  switch(shape) {
    case "L_block":
      if(x > 0 && x < 80 && y > 0 && y < 80) coordinates = 1;
      if(x > 0 && x < 80 && y > 80 && y < 160) coordinates = 2;
      if(x > 0 && x < 80 && y > 160 && y < 240) coordinates = 3;
      if(x > 80 && x < 160 && y > 160 && y < 240) coordinates = 4;
      break;
    case "L_reverse_block":
      if(x > 80 && x < 160 && y > 0 && y < 80) coordinates = 1;
      if(x > 80 && x < 160 && y > 80 && y < 160) coordinates = 2;
      if(x > 80 && x < 160 && y > 160 && y < 240) coordinates = 3;
      if(x > 0 && x < 80 && y > 160 && y < 240) coordinates = 4;
      break;
    case "O_block":
      if(x > 0 && x < 80 && y > 80 && y < 160) coordinates = 1;
      if(x > 80 && x < 160 && y > 80 && y < 160) coordinates = 2;
      if(x > 0 && x < 80 && y > 160 && y < 240) coordinates = 3;
      if(x > 80 && x < 160 && y > 160 && y < 240) coordinates = 4;
      break;
    case "I_block":
      if(x > 0 && x < 80 && y > 0 && y < 80) coordinates = 1;
      if(x > 0 && x < 80 && y > 80 && y < 160) coordinates = 2;
      if(x > 0 && x < 80 && y > 160 && y < 240) coordinates = 3;
      break;
    case "S_block":
      if(x > 0 && x < 80 && y > 160 && y < 240) coordinates = 1;
      if(x > 80 && x < 160 && y > 160 && y < 240) coordinates = 2;
      if(x > 80 && x < 160 && y > 80 && y < 160) coordinates = 3;
      if(x > 160 && x < 240 && y > 80 && y < 160) coordinates = 4;
      break;
    case "Z_block":
      if(x > 0 && x < 80 && y > 80 && y < 160) coordinates = 1;
      if(x > 80 && x < 160 && y > 80 && y < 160) coordinates = 2;
      if(x > 80 && x < 160 && y > 160 && y < 240) coordinates = 3;
      if(x > 160 && x < 240 && y > 160 && y < 240) coordinates = 4;
      console.log(coordinates);
      break;
    default:
      coordinates = "out of shape range";
  }
  return coordinates;
}

document.addEventListener("DOMContentLoaded", function () {

  var elementArray = [];
  elementArray.push(document.getElementById("L_block"));
  elementArray.push(document.getElementById("L_reverse_block"));
  elementArray.push(document.getElementById("O_block"));
  elementArray.push(document.getElementById("I_block"));
  elementArray.push(document.getElementById("S_block"));
  elementArray.push(document.getElementById("Z_block"));

  elementArray.forEach(elem => {
    elem.addEventListener("mousedown", function (event) {
        var mouseX = event.offsetX;
        var mouseY = event.offsetY;
        console.log("Mouse Coordinates Inside Element: X =", mouseX, ", Y =", mouseY);
        getSubBlock(mouseX, mouseY, elem.id);
      });
    }
  )
});

function getDataForShape(onMouseDownShape) {
  for (const data of coordinateArrangement) {
    if (data.shape === onMouseDownShape) return data.arrangement;
  }
}


function drop(event) {
  event.preventDefault(); // This is in order to prevent the browser default handling of the data
  event.target.classList.remove("droppable-hover");
  const draggableElementData = event.dataTransfer.getData("text"); // Get the dragged data. This method will return any data that was set to the same type in the setData() method
  const draggableElement = document.getElementById(draggableElementData);

  var tempArrangementData = getDataForShape(onMouseDownShape);

  var row = parseInt(event.target.dataset.row);
  var col = parseInt(event.target.dataset.col);
  console.log(row, col);
  async function handleDroppedCells() {
    try {
      var color = window.getComputedStyle(draggableElement).color;
      var modDroppedCell = [];
      
      for (var i = 0; i < tempArrangementData.length; i++) {
        row += tempArrangementData[coordinates-1][i][0];
        col += tempArrangementData[coordinates-1][i][1];
        modDroppedCell.push(await findDroppable('.droppable[data-row="' + row + '"][data-col="' + col + '"]'));
      }

      for (var i = 0; i < coordinateArrangement[0].arrangement[coordinates-1].length; i++) {
        modDroppedCell[i].classList.add("dropped");
        modDroppedCell[i].style.backgroundColor = color;
      }

    } catch (error) {
        console.log(error);
    }
  }
  
  function findDroppable(selector) {
    return new Promise((resolve, reject) => {
      var element = document.querySelector(selector);
      if (element) {
        resolve(element);
      } else {
        reject(new Error(`Element not found for selector: ${selector}`));
      }
    });
  }
  
  // Usage
  handleDroppedCells();
  draggableElement.classList.add("dragged");
  // draggableElement.setAttribute("draggable", "false");
}