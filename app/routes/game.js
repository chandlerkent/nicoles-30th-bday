import Route from '@ember/routing/route';
import Object from '@ember/object'

export default Route.extend({
	model() {
		return {
			clues: [
				Object.create({ text: 'What you call pig in meal form.', isRevealed: false }),
				Object.create({ text: 'Kanye and Jay-Z song "Hard as a...".', isRevealed: false }),
				Object.create({ text: 'This word combined with a Scottish mythical lake creature means to be sick.', isRevealed: false }),
				Object.create({ text: 'Old-school abbreviation for the state where you were born.', isRevealed: false }),
				Object.create({ text: '"Not" backwards.', isRevealed: false }),
				Object.create({ text: '2,000 pounds = 1 ton.', isRevealed: false }),
				Object.create({ text: 'A ton of ill ham.', isRevealed: false }),
				Object.create({ text: 'H _ _ i _ t _ _', isRevealed: false })
			]
		}
	},

	setupController(controller, model) {
		controller.set('game', model);
	}
});
