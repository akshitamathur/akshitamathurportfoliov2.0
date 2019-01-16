import { Component, AfterViewInit } from '@angular/core';
import {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';


// import * as Chart from 'chart.js';

@Component({
  selector: "[app-experience], [ngb-progressbar]", 
  templateUrl: './experience.component.html',
  providers: [NgbProgressbarConfig],
  styleUrls: ['./experience.component.css']
})



export class ExperienceComponent{
	constructor(config: NgbProgressbarConfig) {
    // customize default values of progress bars used by this component tree
    config.max = 100;
    config.striped = true;
    config.animated = true;
    // config.type = 'success';
    config.height = '20px';
  }



  
  
   
  }




 


