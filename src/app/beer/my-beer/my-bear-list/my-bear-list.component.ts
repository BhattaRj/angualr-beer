import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Beer, BeerFilter } from 'src/app/models/beer';
import { BeerService } from 'src/app/services/beer.service';
import { BearDialogComponent } from '../bear-dialog/bear-dialog.component';

@Component({
	selector: 'app-my-bear-list',
	templateUrl: './my-bear-list.component.html',
	styleUrls: ['./my-bear-list.component.scss']
})
export class MyBearListComponent {

	beers: Beer[] = [];
	loading: boolean = false;
	beerFilter: BeerFilter = new BeerFilter({});

	constructor(
		private beerService: BeerService,
		private dialog: MatDialog,
	) { }

	ngOnInit(): void {
	}

	addBeer() {
		let dialogConfig: any = {
			disableClose: true,
			width: "800px",
			autoFocus: false
		}

		let postJobDialogRef = this.dialog.open(BearDialogComponent, dialogConfig);

		postJobDialogRef.afterClosed()
			.subscribe(result => {
				if (result) {
					this.beers.unshift(result);
				}
			});
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
