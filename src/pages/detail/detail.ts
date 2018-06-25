import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CourseProvider } from '../../providers/course/course';
import { Course } from '../../models/Course';
/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  id;
  course:Course;

  courseOnEdit:Course = {
    name: ''
  };

  isEdit:boolean=false;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public courseProvider: CourseProvider,
    public alertCtrl: AlertController) {
    this.id = this.navParams.get('id');
    console.log(this.id);
    this.getCourse();
  }

  ionViewDidLoad() {

  }
  getCourse(){
    this.courseProvider.getCourse(this.id).subscribe(c => {
      this.course = c;
      this.courseOnEdit = c;
      console.log(this.course);
      console.log(this.courseOnEdit);
    });
  }
  updateCourse(){
    this.isEdit = true;
  }
  onSubmitUpdate() {
    this.courseProvider.updateCourse(this.id, this.courseOnEdit);
        this.isEdit = false;
    /*this.courseProvider.addCourse({name:value});*/
  }

  deleteCourse(){
    let alert = this.alertCtrl.create({
      title: 'Confirm course deletion',
      message: 'Do you want to delete this course?',
      buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('cancel clicked');
        }
      },
      {
        text: 'Delete',
        role: 'destructive',
        handler: () => {
          console.log('delete');
          this.courseProvider.deleteCourse(this.id);
          this.goBack();
        }
      }]
    });
    alert.present();

  }
  goBack(){
    this.navCtrl.pop();
  }
}
