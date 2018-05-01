import Controller from '@ember/controller';
import { computed } from '@ember/object';

const answer = 'hamilton';

const wrongAnswers = [
	'That is very wrong.',
	'Try again.',
	'Oh no.',
	'You are wrong.'
];

export default Controller.extend({
	game: null,
	guess: null,

	revealedClues: computed('game.clues.@each.isRevealed', function () {
		return this.get('game.clues').filter(clue => clue.isRevealed).reverse();
	}),
	index: 0,
	cluesLeft: computed('index', 'game.clues.[]', function () {
		return this.get('game.clues').length - this.get('index');
	}),
	hasMoreClues: computed('cluesLeft', function () {
		return this.get('cluesLeft') > 0;
	}),

	getWrongAnswer() {
		return wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)];
	},

	actions: {
		revealClue() {
			let clue = this.get('game.clues').objectAt(this.get('index'));
			clue.set('isRevealed', true);
			this.set('index', this.get('index') + 1);
		},

		guess() {
			let guess = this.get('guess');

			if (guess.toLowerCase().indexOf(answer) > -1) {
				this.transitionToRoute('gift');
			} else {
				alert(this.getWrongAnswer());
			}
		}
	}
});
