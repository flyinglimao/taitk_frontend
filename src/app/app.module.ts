import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { NewsComponent } from './news/news.component';
import { NewsInfoComponent } from './news/info/info.component';
import { FormComponent } from './tasks/form/form.component';
import { InfoComponent } from './tasks/info/info.component';
import { TasksComponent } from './tasks/tasks.component';
import { AlgorithmsComponent } from './algorithms/algorithms.component';
import { NewsPostComponent } from './news/post/post.component';
import { ItemComponent } from './tasks/item/item.component';
import { LoginComponent } from './login/login.component';
import { AlgorithmFormComponent } from './algorithms/form/form.component';
import { FormsModule } from '@angular/forms';
import { AlgorithmExampleComponent } from './algorithms/example/example.component';
import { Dataset2019Component } from './dataset2019/dataset2019.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    NewsComponent,
    NewsPostComponent,
    NewsInfoComponent,
    FormComponent,
    InfoComponent,
    TasksComponent,
    AlgorithmsComponent,
    AlgorithmFormComponent,
    ItemComponent,
    LoginComponent,
    AlgorithmExampleComponent,
    Dataset2019Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
