import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   title: String;
  names: any;
  selectedAll: any;
  singleSelected : any;
  buttonIndicator : any;
   constructor() {
    this.title = "Select all/Deselect all checkbox - Angular 2";
	this.buttonStatus = false;
	
	//Fetch data and set users into names array
    this.names = [
      { name: 'Prashobh', selected: false },
      { name: 'Abraham', selected: false },
      { name: 'Anil', selected: false },
      { name: 'Sam', selected: false },
      { name: 'Natasha', selected: false },
      { name: 'Marry', selected: false },
      { name: 'Zian', selected: false },
      { name: 'karan', selected: false },
    ]
	
    
}

selectAll() {
    for (var i = 0; i < this.names.length; i++) {
      this.names[i].selected = this.selectedAll;
    }
  }
  checkIfAllSelected() {
    this.selectedAll = this.names.every(function(item:any) {0
        return item.selected == true;
      })
  }
  
  singleSelected(){
	  for (var i = 0; i < this.names.length; i++) 
		if(this.names[i].selected == true){
			return true;
		}
  return false;
  }
  toggleButton(){
  if(!(this.selectedAll == true))
  return buutonStatus = true;
  }
  
  ngOnInit() {
    $(document).foundation();
  }
}
