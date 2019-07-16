// Create a constructor function for the enemies
// Enemies our player must avoid
var Enemy = function(x, y, s) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started
  this.sprite = 'images/enemy-bug.png';
  this.x = x;
  this.y = y;
  this.speed = s;
  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
};





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
    this.x = -110;
    // Set random speed for the vehicles
    var enemySpeed = Math.floor(math.random() * 4 + 1);
    this.speed = 60 * enemySpeed;
  }
};

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


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function Player() {
  this.sprite = 'images/char-princess-girl.png';
  this.x = 101;
  this.y = 808;
  this.h_step = 101;
  this.v_step = 83;
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [
  'images/enemy-bug.png',
  'images/enemy-bug.png',
  'images/enemy-bug.png',
  'images/enemy-bug.png',
  'images/enemy-bug.png',
];



Player.prototype.resetPosition = function() {
  this.x = 101;
  this.y = 808;
};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

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
// this code prevents walking outside the canvas
Player.prototype.handleInput = function(direction) {
  switch (direction) {
    case 'left':
      this.x >= this.h_step ? this.x -= this.h_step : this.x -= 0;
      break;
    case 'right':
      this.x <= this.h_step * 5) ? this.x += this.h_step: this.x += 0;
  break;
  case 'up' :
  this.y -= this.v_step;
  if (this.y <= 50) {
    alert("Hey, you've won the game!")
    updateView('SUCCESS! YOU WIN!')
    this.resetPosition();
  }
}
}
