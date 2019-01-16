import { Routes } from '@angular/router';
import { FrontEndComponent } from '@pages/front-end/front-end.component';
import { SearchComponent } from '@pages/search/search.component';
import { ResultsComponent } from '@pages/results/results.component';

// guards

import { NotFoundComponent } from '@pages/not-found/not-found.component';
import { AboutComponent } from '@pages/about/about';
import { viewerComponent } from '@pages/viewer/viewer';

export const ROUTES: Routes = [
    {path: '', component: FrontEndComponent,
        children: [
            {path: '', redirectTo: 'search', pathMatch: 'full'},
            {path: 'search', component: SearchComponent},
            {path: 'resultados/:search', component: ResultsComponent},
        ]
    },
    {path: 'sobre', component: AboutComponent},
    {path: 'visualizar', component: viewerComponent},
    {path: '**', component: NotFoundComponent}
];
