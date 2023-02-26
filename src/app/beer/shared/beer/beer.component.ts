import { Component, Input } from '@angular/core';
import { Beer } from 'src/app/models/beer';

@Component({
	selector: 'app-beer',
	templateUrl: './beer.component.html',
	styleUrls: ['./beer.component.scss']
})
export class BeerComponent {

	@Input() beer: Beer = new Beer({});
	ingredents: string = '';

	ngOnInit(): void {

		/** Create ingredents */
		if (this.beer && this.beer.ingredients) {
			let keys = Object.keys(this.beer.ingredients)
			keys.forEach(key => {
				this.ingredents += "  " + key;
			});
		}
	}
}
