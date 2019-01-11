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

