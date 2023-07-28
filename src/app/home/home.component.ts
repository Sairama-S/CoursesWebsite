import { Component } from '@angular/core';
import { KCourse } from './course.details';
import { CourseService } from '../course-detail/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  imgWidth: number = 200;
  imgHeight: number = 200;
  private _searchTxt: string = "";  
  
  constructor(public courseService: CourseService) {}

  searchedCourses: KCourse[] = this.courseService.courses;  

  public get searchTxt() : string {
    return this._searchTxt
  }

  public set searchTxt(value : string) {
    this._searchTxt = value;
    this.searchedCourses = this.Searching(value);
  }

  Searching(searchBy: string): any {
    searchBy = searchBy.toLocaleLowerCase();
    return this.courseService.courses.filter(course=>course.courseName.toLocaleLowerCase().includes(searchBy));
  }

  // public CourseDetails(id: string) {
    
  // }
}
