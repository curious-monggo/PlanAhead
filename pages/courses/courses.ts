import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Course } from '../../models/Course';
import { CourseProvider } from '../../providers/course/course';
/**
 * Generated class for the CoursesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html',
})
export class CoursesPage {

  courses: any[];
  course = {
	title_short: '',
	title_long: '',
	image_url: '',
	description: ''
  };
  paramsID:Object;
  pushToDetailPage:any;
  id:string;

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams, 
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
