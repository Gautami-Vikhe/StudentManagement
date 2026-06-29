import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-form.html',
  styleUrl: './student-form.css'
})
export class StudentForm implements OnInit {

  student: Student = {
    name: '',
    email: '',
    phone: '',
    course: ''
  };

  isEditMode = false;
  studentId!: number;
  submitted = false;

  constructor(
    private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.studentId = this.route.snapshot.params['id'];
    if (this.studentId) {
      this.isEditMode = true;
      this.studentService.getStudentById(this.studentId).subscribe(data => {
        this.student = data;
      });
    }
  }

  saveStudent(): void {
    this.submitted = true;

    if (!this.student.name || !this.student.email) {
      return;
    }

    if (this.isEditMode) {
      this.studentService.updateStudent(this.studentId, this.student).subscribe({
        next: () => {
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/students']);
          });
        },
        error: (err) => console.error(err)
      });
    } else {
      this.studentService.addStudent(this.student).subscribe({
        next: () => {
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/students']);
          });
        },
        error: (err) => console.error(err)
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/students']);
  }
}