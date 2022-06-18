var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
    fabric.Image.fromURL("BirthdayImage.jpg", function(Bday)
    {
        object = Bday;

        object.scaleToHeight(410);
        object.scaleToWidth(600);
        object.set(
            {
                left:0,
                top:0,
            }
        );


    });
    canvas.add(object);	
}
new_image();
function playSound()
{
    x.play();
}
playSound();

function stopMusic()
{
    x.pause();
}
stopMusic();