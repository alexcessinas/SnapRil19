import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Message, User } from 'snapril-lib';
import { FormControl, Validators } from '@angular/forms';
import { MessageService } from '../services/message/message.service';
import { first } from 'rxjs/operators';
import { UserService } from '../services/user/user.service';
import { IonContent } from '@ionic/angular';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit, AfterViewChecked {

    @ViewChild(IonContent) public ionContent: IonContent;

    public currentUser: User;
    messages: Message[] = [];
    text: string;
    public textControl = new FormControl(null, Validators.required);

    constructor(private readonly messageService: MessageService, private readonly userService: UserService) { }

    ngOnInit(): void {
        this.userService.getCurrentUser().subscribe(user => {
            this.currentUser = user;
            this.messageService.getAllMessage().pipe(first()).subscribe(value => {
                this.messages = value;
            });
            this.messageService.getLastMessage$().subscribe(value => {
                this.messages.push(value);
                setTimeout(() => {this.ionContent.scrollToBottom(0)}, 500)
            });
        });
    }

    ngAfterViewChecked(): void {
        this.ionContent.scrollToBottom(0);
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
