import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Message } from 'snapril-lib';
import { FormControl, Validators } from '@angular/forms';
import { MessageService } from '../services/message/message.service';
import { first } from 'rxjs/operators';
import { IonContent } from '@ionic/angular';
import { UserService } from '../services/user/user.service';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

    messages: Message[] = [];
    text: string;
    public textControl = new FormControl(null, Validators.required);

    @ViewChild('content') contentElem: IonContent;

    constructor(private readonly messageService: MessageService, private readonly userService: UserService) {
    }

    ngOnInit(): void {
        this.messageService.getAllMessage().pipe(first()).subscribe(value => {
            console.log(value);
            this.messages = value;
            if (this.contentElem){
                this.contentElem.scrollToBottom(0);
            }
        });
        this.messageService.getLastMessage$().subscribe(value => {
            this.messages.push(value);
            if (this.contentElem){
                this.contentElem.scrollToBottom(0);
            }
        });

    }

    public send(): void {
        this.userService.getCurrentUser().subscribe(author => {
            const data: Message = {
                date: Date.now(),
                author,
                geolocation: 'ICI',
                content: this.text
            };
            this.messageService.send(data);
            this.text = null;
        });
    }
}
