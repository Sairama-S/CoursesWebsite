import { Component } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent {
  constructor(private courseService: CourseService) {}

  courseIndex: number = this.courseService.currentId - 1;

  title: string = this.courseService.courses[this.courseIndex].courseName;
  id: number = this.courseService.courses[this.courseIndex].courseId;
  detailDesc: string = this.courseService.courses[this.courseIndex].courseDetailDesc;
  imageUrl: string = this.courseService.courses[this.courseIndex].imageUrl;
  numEnrolled: number = this.courseService.courses[this.courseIndex].numEnrolled;


}
