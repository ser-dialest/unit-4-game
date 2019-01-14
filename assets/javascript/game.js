// Character constructor
function Warrior(name, hp, atk, id, image) {
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.id = id;
    this.image = "assets/images/" + image;
    this.lvl = 1;

    this.attack = function(enemy) {
        enemy.hp = enemy.hp - this.atk;
        this.swing()
    };

    this.counter = function(player) {
        player.hp = player.hp - this.cntr;
        this.swing();        
    };

    this.swing = function() {
        // animation function
    };

    this.die = function() {
        // Check if dead
        if (player.hp <= 0) {
            player.hp = 0;
            // animation for death    
        }
    };
}

// Four characters
var fighter = new Warrior("Fighter", 400, 5, "fighter", "Fighter3.png");
var blackBelt = new Warrior("Black Belt", 325, 7, "blackBelt", "BlackBelt3.png");
var redMage = new Warrior("Red Mage", 300, 9, "redMage", "RedMage3.png");
var blackMage = new Warrior("Black Mage", 175, 20, "blackMage", "BlackMage3.png");

// The variable that represents whom the user has chosen to be
var player;
// The variable that represents the user's currnt enemy
var enemy;
// The array that represents warriors that are have not yet been engaged
var opponents = [fighter, blackBelt, redMage, blackMage];

// function to create view areas in the style
function boxCreate(container) {
    $("#" + container).css("position", "relative");
    $("#" + container).html(" \
    <div class='tlc'></div> \
    <div class='tb'></div> \
    <div class='trc'></div> \
    <div class='lb'></div> \
    <div class='rb'></div> \
    <div id=" + container + "-content> \
    </div> \
    <div class='blc'></div> \
    <div class='bb'></div> \
    <div class='brc'></div> \
    ");
}

// Function to fill box with character select information
function charSelect(char) {
    $("#" + char.id + "-content").html(" \
    <p>" + char.name + "</p> \
    <img src=" + char.image + " alt=" + char.name + " class='portrait' /> \
    <p>HP: " + char.hp + "</p> \
    <p>ATK: " + char.atk + "</p> \
    ");
    $("#" + char.id + "-content").click(function(){select(char.id, char);});
}

// create battle scene
// define attack function

// opening > char select > enemy select > battle > attack(repeat) > Loss or enemy select > battle

// Get out of opening screen
$(document).bind('click', function(){
    $(document).unbind('click');
    // Create character select sceen;
    $("#gamescreen").css("background", "black");
    $("#gamescreen").html(" \
    <div class='row'> \
        <div class='col-md-12' id='instructions'> \
        </div> \
    </div> \
    <div class='row'> \
        <div class='col-md-6 charSelect' id='fighter'> \
        </div> \
        <div class='col-md-6 charSelect' id='blackBelt'> \
        </div> \
    </div> \
    <div class='row'> \
        <div class='col-md-6 charSelect' id='redMage'> \
        </div> \
        <div class='col-md-6 charSelect' id='blackMage'> \
        </div> \
    </div> \
    ");
    
    boxCreate("instructions");
    $("#instructions-content").html(" \
    <p>This is where instructions go.</p> \
    <p>You'll pick someone.</p> \
    <p>Pick someone below.</p> \
    ")
    boxCreate("fighter");
    charSelect(fighter);
    boxCreate("blackBelt");
    charSelect(blackBelt);
    boxCreate("redMage");
    charSelect(redMage);
    boxCreate("blackMage");
    charSelect(blackMage);
});

// Character selection function
function select(id, choice) {
    $("#" + id).remove();
    if (!player) {
        player = choice;
        opponents.splice(opponents.indexOf(player), 1);
        $("#instructions-content").html(" \
    <p>You have chosen " + player.name + ".</p> \
    <p>Choose your first opponent.</p> \
    ")
    }
    else {
        enemy = choice;
        opponents.splice(opponents.indexOf(enemy), 1);
        enemy.lvl = 3;
        $("#gamescreen").html(" \
        <div class='row'> \
            <div class='col-md-12' id='battle'> \
            </div> \
        </div> \
        <div class='row'> \
            <div class='col-md-4'> \
                <div class='row'> \
                    <div class='col-md-12' id='yourStats'> \
                    </div> \
                </div> \
                <div class='row'> \
                    <div class='col-md-12' id='enemyStats'> \
                    </div> \
                </div> \
            </div>\
            <div class='col-md-8'> \
                <div class='row'> \
                    <div class='col-md-12' id='attack'> \
                    </div> \
                </div> \
                <div class='row'> \
                    <div class='col-md-12' id='damage'> \
                    </div> \
                </div> \
            </div> \
        </div> \
        ");
        boxCreate("battle");
        boxCreate("yourStats");
        writeStats("yourStats", player);
        boxCreate("enemyStats");
        writeStats("enemyStats", enemy);
        $("#battle-content").html("<div id='background'></div>");
        boxCreate("attack");
        attack();

    }
}

function writeStats(who, char) {
    $("#" + who + "-content").html(" \
    <p>" + char.name + "</p> \
    <p>Lvl: " + char.lvl + "</p> \
    <p>HP: " + char.hp + "</p> \
    ");
}

function attack() {
    $("#attack-content").html("<p>Attack</p>");
    $("#attack-content").click(function(){
        
    });
}
