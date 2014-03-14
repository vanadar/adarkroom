var Score = {

	name : 'Score',

	options : {},

	init : function(options) {
		this.options = $.extend(this.options, options);
	},

	calculateScore : function() {
		var scoreUnadded = Prestige.getStores(false);
		var fullScore = 0;
		fullScore = fullScore + scoreUnadded[0] * 1;
		fullScore = fullScore + scoreUnadded[1] * 1.5;
		fullScore = fullScore + scoreUnadded[2] * 1;
		fullScore = fullScore + scoreUnadded[3] * 2;
		fullScore = fullScore + scoreUnadded[4] * 2;
		fullScore = fullScore + scoreUnadded[5] * 3;
		fullScore = fullScore + scoreUnadded[6] * 3;
		fullScore = fullScore + scoreUnadded[7] * 2;
		fullScore = fullScore + scoreUnadded[8] * 2;
		fullScore = fullScore + scoreUnadded[9] * 2;
		fullScore = fullScore + scoreUnadded[10] * 2;
		fullScore = fullScore + scoreUnadded[11] * 1.5;
		fullScore = fullScore + scoreUnadded[12] * 1;
		fullScore = fullScore + scoreUnadded[13] * 1;
		fullScore = fullScore + scoreUnadded[14] * 10;
		fullScore = fullScore + scoreUnadded[15] * 30;
		fullScore = fullScore + scoreUnadded[16] * 50;
		fullScore = fullScore + scoreUnadded[17] * 100;
		fullScore = fullScore + scoreUnadded[18] * 150;
		fullScore = fullScore + scoreUnadded[19] * 150;
		fullScore = fullScore + scoreUnadded[20] * 3;
		fullScore = fullScore + scoreUnadded[21] * 3;
		fullScore = fullScore + scoreUnadded[22] * 5;
		fullScore = fullScore + scoreUnadded[23] * 4;
		fullScore = fullScore + $SM.get('stores["alien alloy"]', true) * 10;
		fullScore = fullScore + Ship.getMaxHull() * 50;
		return Math.floor(fullScore);
	},

	save: function() {
		$SM.set('playStats.score', Score.calculateScore());
	},

	totalScore : function() {
		return $SM.get('previous.score', true) + Score.calculateScore();
	},
	
	share: function(score) {
		Events.startEvent({
			title: _('Share'),
			scenes: {
				start: {
					text: [_('share your score with your friends.')],
					buttons: {
						'facebook': {
							text: _('facebook'),
							nextScene: 'end',
							onChoose: function() {	
								window.open('https://www.facebook.com/sharer/sharer.php?u=' + Engine.SITE_URL, 'sharer', 'width=626,height=436,location=no,menubar=no,resizable=no,scrollbars=no,status=no,toolbar=no');
							}
						},
						'google': {
							text:_('google+'),
							nextScene: 'end',
							onChoose: function() {
								window.open('https://plus.google.com/share?url=' + Engine.SITE_URL, 'sharer', 'width=480,height=436,location=no,menubar=no,resizable=no,scrollbars=no,status=no,toolbar=no');
							}
						},
						'twitter': {
							text: _('twitter'),
							onChoose: function() {
								window.open('https://twitter.com/intent/tweet?text=scored%20'+score+'%20points%20%on20A%20Dark%20Room&url=' + Engine.SITE_URL, 'sharer', 'width=660,height=260,location=no,menubar=no,resizable=no,scrollbars=yes,status=no,toolbar=no');
							},
							nextScene: 'end'
						},
						'close': {
							text: _('close'),
							nextScene: 'end'
						}
					}
				}
			}
		}, {width: '400px'});
	}
};