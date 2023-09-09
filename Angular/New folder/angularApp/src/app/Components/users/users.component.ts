// users.component.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { UserSchema } from '../Schema/UserScheme';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  user: UserSchema = {
    firstname: '',
    lastname: '',
    age: 23,
    address: {
      street: '',
      city: '',
      state: '',
    },
  };
  users: UserSchema[];
  show_data: boolean = true;
  this_loading: boolean = true;
  enableAdd: boolean = true;
  currentClasses: {};
  currentStyles: {};
  showUserform: boolean = true;
  @ViewChild('userForm') form: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getData().subscribe((data) => {
      console.log(data);
    });
    this.userService.getUsers().subscribe((user) => {
      this.users = user;
      this.this_loading = true;
    });

    this.this_loading = false;
    this.setcurrentClasses();
    this.setCurrentStyles();
  }

  setcurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd, // Fixed typo 'btn-sucess' to 'btn-success'
      'btn-text': this.show_data,
    };
  }

  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.show_data ? '0' : '40px',
      'font-size': this.show_data ? 'inherit' : '40px', // Added 'inherit' for font-size
    };
  }

  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();

    //unshift is same as push
    this.users.unshift(this.user);

    this.user = {
      firstname: '',
      lastname: '',
      age: 23,
      address: {
        street: '',
        city: '',
        state: '',
      },
    };
  }

  toggleHide(user: UserSchema) {
    user.hide = !user.hide;
  }

  onSubmit({ value }: { value: UserSchema }) {
    value.isActive = true;
    value.registered = new Date();
    value.hide = true;

    this.userService.addUser(value);
    this.form.reset();
  }
}
