import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clock = new Date();
  lastZone = null;

  timezone(zone) {
    this.clock = new Date();
    if(zone === 'MST'){
      this.clock.setHours(this.clock.getHours() + 1);
    } else if (zone === 'CST') {
      this.clock.setHours(this.clock.getHours() + 2);
    } else if (zone === 'EST') {
      this.clock.setHours(this.clock.getHours() + 3);
    }
    this.lastZone = zone;
  }

  clear() {
    this.clock = null;
    this.lastZone = null;
  }

}