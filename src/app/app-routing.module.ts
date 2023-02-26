import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'beer',
		pathMatch: 'full'
	},
	{
		path: 'beer',
		loadChildren: () => import('./beer/beer.module').then(m => m.BeerModule)
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }


