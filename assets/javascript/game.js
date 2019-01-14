// Start the music
$("audio#prelude")[0].play();

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
    <p>These are the valiant four who have answered the challenge.</p> \
    <p>Which one are you?</p> \
    ");
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
                <div class='row'> \
                    <div class='col-md-12' id='fatality'> \
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
        $("#battle-content").html(" \
        <div id='background'></div> \
        <img src=" + enemy.image + " alt=" + enemy.name + " id='foe'/> \
        <img src=" + player.image + " alt=" + player.name + " id='you'/> \
        ");
        boxCreate("attack");
        boxCreate("damage");
        boxCreate("fatality");
        $("audio#prelude")[0].pause();
        $("audio#prelude")[0].currentTime = 0;
        $("audio#fanfare")[0].pause();
        $("audio#fanfare")[0].currentTime = 0;
        $("audio#battleBGM")[0].play();
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
    $("#damage").css("display", "none");
    $("#attack").css("display", "none");
    $("#fatality").css("display", "none");
    setTimeout(function() {
        $("#attack-content").html("<p>Attack</p>");
        $("#attack").css("display", "block");
    }, 250);
    $("#attack-content").bind('click', function(){
        $("#attack-content").unbind('click');
        $("#attack").css("display", "none");
        console.log("Click");
        //attack effect
        setTimeout(function() {
            $("audio#hit")[0].play();
            requestAnimationFrame(shaking);
            enemy.hp = enemy.hp - player.atk*player.lvl;
            if (enemy.hp < 0) {enemy.hp = 0};
            console.log("enemy hit");
            $("#attack-content").html("<p>You attack " + enemy.name + "!</p>");
            $("#attack").css("display", "block");
        }, 500);
        setTimeout(function() {
            $("#damage-content").html("<p>" + player.atk*player.lvl + " DMG!</p>");
            $("#damage").css("display", "block");
            player.lvl++;
            console.log("level up");
            writeStats("enemyStats", enemy);
            writeStats("yourStats", player);
        }, 750);
        setTimeout(function(){
            if (enemy.hp > 0) {
                $("audio#hit")[0].play();
                requestAnimationFrame(shaking);
                $("#attack").css("display", "none");
                $("#damage").css("display", "none");
                //counter attack effect
                player.hp = player.hp - enemy.atk*enemy.lvl;
                console.log("player hit");
                setTimeout(function(){          
                    $("#attack-content").html("<p>" + enemy.name + " attacks you!</p>");
                    $("#attack").css("display", "block");
                }, 500);
                setTimeout(function(){          
                    $("#damage-content").html("<p>" + enemy.atk*enemy.lvl + " DMG!</p>");
                    $("#damage").css("display", "block");
                    if (player.hp < 0) {player.hp = 0};
                    writeStats("yourStats", player);
                }, 750);
                setTimeout(function(){
                    if (player.hp > 0) {         
                        attack()
                    }
                    else {
                        $("audio#battleBGM")[0].pause();
                        $("audio#defeat")[0].play();
                        $("#fatality-content").html("<p>" + player.name + " is defeated</p>");    
                        $("#fatality").css("display", "block");
                    }
                }, 2000);
            }
            else {
            $("#fatality-content").html("<p>" + enemy.name + " is defeated.</p>");    
            $("#fatality").css("display", "block");
            setTimeout(function(){
                $("audio#battleBGM")[0].pause();
                $("audio#battleBGM")[0].currentTime = 0;
                $("audio#fanfare")[0].play();
                if (opponents[0]) {nextRound(opponents)}
                else {victory(player)};
            }, 2000);              
            }
        }, 2000);        
    });
}

function nextRound(list) {
    $("#gamescreen").css("background", "black");
    $("#gamescreen").html(" \
    <div class='row'> \
        <div class='col-md-12' id='instructions'> \
        </div> \
    </div> \
    <div class='row' id='characters'> \
    </div> \
    ");
    boxCreate("instructions");
    $("#instructions-content").html(" \
    <p>Congratulations!</p> \
    <p>The next round begins.</p> \
    <p>Choose your opponent.</p> \
    ")
    for (i=0; i < list.length; i++) {
        $("#characters").append(" \
        <div class='col-md-6 charSelect' id="+ list[i].id + "> \
        </div> \
        ");
        boxCreate(list[i].id);
        charSelect(list[i]);
    }
}

function victory(player) {
    $("#gamescreen").html(" \
    <div class='row'> \
        <img src='assets/images/CutScene3.png' alt='Final Fantasy Departure' id='departure' /> \
        <div class='col-md-8' id='finale'> \
        </div> \
    </div> \
    ");
    boxCreate("finale");
    $("#finale-content").html(" \
    <p>Well done, " + player.name + "!</p> \
    <br /> \
    <p>You have proven yourself to be the strongest of the Light Warriors.</p> \
    <br /> \
    <p>Thank you for playing!</p> \
    ");
}

var t=0;
var shake = [[0,0],[-6,-6],[-6,0],[0,-3],[-6,0],[0,-6],[0,0]];
function shaking(timestamp) {
    if ((t/2) < shake.length){
        if (t % 2 === 0) {
            $("#gamescreen").css("top", shake[t/2][0]);
            $("#gamescreen").css("left", shake[t/2][1]);
        };
        t++;
        requestAnimationFrame(shaking);
    }
    else {t = 0};
}