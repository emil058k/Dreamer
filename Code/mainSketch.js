var scenes;
var tiles;
var scene_w = 2000;
var scene_h = 800;

function setup() {
  //Det tegnes i midten pga- style.css filen
  createCanvas(1000, 600);

  scenes = new Group();
  

  player = createSprite((width / 13) * 3, (height/8) * 6 - 75, 100, 200);
  player.shapeColor = color(0);
}

function draw() {
  console.log('x=' + player.position.x)
  background(150);
  //Tegner alle sprites der er created
  noStroke();
  fill(50);
  rect(0, (height / 8) * 6, width, (height / 8) * 2);
  drawSprites();
  movement();
}
