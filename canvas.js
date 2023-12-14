const shapeData = [
    {
        shapeName: "L_block",
        color: "#ff6384"
    },
    {
        shapeName: "L_reverse_block",
        color: "#36a2eb"
    },
    {
        shapeName: "O_block",
        color: "#ffce56"
    },
    {
        shapeName: "I_block",
        color: "#9966ff"
    },
    {
        shapeName: "S_block",
        color: "#4bc0c0"
    },
    {
        shapeName: "Z_block",
        color: "#FF7633"
    },
]

function getColorForShape(shapeName) {
    for (const shape of shapeData) {
        if (shape.shapeName === shapeName) return shape.color;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    
    //L_block
    var L_block = document.getElementById("L_block");
    var ctx = L_block.getContext("2d");
    ctx.fillStyle = getColorForShape(L_block.id); // Set the fill color
    document.getElementById("L_block").style.color = getColorForShape(L_block.id);
    ctx.fillRect(0, 0, 100, 100); // Draw a rectangle (x, y, width, height)
    ctx.fillRect(0, 100, 200, 50);

    //L_reverse_block
    var L_reverse_block = document.getElementById("L_reverse_block");
    var ctx = L_reverse_block.getContext("2d");
    ctx.fillStyle = getColorForShape(L_reverse_block.id);
    document.getElementById("L_reverse_block").style.color = getColorForShape(L_reverse_block.id);
    ctx.fillRect(100, 0, 100, 100);
    ctx.fillRect(0, 100, 200, 50);

    //O_block
    var O_block = document.getElementById("O_block");
    var ctx = O_block.getContext("2d");
    ctx.fillStyle = getColorForShape(O_block.id);
    document.getElementById("O_block").style.color = getColorForShape(O_block.id);
    ctx.fillRect(0, 50, 200, 50);
    ctx.fillRect(0, 100, 200, 50);

    //I_block
    var I_block = document.getElementById("I_block");
    var ctx = I_block.getContext("2d");
    ctx.fillStyle = getColorForShape(I_block.id);
    document.getElementById("I_block").style.color = getColorForShape(I_block.id);
    ctx.fillRect(0, 0, 100, 150);

    //S_block
    var S_block = document.getElementById("S_block");
    var ctx = S_block.getContext("2d");
    ctx.fillStyle = getColorForShape(S_block.id);
    document.getElementById("S_block").style.color = getColorForShape(S_block.id);
    ctx.fillRect(100, 50, 200, 50);
    ctx.fillRect(0, 100, 200, 50);

    //Z_block
    var Z_block = document.getElementById("Z_block");
    var ctx = Z_block.getContext("2d");
    ctx.fillStyle = getColorForShape(Z_block.id);
    document.getElementById("Z_block").style.color = getColorForShape(Z_block.id);
    ctx.fillRect(0, 50, 200, 50);
    ctx.fillRect(100, 100, 200, 50);

    
    
});
