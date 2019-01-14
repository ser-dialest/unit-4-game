// Four characters

function Warrior(name, hp, atk, cntr) {
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.cntr = cntr;
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

// var player = new Warrior("bob", 21, 6, 5);
// var enemy = new Warrior("sue", 1, 1, 1);

// enemy.counter(player);

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


// boxtop("box");
// $("#box-content").html("<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laboriosam repudiandae aut doloremque alias molestiae, odit sint pariatur atque porro autem dolorum officia, dignissimos delectus unde reiciendis aliquam facilis quam!</p>");

// setTimeout(function(){ $("#box").remove() }, 3000);

// $("section").append("<div id='container2' class='container'></div>");
// boxtop("container2");

// create opening page
// create char select screen
// BALANCE CHARACTERS
// Create enemy select screen
// create battle scene
// define attack function

// opening > char select > enemy select > battle > attack(repeat) > Loss or enemy select > battle



$(document).bind('keyup', function(){
    console.log("KEY");
    $("#gamescreen").append("<p> HELLO </p>");
    $(document).unbind('keyup');
    $("#gamescreen").css("background", "black");
    $("#gamescreen").html(" \
    <div class='row' \
        <div class='col-md-12' id='instructions'> \
        </div> \
    </div> \
    <div class='row'> \
        <div class='col-md-6 charSelect' id='fighter'> \
        </div> \
        <div class='col-md-6 charSelect' id='thief'> \
        </div> \
    </div> \
    <div class='row'> \
        <div class='col-md-6 charSelect' id='blackBelt'> \
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
    $("#fighter-content").html("<p>Fighter</p>");
    boxCreate("thief");
    $("#thief-content").html("<p>Thief</p>");
    boxCreate("blackBelt");
    $("#blackBelt-content").html("<p>Black Belt</p>");
    boxCreate("blackMage");
    $("#blackMage-content").html("<p>Black Mage</p>");
});