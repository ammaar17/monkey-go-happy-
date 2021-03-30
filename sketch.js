var monkey, monkey_running, bananaGroup, ground;
var banana1, bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup, bananaImage;
var score, background1, background1Image;

function preload() {
  monkey_running = loadAnimation(
    "sprite_0.png",
    "sprite_1.png",
    "sprite_2.png",
    "sprite_3.png",
    "sprite_4.png",
    "sprite_5.png",
    "sprite_6.png",
    "sprite_7.png",
    "sprite_8.png"
  );

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  background1Image = loadImage("jungle.jpg");
}

function setup() {
  background1 = createSprite(600, 250, 100, 100);
  background1.addImage(background1Image);
  background1.velocityX = -2;

  monkey = createSprite(100, 550, 10, 10);
  monkey.scale = 0.1;
  monkey.addAnimation("monkeyRun", monkey_running);

  obstacle = createSprite(500, 550, 10, 10);
  obstacle.velocityX = -2;
  obstacle.scale = 0.1;
  obstacle.addImage(obstacleImage);

  ground = createSprite(100, 580, 9999, 10);
  ground.velocityX = -3;
  ground.visible = false;

  banana1();

  score = 0;
}

function draw() {
  createCanvas(600, 600);

  background("white");

  drawSprites();

  stroke("red");
  textSize(20);
  fill("red");
  text("SCORE:" + score, 400, 50);

  if (score > 0 && score % 100 === 0) {
  }

  if (keyDown("space") && monkey.y >= 355) {
    monkey.velocityY = -12;
  }

  switch (score) {
    case 10:
      monkey.scale = 0.12;
      break;
    case 20:
      monkey.scale = 0.14;
      break;
    case 30:
      monkey.scale = 0.16;
      break;
    case 40:
      monkey.scale = 0.18;
      break;
    default:
      break;
  }

  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  if (banana.x < 0) {
    banana.x = banana.width / 1;
  }

  if (obstacle.x < 0) {
    obstacle.x = obstacle.width / 0.1;
  }

  if (monkey.isTouching(banana)) {
    banana.destroy();
    score = score + 1;

    banana1();
  }
  if (obstacle.isTouching(monkey)) {
    monkey.destroy();
  }
  if (background1.x < 100) {
    background1.x = background1.width / 2;
  }
}

function banana1() {
  banana = createSprite(500, 300, 10, 10);
  banana.velocityX = -2;
  banana.addImage(bananaImage);
  banana.scale = 0.1;
}
