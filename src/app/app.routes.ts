
import { Routes } from '@angular/router';
import { FrontEndComponent } from '@pages/front-end/front-end.component';
import { SearchComponent } from '@pages/search/search.component';
import { ResultsComponent } from '@pages/results/results.component';

// guards

import { NotFoundComponent } from '@pages/not-found/not-found.component';
import { AboutComponent } from '@pages/about/about';
import { viewerComponent } from '@pages/viewer/viewer';
import { OperationComponent } from './pages/operation/operation.component';
import { SobreComponent } from '@pages/sobre/sobre';


export const ROUTES: Routes = [
    {path: '', component: FrontEndComponent,
        children: [
            {path: '', redirectTo: 'search', pathMatch: 'full'},
            {path: 'search', component: SearchComponent},
            {path: 'resultados/:search', component: ResultsComponent},
        ]
    },
    {path: '', component: AboutComponent,
        children: [
            {path: '', redirectTo: 'sobre', pathMatch: 'full'},
            {path: 'sobre', component: SobreComponent},
            {path: 'operation', component: OperationComponent},
        ]
    },
    {path: 'visualizar/:initials/:file', component: viewerComponent},
    {path: '**', component: NotFoundComponent}
];
