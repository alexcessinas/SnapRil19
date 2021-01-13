import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, Subject } from 'rxjs';
import { User } from 'snapril-lib';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly dbRef = 'users';

  private userSubject: Subject<User> = new Subject();

  constructor(private readonly afdb: AngularFireDatabase, private readonly auth: AngularFireAuth) { }

  public createUser(id: string, username: string): void {
    const picture = 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png';
    const user: User = { id, username, picture };
    this.afdb.list<User>(this.dbRef).set(id, user);
  }

  public getCurrentUser(): Observable<User> {

    this.auth.currentUser
      .then(currenteUser => {
        this.afdb.object<User>(`${this.dbRef}/${currenteUser.uid}`).valueChanges().subscribe(user => this.userSubject.next(user));
      });

    return this.userSubject.asObservable();
  }

  public update(user: User): void {
    this.afdb.list<User>(this.dbRef).update(user.id, user);
  }
}
