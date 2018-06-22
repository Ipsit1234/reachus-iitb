import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User('', '');
  err = false;

  submitted = false;

  onSubmit() {
    this.err = false;

    this.userService.userLogin(this.user)
      .subscribe(
        (res) => console.log(res),
        (err) => this.err = err.error
      );
  }

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

}
