import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { RouterModule } from '@angular/router';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CourseDetailComponent,
    MyCoursesComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'course-detail', component: CourseDetailComponent},
      {path: 'home', component: HomeComponent},
      {path: 'my-courses', component: MyCoursesComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
