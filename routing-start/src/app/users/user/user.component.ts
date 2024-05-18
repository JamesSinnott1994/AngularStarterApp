import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) {
    // Gets data from the currently loaded route
    // The ActiveRoute object we injected will give us access to the id passed in the URL => Selected User
  }

  ngOnInit() {
    // Load our user when our component gets initialized
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }
    // Only have access to "id" above if it's defined in our route parameters in app.modules.ts

    // Parameters might need to change at some time in the future, so this is an Observable
    // It subscribes to some event that might happen in the future
    this.route.params
      .subscribe(
        (params: Params) => {
          // Executed whenever the parameter changes
          this.user.id = params['id'];
          this.user.name = params['name'];
        }
      );
  }

}
