var renderer = PIXI.autoDetectRenderer(750, 750, {backgroundColor : 0xffffff});
document.body.appendChild(renderer.view);
var stage = new PIXI.Container();
stage.interactive = true;
stage.buttonMode = true;
stage.defaultCursor = "cursor";

var backGrid = PIXI.Sprite.fromImage("images/grid.jpg");
stage.addChild(backGrid)
var grid = [];
var grid_sprite = [];
for(var x = 0; x < 9; x++)
{
  grid.push([]);
  grid_sprite.push([]);
  for(var y = 0; y < 9; y++)
  {
    grid[x].push({});
    grid_sprite[x].push(null);
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

createSprites();


function createSprites()
{

    var pieceimages = ["/images/lance.png", "/images/knight.png", "/images/general_silver.png", "/images/general_gold.png", "/images/king_low.png", "/images/bishop.png", "/images/rook.png", "/images/pawn.png", "/images/bishop_promoted.png", "/images/dragon.png", "/images/king_high.png", "/images/knight_promoted.png", "/images/lance_promoted.png", "/images/pawn_promoted.png", "/images/silver_promoted.png"]

    for(var x = 0; x < grid_sprite.length; x++)
    {
        for(var y = 0; y < grid_sprite[0].length; y++)
        {
            var piece;
            // if(grid_sprite[x][y]!==null){
            //   app.stage.removeChild(grid_sprite[x][y]);
            // }

            piece = PIXI.Sprite.fromImage(pieceimages[grid[x][y].player]); //picks 1 or 2, make it either knight or lance

            piece.x = x*78 + 18.5;
            piece.y = y*78 + 6;

            piece.state = "alive";
            piece.clicks = 0;
            piece.interactive = true;
            piece.hitArea = new PIXI.Rectangle(0, 0, 80, 80);
            grid_sprite[x][y] = piece;

            stage.addChild(piece);
        }
    }
}

function updateSprites()
{
    for(var x = 0; x < grid_sprite.length; x++)
    {
        for(var y = 0; y < grid_sprite[0].length; y++)
        {
          var piece = grid_sprite[x][y];
          if(grid_sprite[x][y]!==null){
            stage.removeChild(grid_sprite[x][y]);
          }

            piece = PIXI.Sprite.fromImage(pieceimages[grid[x][y].player]);
            piece.x = x*78 + 18.5;
            piece.y = y*78 + 6;
            // console.log();
            piece.state = "alive";
            piece.clicks = 0;
            piece.interactive = true;
            piece.hitArea = new PIXI.Rectangle(0, 0, 80, 80);
            // grid_sprite[x][y] = piece;

            piece.mouseover = function(mouseData)
            {
              if(this.clicks == 1){
                  this.state = "moving";
                  stage.addChild(this);
                //   console.log(this.x,this.y);
                //   console.log(grid_sprite[x]);
                //   console.log(x,y);
                //   grid_sprite[x][y] = piece;
                  //
                //   console.log(this.x + ", " + this.y);
                //   console.log("clicks:" + this.clicks);
              }
              else {
                  piece.state = "mouseover";
                  this.alpha = .6;
              }
            }

            piece.mouseout = function(mouseData)
            {
              if(this.clicks == 1){
                  // should never happen
              }
              else {
                  this.alpha = 1
              }
            }


            piece.mousedown = function(mouseData)
            {
                this.clicks += 1;
                if(this.clicks == 2){
                  this.alpha = 1;
                  this.dragging = false;
                  this.data = null;
                  this.x = Math.round(this.x / 78) * 78 + 18.5;
                  this.y = Math.round(this.y / 78) * 78 + 6;
                  this.clicks = 0
                }
                else {
                    this.data = mouseData.data;
                    this.dragging = true;
                }
            }

            piece.mousemove = function(mouseData)
            {
              this.state= "moving"
              if (this.dragging)
                {
                    var newPosition = this.data.getLocalPosition(this.parent);
                    this.position.x = newPosition.x - 40;
                    this.position.y = newPosition.y - 40;
                }
            }

            stage.addChild(piece);
        }
    }
}

document.addEventListener('mousemove', checkMovement, false);
document.addEventListener('click', checkMovement, false);

function checkMovement(){

    // updateSprites()

}



var pieceimages = ["/images/lance.png", "/images/knight.png", "/images/general_silver.png", "/images/general_gold.png", "/images/bishop.png", "/images/rook.png", "/images/pawn.png"]

var random =[];

function rng()
{
  for(var i = 0; i < 8; i++)
  {
    random[i] = pieceimages[Math.floor(Math.random() * pieceimages.length)];
  }
}
rng();
console.log(random);





function movePiece(obj){
    // obj.alpha = 0
  // var e = window.event;
  //
  // obj.x = e.clientX;
  // obj.y = e.clientY;
  // console.log("x:" + e.clientX + ", y:" + e.clientY);
}
// start animating
animate();

function animate() {
  requestAnimationFrame(animate);
  // render the root container
  renderer.render(stage);
};


updateSprites();
