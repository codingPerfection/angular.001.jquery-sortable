import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // directive letting know component sort happened
  onSort (data:any){
    console.log("sorted data:", data);
    console.log("whole data:",this.dataToSort);
    console.log("------------------------");
  }

  // dummy data for our sort testing
  dataToSort:any = [
    {
      name: 'Category 1',
      children: [
        { name: 'Item 1' },
        {
          name: 'item 2', children: [
            'SubItem 1',
            'SubItem 2'
          ]
        }
      ]
    },
    {
      name: 'Category 2', children: [
        {
          name: 'Item 3', children: [
            'SubItem 1',
            'SubItem 2'
          ]
        },
        { name: 'Item 4' },
        { name: 'Item 5' },
      ]
    }
  ];
}
