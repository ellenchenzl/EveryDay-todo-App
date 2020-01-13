import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiaryComponent } from './diary/diary.component';
import { HomeComponent } from './home/home.component';



const appRoutes:Routes=[
  {path:'App',component: AppComponent}, 
  {path:'Diary',component: DiaryComponent},
  ];

@NgModule({
  declarations: [
    AppComponent,
    DiaryComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  
    BrowserModule,
    AppRoutingModule,
  
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
