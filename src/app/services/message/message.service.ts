import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Message } from 'snapril-lib';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MessageService {

    subject: Subject<Message> = new Subject();

    constructor(private readonly fireDatabase: AngularFireDatabase) {
    }

    send(data: Message): void {
        if (data.content && data.content != '') {
            this.fireDatabase.list<Message>('general').push(data);
        }
    }

    getAllMessage(): Observable<Message[]> {
        return this.fireDatabase.list<Message>('general').valueChanges();
    }

    getLastMessage$(): Observable<Message> {
        this.fireDatabase.list<Message>('general').query.limitToLast(1).on('child_added', a => this.subject.next(a.val()));
        return this.subject.asObservable();
    }

}
