import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Student} from '../../models/student';
import { StudentService } from '../../services/student';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList implements OnInit{
  students: Student[] = [];

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentService.getAllStudents().subscribe(data => {
      this.students = data;
    });

  }
  addStudent(): void {
    this.router.navigate(['/add']);
  }

  editStudent(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  deleteStudent(id: number): void {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentService.deleteStudent(id).subscribe(() => {
        this.loadStudents();
      });

}
}
}
