
var app = new PIXI.Application(750, 750, {backgroundColor : 0xffffff});
document.body.appendChild(app.view);
var renderer = PIXI.autoDetectRenderer(1, 1);
document.body.appendChild(renderer.view);
var stage = new PIXI.Container();
renderer.render(stage);

var backGrid = PIXI.Sprite.fromImage("images/grid.jpg");
app.stage.addChild(backGrid)

var grid = [];
var grid_sprite = [];
for(var x = 0; x < 9; x++)
{
  grid.push([]);
  grid_sprite.push([]);
  for(var y = 0; y < 9; y++)
  {
    grid[x].push({});
    grid[x][y].pieceid = 0;
    if(y < 4)
    {
      grid[x][y].player = 0;
    }
    else
    {
      grid[x][y].player = 1;
    }
  }
}

updateSprites();


function updateSprites()
{
    var piece;
    var pieceimages = ["/images/oc.jpg", "/images/dark_oc.jpg"]
    for(var x = 0; x < 9; x++)
    {
        for(var y = 0; y < 9; y++)
        {
            app.stage.removeChild(grid_sprite[x][y]);
            piece = PIXI.Sprite.fromImage(pieceimages[grid[x][y].player]);
            piece.x = x*78 + 18.5;
            piece.y = y*78 + 18.;

            piece.state = "alive";
            piece.clicks = 0;
            piece.interactive = true;
            piece.hitArea = new PIXI.Rectangle(piece.x, piece.y, 70, 70);

            piece.mouseover = function(mouseData)
            {
              console.log("mouseover");
              piece.state = "mouseover";
            }

            piece.click = function(mouseData)
            {
              piece.clicks ++;
              console.log("mouseClick");
              // if(piece.clicks == 1){
              //   piece.state = movin
              // }
              // if(piece.clicks == 2 && ){
              //   piece.x = event.clientX;
              //   piece.y = event.clientY;
              // }
            }

            app.stage.addChild(piece);
            grid_sprite[x][y] = piece;

            // var pieceimages = ["images/oc.jpg", "images/oc.jpg", "images/oc.jpg", "images/oc.jpg", "images/oc.jpg", "images/oc.jpg", "images/oc.jpg", "images/oc.jpg", "images/oc.jpg", "images/oc.jpg", "images/oc.jpg", "images/oc.jpg", "images/oc.jpg", "images/oc.jpg", "images/oc.jpg"]
            // piece = PIXI.Sprite.fromImage(pieceimages[grid[x][y].pieceid]);
            // if(grid[x][y].player == 1)
            // {
            //   var pieceimages = ["images/oc.jpg", "images/oc.jpg", "images/oc.jpg", "images/oc.jpg", "images/oc.jpg", "images/oc.jpg", "images/oc.jpg", "images/oc.jpg", "images/oc.jpg", "images/oc.jpg", "images/oc.jpg", "images/oc.jpg", "images/oc.jpg", "images/oc.jpg", "images/oc.jpg"]
            //   piece = PIXI.Sprite.fromImage(pieceimages[grid[x][y].pieceid]);
            // }
        }
    }
}

//changes the piece
grid[2][2].pieceid = 1;
updateSprites();
console.log(grid_sprite[1][1].clicks);
