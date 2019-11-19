import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  todos: string[] = [
    'Get eggs from grocery store',
    'Change the oil & filter in car',
    'Do the dishes',
    'Pay the utility bill'
  ];

  completed: string[] = [
    'Wash the car',
    'Respond to InMail'
  ];

  drop(event: CdkDragDrop<string[]>) {

    if (event.previousContainer === event.container) {

      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

    } else {

      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

    }
  }
}
