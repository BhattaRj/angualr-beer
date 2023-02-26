import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        loadChildren: () => import('./beer-list/beer-list.module').then(m => m.BeerListModule)
    },
    {
        path: 'my-beer',
        loadChildren: () => import('./my-beer/my-beer.module').then(m => m.MyBeerModule)
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BeerRoutingModule { }


