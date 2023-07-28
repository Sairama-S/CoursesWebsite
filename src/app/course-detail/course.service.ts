import { Injectable } from '@angular/core';
import { KCourse } from '../home/course.details';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses: KCourse[] = [
    {
      "courseId": 1,
      "courseName": "Intro. to HTML",
      "numEnrolled": 10000,
      "imageUrl": "../../assets/img/html5.webp",
      "courseBriefDesc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, et est? Aliquid voluptates et eius tempore debitis quasi magni ducimus?",
      "courseDetailDesc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam repellat, non eum quisquam sit corrupti corporis officiis similique vitae minima nemo doloremque aliquam maiores cum perferendis veniam ut eius, quo odio asperiores dicta, voluptates culpa. Autem quis, itaque molestiae ad animi rem numquam aperiam voluptate beatae libero distinctio quae laborum obcaecati illum quia eligendi nisi. Id maxime consectetur tempore perferendis accusamus libero, voluptate commodi doloremque amet iste veritatis vitae, magnam quisquam expedita omnis laboriosam fuga harum. Dolores veniam repudiandae accusamus impedit at! Eius, nulla. Non odio deserunt rem, accusamus hic adipisci! Tenetur voluptas dolor ex ipsa ratione ab architecto pariatur?"
    },
    {
      "courseId": 2,
      "courseName": "Intro. to CSS",
      "numEnrolled": 8000,
      "imageUrl": "../../assets/img/css3.avif",
      "courseBriefDesc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, et est? Aliquid voluptates et eius tempore debitis quasi magni ducimus?",
      "courseDetailDesc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam repellat, non eum quisquam sit corrupti corporis officiis similique vitae minima nemo doloremque aliquam maiores cum perferendis veniam ut eius, quo odio asperiores dicta, voluptates culpa. Autem quis, itaque molestiae ad animi rem numquam aperiam voluptate beatae libero distinctio quae laborum obcaecati illum quia eligendi nisi. Id maxime consectetur tempore perferendis accusamus libero, voluptate commodi doloremque amet iste veritatis vitae, magnam quisquam expedita omnis laboriosam fuga harum. Dolores veniam repudiandae accusamus impedit at! Eius, nulla. Non odio deserunt rem, accusamus hic adipisci! Tenetur voluptas dolor ex ipsa ratione ab architecto pariatur?"
    },
    {
      "courseId": 3,
      "courseName": "Intro. to JavaScript",
      "numEnrolled": 6000,
      "imageUrl": "../../assets/img/js.webp",
      "courseBriefDesc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, et est? Aliquid voluptates et eius tempore debitis quasi magni ducimus?",
      "courseDetailDesc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam repellat, non eum quisquam sit corrupti corporis officiis similique vitae minima nemo doloremque aliquam maiores cum perferendis veniam ut eius, quo odio asperiores dicta, voluptates culpa. Autem quis, itaque molestiae ad animi rem numquam aperiam voluptate beatae libero distinctio quae laborum obcaecati illum quia eligendi nisi. Id maxime consectetur tempore perferendis accusamus libero, voluptate commodi doloremque amet iste veritatis vitae, magnam quisquam expedita omnis laboriosam fuga harum. Dolores veniam repudiandae accusamus impedit at! Eius, nulla. Non odio deserunt rem, accusamus hic adipisci! Tenetur voluptas dolor ex ipsa ratione ab architecto pariatur?"
    },
    {
      "courseId": 4,
      "courseName": "Intro. to TypeScript",
      "numEnrolled": 4000,
      "imageUrl": "../../assets/img/typescript.webp",
      "courseBriefDesc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, et est? Aliquid voluptates et eius tempore debitis quasi magni ducimus?",
      "courseDetailDesc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam repellat, non eum quisquam sit corrupti corporis officiis similique vitae minima nemo doloremque aliquam maiores cum perferendis veniam ut eius, quo odio asperiores dicta, voluptates culpa. Autem quis, itaque molestiae ad animi rem numquam aperiam voluptate beatae libero distinctio quae laborum obcaecati illum quia eligendi nisi. Id maxime consectetur tempore perferendis accusamus libero, voluptate commodi doloremque amet iste veritatis vitae, magnam quisquam expedita omnis laboriosam fuga harum. Dolores veniam repudiandae accusamus impedit at! Eius, nulla. Non odio deserunt rem, accusamus hic adipisci! Tenetur voluptas dolor ex ipsa ratione ab architecto pariatur?"
    },
    {
      "courseId": 5,
      "courseName": "Intro. to Angular",
      "numEnrolled": 2000,
      "imageUrl": "../../assets/img/angular.webp",
      "courseBriefDesc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, et est? Aliquid voluptates et eius tempore debitis quasi magni ducimus?",
      "courseDetailDesc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam repellat, non eum quisquam sit corrupti corporis officiis similique vitae minima nemo doloremque aliquam maiores cum perferendis veniam ut eius, quo odio asperiores dicta, voluptates culpa. Autem quis, itaque molestiae ad animi rem numquam aperiam voluptate beatae libero distinctio quae laborum obcaecati illum quia eligendi nisi. Id maxime consectetur tempore perferendis accusamus libero, voluptate commodi doloremque amet iste veritatis vitae, magnam quisquam expedita omnis laboriosam fuga harum. Dolores veniam repudiandae accusamus impedit at! Eius, nulla. Non odio deserunt rem, accusamus hic adipisci! Tenetur voluptas dolor ex ipsa ratione ab architecto pariatur?"
    },
    {
      "courseId": 6,
      "courseName": "Intro. to C#",
      "numEnrolled": 14,
      "imageUrl": "../../assets/img/csharp.webp",
      "courseBriefDesc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, et est? Aliquid voluptates et eius tempore debitis quasi magni ducimus?",
      "courseDetailDesc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam repellat, non eum quisquam sit corrupti corporis officiis similique vitae minima nemo doloremque aliquam maiores cum perferendis veniam ut eius, quo odio asperiores dicta, voluptates culpa. Autem quis, itaque molestiae ad animi rem numquam aperiam voluptate beatae libero distinctio quae laborum obcaecati illum quia eligendi nisi. Id maxime consectetur tempore perferendis accusamus libero, voluptate commodi doloremque amet iste veritatis vitae, magnam quisquam expedita omnis laboriosam fuga harum. Dolores veniam repudiandae accusamus impedit at! Eius, nulla. Non odio deserunt rem, accusamus hic adipisci! Tenetur voluptas dolor ex ipsa ratione ab architecto pariatur?"
    }
  ]

  currentId: number = 1; 

  constructor() { }
}
