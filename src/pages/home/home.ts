import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { DetailPage } from '../../pages/detail/detail';
import { Course } from '../../models/Course';
import { CourseProvider } from '../../providers/course/course';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  courses: any[];
  course = {
    name: ''
  };
  paramsID:Object;
  pushToDetailPage:any;
  id:string;

  constructor(public navCtrl: NavController,
    public courseProvider: CourseProvider) {
    this.getCourses();

  }

  navigateToDetailPage(id){
  	this.navCtrl.push('DetailPage', {
      id: id
    });
/*    this.pushToDetailPage = DetailPage;
    this.paramsID = { id: id};*/
    console.log(id);
  }
  test(name:string){
  	console.log(name);
  }

  getCourses(){
    this.courseProvider.getCourses().subscribe(c => {
      this.courses = c;
     // console.log('okay', this.courses);
    });
  }

/*  addCourse(name){
    this.courseProvider.addCourse({name:name});
  }*/

  onSubmitAdd() {
    this.courseProvider.addCourse(this.course);
    /*this.courseProvider.addCourse({name:value});*/
  }
}
