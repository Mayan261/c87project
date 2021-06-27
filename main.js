var canvas = new fabric.Canvas('myCanvas');
// Create canvas variable
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
		block_image_object = Img;
	
		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
		top:block_y,
		left:block_x
		});
		canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '69') // add appropriate keycode
	{
		new_image('https://i.pinimg.com/originals/b9/2d/87/b92d876ab13590add10114a4e4123df6.gif');
		console.log("E");
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		new_image('https://i.pinimg.com/originals/47/3a/c2/473ac2c1fc50ced8de32a0971050737f.png');
		console.log("G");
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_image('https://e7.pngegg.com/pngimages/870/311/png-clipart-trini-kwan-kimberly-hart-power-rangers-cartoon-animated-film-power-rangers-zeo-comics-fictional-character-thumbnail.png');
		console.log("Y")
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		new_image('https://i.pinimg.com/originals/07/e4/85/07e485440b44864d4202e8c7b9a28597.gif');
		console.log("P");
	}
	if(keyPressed == '66')
	{
		block_x = 700;
	new_image('https://www.pngfind.com/pngs/m/263-2638009_blue-power-ranger-png-blue-power-ranger-cartoon.png');
	console.log("B")
	}
	
}
