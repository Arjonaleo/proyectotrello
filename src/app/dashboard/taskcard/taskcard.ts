import { Component } from '@angular/core';

@Component({
  selector: 'app-taskcard',
  templateUrl: './taskcard.html',
  styleUrls: ['./taskcard.scss']
})
export class TaskCard {
  task = { title: 'Sample Task', description: 'Do this', assigned: 'Me', status: 'Not Started' };
}