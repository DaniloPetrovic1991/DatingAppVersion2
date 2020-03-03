import { AuthGuard } from './_guards/auth.guard';
import { Routes } from '@angular/router';
import { ListsComponent } from './lists/lists.component';
import { MessegesComponent } from './messeges/messeges.component';
import { MemberListComponent } from './member-list/member-list.component';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'members',
        component: MemberListComponent,
      },
      {
        path: 'messages',
        component: MessegesComponent
      },
      {
        path: 'lists',
        component: ListsComponent
      }
    ]
  },

  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
