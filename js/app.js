// Create a constructor function for the enemies
// Enemies our player must avoid
var Enemy = function(x, y, s) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started
  this.sprite = 'images/enemy-bug.png';
  this.x = x;
  this.width = 75;
  this.height = 50;
  this.y = setRow();
  this.speed = s;
  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// The required Collision logic
// Account for the space surrounding the enemies
var enemyLeft = this.x - 70;
var enemyRight = this.x + 70;
var enemyTop = this.y - 60;
var enemyBottom = this.y + 60;
// Set parameters for when the player touches the enemy
if (
  Player.x > enemyLeft &&
  Player.x < enemyRight &&
  Player.y > enemyTop &&
  Player.y < enemyBottom) {
  player.resetPosition();
  console.log('GAME OVER!');
}

//////////////////// ENEMY COLLISION LOGIC ////////////////////

// Now instantiate your objects.
// create a variable with a object constructor function.
// Top Row
var firstEnemyTop = new Enemy();
var secondEnemyTop = new Enemy();
var thirdEnemyTop = new Enemy();
// Bottom Row
var firstEnemyBottom = new Enemy();
var secondEnemyBottom = new Enemy();
var thirdEnemyBottom = new Enemy();
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];
allEnemies.push(firstEnemyTop, secondEnemyTop, thirdEnemyTop);

// var bottomEnemies = [];
// allEnemies.push(firstEnemyBottom, secondEnemyBottom, thirdEnemyBottom);

//////////////////// ENEMY SPEED ////////////////////

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  // THIS IS ALL ABOUT MOVING THE ENEMIES
  this.x += this.speed * dt;
  // If the enemies x location is greater than the length of the canvas reset it back to -110.
  if (this.x > 808) {
    this.x = -50;
    this.y = setRow();
    // Set random speed for the vehicles
    var enemySpeed = Math.floor(math.random() * 4 + 1);
    this.speed = 60 * enemySpeed;
  }
};

//////////////////// PLAYER ////////////////////
// Object Constructor for the player
var Player = function(x, y) {
  this.player = 'images/char-boy.png';
  this.x = x;
  this.y = y;
  this.width = 50;
  this.width = 75;
  this.h_step = 101;
  this.v_step = 83;
};

// Calling the constructor function for a new instance of Player
var player = new Player(404,808);

// Location to reset player to when called
Player.prototype.resetPosition = function() {
  this.x = 404;
  this.y = 808;
};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.player), this.x, this.y);
};

Player.prototype.update = function(dt){
// Win Condition
if (this.y <= -15) {
       this.win();
       this.reset();
   }
     this.checkCollisions();
 };

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});


// This code activates the movemment of the character
Player.prototype.handleInput = function(direction) {
  if (direction === 'left' && this.x > 0) {
          this.x -= 100;
      }
      if (direction === 'up' && this.y > -12.5) {
          this.y -= 83;
      }
      if (direction === 'right' && this.x < 400) {
          this.x += 100;
      }
      if (direction === 'down' && this.y < 400) {
          this.y += 83;
      }
  if (this.y <= 50) {
    alert("Hey, you've won the game!")
    updateView('SUCCESS! YOU WIN!')
    this.resetPosition();
  }
};

//////////////////// GAME RESET ////////////////////
var gameReset = function() {
    firstEnemyTop.x = -100;
    secondEnemyTop.x = -100;
    thirdEnemyTop.x = -100;
    firstEnemyBottom.x = -100;
    secondEnemyBottom.x = -100;
    thirdEnemyBottom.x = -100;
    player.resetPosition();
};
