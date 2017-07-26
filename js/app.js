//Get Random Integer between min and max
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    var  yPossible =[50, 140, 225];
    var r = getRandomInt(0,3);

    this.sprite = 'images/enemy-bug.png';
    this.x = -100;
    this.y = yPossible[r];
    
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    var speed = getRandomInt(75,300);
    if(this.x >= 500){
       r = getRandomInt(0,3);
       var  yPossible =[50, 140, 225];
       this.x = -100;
       this.y = yPossible[r];
    };
   this.x += speed * dt;
    if(((player.x <(this.x + 40))&&(player.x > (this.x - 40))) && (player.y < (this.y+40)&& (player.y > (this.y - 40)))){
        player.y = 400;
        player.x = 200;
    };
   
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var player = function() {
    
    this.x = 200;
    this.y = 400;
    this.mv = 1;
    this.sprite = 'images/char-boy.png';
};

player.prototype.update = function () {

};

player.prototype.render = function () {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

player.prototype.handleInput = function (e) {
    if( e === 'up' && this.y <=  56 ) {
        this.y = 500;
        this.x = 200;
        window.alert("YOU WIN!!!!");
    }
    if(e === 'left' && this.x >= 0){
        this.x = this.x - 101;
    };
    if(e === 'right' && this.x < 400){
        this.x = this.x + 101;
    };
    if(e ===  'up' && this.y >= 100){
        this.y = this.y - 90;
    };
    if(e === 'down' && this.y <400){
        this.y = this.y + 90;
    };
   
   
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
//var enemy = enemy();
var allEnemies = [];
var player = new player(); 
var e1 = new Enemy();
var e2= new Enemy();
var e3 = new Enemy();
allEnemies.push(e1,e2,e3);
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
