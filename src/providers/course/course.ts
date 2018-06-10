/*import { HttpClient } from '@angular/common/http';*/
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { Course } from '../../models/Course';
/*
  Generated class for the CourseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CourseProvider {

	//list variables
	coursesRef: AngularFireList<any>;
	courses: Observable<Course[]>;//added client model

	//object variables
	courseRef: AngularFireObject<any>;
	course: Observable<Course>;

  constructor(
  	/*public http: HttpClient,*/
  	public db: AngularFireDatabase) {
    
    this.coursesRef = db.list('courses');

/*    this.courseRef = db.object('course');
    this.course = this.courseRef.valueChanges();*/

    //use snapshot changes.map to store key
    this.courses = this.coursesRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  getCourses(){
  	return this.courses;
  }

  addCourse(course:Course){
  	this.coursesRef.push(course);
  }

  getCourse(id:string){
    this.courseRef = this.db.object('/courses/'+id);
    this.course = this.courseRef.valueChanges();
  	return this.course;
  }
}
