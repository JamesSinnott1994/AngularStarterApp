import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  }

}
