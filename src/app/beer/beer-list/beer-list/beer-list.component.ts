import { Component } from '@angular/core';
import { Beer, BeerFilter } from 'src/app/models/beer';
import { BeerService } from 'src/app/services/beer.service';

@Component({
	selector: 'app-beer-list',
	templateUrl: './beer-list.component.html',
	styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent {

	beers: Beer[] = [];
	loading: boolean = false;
	beerFilter: BeerFilter = new BeerFilter({});

	constructor(
		private beerService: BeerService
	) {

	}

	ngOnInit(): void {
		this.list(this.beerFilter);
	}

	list(query: BeerFilter) {
		this.loading = true;
		this.beerService.list(query)
			.subscribe({
				next: (result => {
					this.beers = [...this.beers, ...result];
					this.loading = false;
				}),
				error: (error: Error) => {
					this.loading = false;
				}
			})
	}

	loadMore() {
		this.beerFilter.page = 2;
		this.list(this.beerFilter);
	}
}
