import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerListRoutingModule } from './beer-list.routing.module';
import { BeerComponentModule } from '../shared/beer-component.module';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [
		BeerListComponent
	],
	imports: [
		CommonModule,
		BeerListRoutingModule,
		BeerComponentModule,
		MatIconModule,
		MatButtonModule
	]
})
export class BeerListModule { }
