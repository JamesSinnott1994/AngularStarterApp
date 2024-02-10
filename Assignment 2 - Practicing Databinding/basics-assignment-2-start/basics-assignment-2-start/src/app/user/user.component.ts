import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  username: String = "James";
  buttonIsDisabled: Boolean = false;

  getCanButtonBeClicked() {

    if (this.username.length > 0) {
      this.buttonIsDisabled = false;
    } else {
      this.buttonIsDisabled = true;
    }
    console.log(this.buttonIsDisabled);
    return this.buttonIsDisabled;

  }

  resetUsername() {
    this.username = "";
  }


}
