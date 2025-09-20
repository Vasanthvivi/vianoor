import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        loadComponent: () =>
            import('./pages/landing/landing.component').then(
                (_) => _.LandingComponent
            ),
        pathMatch: 'prefix',
    },
    {
        path: 'homes',
        loadComponent: () =>
            import('./pages/homes/homes.component').then(
                (_) => _.HomesComponent
            ),
        pathMatch: 'prefix',
        children: [

        ]
    },
    {
        path: 'property',
        loadComponent: () =>
            import('./pages/property/property.component').then(
                (_) => _.PropertyComponent
            ),
        pathMatch: 'prefix',
    },
    {
        path: 'contact',
        loadComponent: () =>
            import('./pages/contact/contact.component').then(
                (_) => _.ContactComponent
            ),
        pathMatch: 'prefix',
    },
    {
        path: 'about',
        loadComponent: () =>
            import('./pages/about/about.component').then(
                (_) => _.AboutComponent
            ),
        pathMatch: 'prefix',
    },
    { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
