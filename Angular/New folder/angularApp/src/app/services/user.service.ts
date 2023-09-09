import { Injectable } from '@angular/core';
import { UserSchema } from '../Components/Schema/UserScheme';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: UserSchema[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstname: 'Rohit',
        lastname: 'Sah',
        age: 23,
        address: {
          street: 'Gurudwara Road',
          city: 'Rourkela',
          state: 'Odisha',
        },
        hide: false,
      },
      {
        firstname: 'Rahul',
        lastname: 'Sah',
        age: 28,
        address: {
          street: 'Gandhi Road',
          city: 'Some City', // Add city for the address
        },
        registered: new Date('01/02/2023'),
        hide: false,
      },
      {
        firstname: 'Rajan',
        lastname: 'Sah',
        age: 32,
        address: {
          street: 'Gandhi Road',
          city: 'Another City', // Add city for the address
        },
        registered: new Date('03/11/2019'),
        hide: false,
      },
    ];
  }

  getData() {
    this.data = new Observable((observer) => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);

      setTimeout(() => {
        observer.next(1);
      }, 2000);

      setTimeout(() => {
        observer.next(1);
      }, 3000);

      setTimeout(() => {
        observer.next(1);
      }, 4000);
    });

    return this.data;
  }

  getUsers(): Observable<UserSchema[]> {
    console.log('Fetching user from service...');
    return of(this.users);
  }

  addUser(user: UserSchema) {
    this.users.unshift;
  }
}
