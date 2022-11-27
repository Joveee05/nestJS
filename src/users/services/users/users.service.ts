import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { name: 'Max', email: 'max@example.com' },
    { name: 'Greg', email: 'greg@example.com' },
    { name: 'Monica', email: 'monica@example.com' },
    { name: 'Jovi', email: 'jovi@example.com' },
  ];
  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userDetails: CreateUserDto) {
    this.fakeUsers.push(userDetails);
    return userDetails;
  }

  fetchUserById(id: number) {
    return [{ id, name: 'Max', email: 'max@example.com' }];
  }
}
