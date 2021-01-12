import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { User } from 'snapril-lib';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly dbRef = 'users';

  constructor(private readonly afdb: AngularFireDatabase, private readonly auth: AngularFireAuth) { }

  createUser(id: string, username: string) {
    const picture = 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png';
    const user: User = { id, username, picture };
    this.afdb.list<User>(this.dbRef).set(id, user);
  }
}
