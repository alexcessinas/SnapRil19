import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Message, User } from 'snapril-lib';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FriendService {

    constructor(private readonly fireDatabase: AngularFireDatabase) {
    }

    async send() {
        console.log('SEND');
    }

    getAllUser(): Observable<User[]> {
        return this.fireDatabase.list<User>('user').valueChanges();
    }

}
