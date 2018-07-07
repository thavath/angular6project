import { Student } from './student.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  studentList: AngularFireList<any>;
  selectedStudent: Student = new Student();
  constructor(private firebase: AngularFireDatabase) { }

  getData(){
    this.studentList = this.firebase.list('students');
    return this.studentList;
  }
  insertStudent(student: Student){
    this.studentList = this.firebase.list('students');
    this.studentList.push({
      id: student.id,
      english_name: student.english_name,
      khmer_name: student.khmer_name,
      japanese_name: student.japanese_name,
      nationality: student.nationality,
      place_of_birth: student.place_of_birth,
      card_id: student.card_id,
      khmer_salary: student.khmer_salary,
      education: student.education,
      date_of_birth: student.date_of_birth,
      age: student.age,
      gender: student.gender,
      state: student.state,
      blood_type: student.blood_type,
      vision: student.vision,
      interest: student.interest,
      year_of_experience: student.year_of_experience,
      married: student.married,
      position: student.position,
      behavior: student.behavior,
      went_to_japan: student.went_to_japan,
      japanese_conversation: student.japanese_conversation,
      height: student.height,
      weight: student.weight,
      current_address: student.current_address,
      reason: student.reason,
      arrang_money: student.arrang_money,
      sending_company: student.sending_company,
      japanese_level: student.japanese_level,
      field_of_work: student.field_of_work,
      date_to_japan: student.date_to_japan,
      prefecture: student.prefecture,
      zip_code: student.zip_code,
      address_in_japan: student.address_in_japan,
      grammer_level: student.grammer_level,
      idiom_level: student.idiom_level,
      conversation_level: student.conversation_level,
      life_attitude: student.life_attitude,
      course_type: student.course_type,
      last_peroid_of_study: student.last_peroid_of_study,
      university_name: student.university_name,
      subject_name: student.subject_name,
      teacher_name: student.teacher_name,
      book_type: student.book_type,
      start_date: student.start_date,
      end_date: student.end_date,
      status: student.state,
      description: student.description,
    
      admin_name: student.admin_name,
      email_address: student.email_address,
      phone_number: student.phone_number
    });
  }
  updateStudent(student: Student){
    this.studentList.update(student.$key, {
      id: student.id,
      english_name: student.english_name,
      khmer_name: student.khmer_name,
      japanese_name: student.japanese_name,
      nationality: student.nationality,
      place_of_birth: student.place_of_birth,
      card_id: student.card_id,
      khmer_salary: student.khmer_salary,
      education: student.education,
      date_of_birth: student.date_of_birth,
      age: student.age,
      gender: student.gender,
      state: student.state,
      blood_type: student.blood_type,
      vision: student.vision,
      interest: student.interest,
      year_of_experience: student.year_of_experience,
      married: student.married,
      position: student.position,
      behavior: student.behavior,
      went_to_japan: student.went_to_japan,
      japanese_conversation: student.japanese_conversation,
      height: student.height,
      weight: student.weight,
      current_address: student.current_address,
      reason: student.reason,
      arrang_money: student.arrang_money,
      sending_company: student.sending_company,
      japanese_level: student.japanese_level,
      field_of_work: student.field_of_work,
      date_to_japan: student.date_to_japan,
      prefecture: student.prefecture,
      zip_code: student.zip_code,
      address_in_japan: student.address_in_japan,
      grammer_level: student.grammer_level,
      idiom_level: student.idiom_level,
      conversation_level: student.conversation_level,
      life_attitude: student.life_attitude,
      course_type: student.course_type,
      last_peroid_of_study: student.last_peroid_of_study,
      university_name: student.university_name,
      subject_name: student.subject_name,
      teacher_name: student.teacher_name,
      book_type: student.book_type,
      start_date: student.start_date,
      end_date: student.end_date,
      status: student.state,
      description: student.description,

      admin_name: student.admin_name,
      email_address: student.email_address,
      phone_number: student.phone_number
    });
  }

  deleteStudent($key: string){
    this.studentList.remove($key);
  }
}