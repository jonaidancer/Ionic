import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProjectsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage {
    projects:any= [
      {
        name: 'Emerson Electric',
        description: 'fart is wahstasiylg'
      },
      {
          name:'Try Jquery',
          description: 'ohif;kldhfj;ljh',
          image:'http://riotfest.org/wp-content/uploads/2017/03/fart-spongebob.jpg',
      
      },
      {
        name:'Webpage Portfolio',
        description:'jdhkjshksjshksj'

      }
    ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectsPage');
  }

  test(project) {

    console.log(project);
   }
  
}
