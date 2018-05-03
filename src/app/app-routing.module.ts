import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';



const appRoutes: Routes = [
    // {
    //     path: '',
    //     loadChildren: './layout/layout.module#LayoutModule'
        // , canActivate: [AuthGuardService]
    //  },
  //  { path: '', component: AppComponent, pathMatch: 'full' },
    { path: 'bootstrap', loadChildren: './bootstrap/bootstrap.module#BootstrapModule' },
    { path: 'material', loadChildren: './material/material.module#MaterialModule' },
    { path: 'blog', loadChildren: './blog/blog.module#BlogModule' },
    { path: '**', redirectTo: 'not-found' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' }
];

@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule]
})

export class AppRoutingModule {
}
