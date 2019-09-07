import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component'
import { AlgorithmsComponent } from './algorithms/algorithms.component';
import { TasksComponent } from './tasks/tasks.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { NewsPostComponent } from './news/post/post.component';
import { Dataset2019Component } from './dataset2019/dataset2019.component';

const routes: Routes = [
  { path: 'dataset2019', component: Dataset2019Component },
  { path: 'algorithms', component: AlgorithmsComponent },
  { path: 'algorithms/:algorithm', component: AlgorithmsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'news/:post', component: NewsPostComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'news', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
