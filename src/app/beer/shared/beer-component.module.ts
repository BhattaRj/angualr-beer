import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerComponent } from './beer/beer.component';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
	declarations: [
		BeerComponent
	],
	imports: [
		CommonModule,
		MatCardModule,
		MatTooltipModule
	],
	exports: [
		BeerComponent,
	]
})
export class BeerComponentModule { }