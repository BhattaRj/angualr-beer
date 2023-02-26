import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyBearListComponent } from './my-bear-list/my-bear-list.component';

const routes: Routes = [
    {
        path: '',
        component: MyBearListComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyBeerRoutingModule { }


