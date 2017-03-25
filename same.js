var renderer = PIXI.autoDetectRenderer(750, 750, {backgroundColor : 0xffffff});
document.body.appendChild(renderer.view);
var stage = new PIXI.Container();

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
    var pieceimages = ["/images/lance.png", "/images/knight.png", "/images/general_silver.png", "/images/general_gold.png", "/images/king_low.png", "/images/bishop.png", "/images/rook.png", "/images/pawn.png", "/images/bishop_promoted.png", "/images/dragon.png", "/images/king_high.png", "/images/knight_promoted.png", "/images/lance_promoted.png", "/images/pawn_promoted.png", "/images/silver_promoted.png"]
    for(var x = 0; x < 9; x++)
    {
        for(var y = 0; y < 9; y++)
        {
            stage.removeChild(grid_sprite[x][y]);
            piece = PIXI.Sprite.fromImage(pieceimages[grid[x][y].player]);
            // piece = PIXI.Sprite.fromImage("images/bullet_hitbox_rect.png");
            piece.x = x*78 + 18.5;
            piece.y = y*78 + 6;

            piece.state = "alive";
            piece.clicks = 0;
            stage.addChild(piece);
            piece.interactive = true;
            piece.hitArea = new PIXI.Rectangle(0,0,81,81)
            piece.mouseover = function(mouseData)
            {
              console.log("mouseover");
              piece.state = "mouseover";
              this.alpha = .2;
            }


            piece.click = function(mouseData)
            {
              piece.clicks ++;
              console.log("mouseClick");
              if(piece.clicks == 2){
                movePiece(piece);
                piece.clicks == 0;
              }
            }

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
// start animating
animate();

function animate() {
  requestAnimationFrame(animate);
  // render the root container
  renderer.render(stage);
};


updateSprites();
