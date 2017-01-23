var mainState = {

	preload: function() {
		game.load.image('paddle', 'paddle.png');
		game.load.image('ball', 'ball.png');
	},

	create: function() {

		game.stage.backgroundColor = '#006534';
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.world.enableBody = true;

		// player
		this.player = game.add.sprite(game.width/2, game.height-40, 'paddle');
		this.player.anchor.setTo(0.5);
		this.player.body.collideWorldBounds = true;
		this.player.body.immovable = true;
		this.left = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		this.right = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);

		// ball
		this.ball = game.add.sprite(game.width/2, game.height/2, 'ball');
		this.ball.anchor.setTo(0.5);
		this.ball.body.collideWorldBounds = true;
		this.ball.body.velocity.x = 300;
		this.ball.body.velocity.y = 300;
		this.ball.body.bounce.setTo(1);

	},

	update: function() {

		game.physics.arcade.collide(this.player, this.ball);


		// bouger le joueur
		if (this.left.isDown) {
			this.player.body.velocity.x = -300;
		} else if (this.right.isDown) {
			this.player.body.velocity.x = 300;
		} else {
			this.player.body.velocity.x = 0;
		}


	}

};

var game = new Phaser.Game(360, 550);
game.state.add('main', mainState);
game.state.start('main');
