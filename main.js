const { fabric } = require("./fabric");

var canvas = new fabric.Canvas ('myCanvas');

block_image_width =30;
block_image_height=30;

player_x = 10;
player_y = 10;

var player_object ="";

function player_update()
{
   fabric.Image.fromURL("player.png",function(Img)
   {
      player_object=Img;
    player_object.scaleToWidth(150);
       player_object.scaleToHeight(130);
       player_object.set({
        top :player_y,
        left :player_x
       });
       canvas.add(player_object);
   } );
}

function new_image(get_image)
{
   fabric.Image.fromURL(get_image,function(Img)
   {
       block_image_object=Img
    block_image_object.scaleToWidth(block_image_width) ;
       block_image_object.scaleToHeight(block_image_height);
       block_image_object.set({

        top :player_y,
        left :player_x
       });
       canvas.add(block_image_object);
   } );
}
window.addEventListener("keydown",my_keydown);
funcution my_keydown(e)
{
    keypressed=e.keycode;
    console.log(keypressed);

    if(e.shiftkey==true  && keypressed=='80')
    {
        console.log("p and shift pressed together");
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }

    if(e.shiftkey==true  && keypressed=='77')
    {
        console.log("m and shift pressed together");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(keypssed=='38')
    {
        Up();
        console.log("up");
    }

    if(keypssed=='40')
    {
        Down();
        console.log("down");
    }

    if(keypssed=='37')
    {
        Left();
        console.log("Left");
    }

    if(keypssed=='39')
    {
        Right();
        console.log("Right");
    }

    if(keypressed=='84')
    {
        new_image('trunk.jpg');
        console.log("t");
    }

    if(keypressed=='68')
    {
        new_image('dark_green.png');
        console.log("d");
    }

    if(keypressed=='76')
    {
        new_image('light_green.png');
        console.log("l");
    }

    if(keypressed=='71')
    {
        new_image('ground.png');
        console.log("g");
    }

    if(keypressed=='87')
    {
        new_image('wall.jpg');
        console.log("w");
    }

    if(keypressed=='89')
    {
        new_image('yellow_wall.png');
        console.log("y");
    }

    if(keypressed=='82')
    {
        new_image('roof.jpg');
        console.log("r");
    }

    if(keypressed=='67')
    {
        new_image('cloud.jpg');
        console.log("c");
    }

    if(keypressed=='85')
    {
        new_image('unique.png');
        console.log("u");
    }
}
function up ()
{
    if(player_y>=0)
    {
        player_y=player_y-block_image_height;
        console.log("block image height="+block_image_height);
        console.log("when up arrow is pressed,X="+player_x +",Y ="+player_y);
        canvas.remove (player_object);
        player_update();
    }

}

function down ()
{
    if(player_y<=600)
    {
        player_y=player_y-block_image_height;
        console.log("block image height="+block_image_height);
        console.log("when down arrow is pressed,X="+player_x +",Y ="+player_y);
        canvas.remove (player_object);
        player_update();
    }

}

function left ()
{
    if(player_x>=0)
    {
        player_y=player_y-block_image_height;
        console.log("block image width="+block_image_width);
        console.log("when left arrow is pressed,X="+player_x +",Y ="+player_y);
        canvas.remove (player_object);
        player_update();
    }

}

function right ()
{
    if(player_x<=1000)
    {
        player_y=player_y-block_image_height;
        console.log("block image width="+block_image_width);
        console.log("when right arrow is pressed,X="+player_x +",Y ="+player_y);
        canvas.remove (player_object);
        player_update();
    }

}
}