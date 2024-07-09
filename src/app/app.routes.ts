import { Routes } from '@angular/router';
import { JobListComponent } from './components/job-list/job-list.component';
import { FavoriteListComponent } from './components/favorite-list/favorite-list.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';

export const routes: Routes = [
    { path: '', component: JobListComponent },
    { path: 'favorites', component: FavoriteListComponent },
    { path: 'job/:id', component: JobDetailComponent },
];
