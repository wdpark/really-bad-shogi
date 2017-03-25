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
            piece.hitArea = new PIXI.Rectangle(piece.x, piece.y, 78, 78);
            grid_sprite[x][y] = piece;

            app.stage.addChild(piece);
        }
    }
}

function updateSprites()
{
<<<<<<< HEAD:main.js
    var piece;
    var pieceimages = ["/images/lance.png", "/images/knight.png", "/images/general_silver.png", "/images/general_gold.png", "/images/king.png", "/images/bishop.png", "/images/rook.png", "/images/pawn.png", "/images/bishop_promoted.png", "/images/dragon.png", "/images/knight_promoted.png", "/images/lance_promoted.png", "/images/pawn_promoted.png", "/images/silver_promoted.png"]
    for(var x = 0; x < 9; x++)
=======
    
    var pieceimages = ["/images/lance.png", "/images/knight.png", "/images/general_silver.png", "/images/general_gold.png", "/images/king_low.png", "/images/bishop.png", "/images/rook.png", "/images/pawn.png", "/images/bishop_promoted.png", "/images/dragon.png", "/images/king_high.png", "/images/knight_promoted.png", "/images/lance_promoted.png", "/images/pawn_promoted.png", "/images/silver_promoted.png"]
    
    for(var x = 0; x < grid_sprite.length; x++)
>>>>>>> origin/master:dontusethis.js
    {
        for(var y = 0; y < grid_sprite[0].length; y++)
        {
          var piece = grid_sprite[x][y];
          if(grid_sprite[x][y]!==null){
            app.stage.removeChild(grid_sprite[x][y]);
          }

            piece = PIXI.Sprite.fromImage(pieceimages[grid[x][y].player]);
            piece.x = x*78 + 18.5;
            piece.y = y*78 + 6;

            piece.state = "alive";
            piece.clicks = 0;
            piece.interactive = true;
            piece.hitArea = new PIXI.Rectangle(piece.x, piece.y, 78, 78);
            grid_sprite[x][y] = piece;


            piece.mouseover = function(mouseData)
            {
              console.log("mouseover");
              piece.state = "mouseover";
              while(piece.clicks == 1){
                app.stage.removeChild(piece);
                piece.state = "moving";
                movePiece(piece);

                app.stage.addChild(piece);
                console.log(piece.x,piece.y);
                console.log(grid_sprite[x]);
                console.log(x,y);
                grid_sprite[piece.x][piece.y] = piece;

                console.log(piece.x + ", " + piece.y);
                console.log("clicks:" + piece.clicks);
              }
            }

            piece.click = function(mouseData)
            {
              piece.clicks++;
              app.stage.removeChild(piece);
              console.log("mouseClick");
              if(piece.clicks == 2){
                movePiece(piece);
                piece.clicks == 0;
              }
            }

            app.stage.addChild(piece);
        }
    }
}

<<<<<<< HEAD:main.js
var randomNum = []

function standard()
{
  rngPiece();

  for(var i = 1; i < 5; i++){

  }

}

function rngPiece()
{
  for(var i = 0; i < 9; i++){

    randomNum.push(Math.floor(Math.random()*4+1));

  }
    randomNum.push(5);
    console.log(randomNum);
}
rngPiece();

=======
>>>>>>> origin/master:dontusethis.js

function movePiece(obj){

  var e = window.event;

  obj.x = e.clientX;
  obj.y = e.clientY;
  console.log("x:" + e.clientX + ", y:" + e.clientY);

}