import { MessegesResolver } from './_resolvers/messeges.resolver';
import { ListsResolver } from './_resolvers/lists.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { AuthGuard } from './_guards/auth.guard';
import { Routes } from '@angular/router';
import { ListsComponent } from './lists/lists.component';
import { MessegesComponent } from './messeges/messeges.component';
import { MemberListComponent } from './members/member-list/member-list.component';
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
        resolve: {users: MemberListResolver}
      },
      {
        path: 'members/:id',
        component: MemberDetailComponent,
        resolve: {user: MemberDetailResolver}
      },
      {
        path: 'member/edit',
        component: MemberEditComponent,
        resolve: { user : MemberEditResolver },
        canDeactivate: [ PreventUnsavedChanges ]
      },
      {
        path: 'messages',
        component: MessegesComponent,
        resolve: {messages: MessegesResolver}
      },
      {
        path: 'lists',
        component: ListsComponent,
        resolve: {users : ListsResolver}
      }
    ]
  },

  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
