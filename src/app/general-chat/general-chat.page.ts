import { AfterViewChecked, Component, OnInit, ViewChild } from '@angular/core';
import { Message, User } from 'snapril-lib';
import { FormControl, Validators } from '@angular/forms';
import { MessageService } from '../services/message/message.service';
import { first } from 'rxjs/operators';
import { UserService } from '../services/user/user.service';
import { IonContent } from '@ionic/angular';
import { PhotoService } from '../services/photo/photo.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
    selector: 'app-general-chat',
    templateUrl: 'general-chat.page.html',
    styleUrls: ['general-chat.page.scss']
})
export class GeneralChatPage implements OnInit, AfterViewChecked {

    @ViewChild(IonContent) public ionContent: IonContent;

    public currentUser: User;
    messages: Message[] = [];
    text: string;
    public geolocationValue: string;
    public textControl = new FormControl(null, Validators.required);

    @ViewChild('content') contentElem: IonContent;

    constructor(
        private readonly messageService: MessageService,
        private readonly userService: UserService,
        private readonly photoService: PhotoService,
        private readonly geolocation: Geolocation
        ) {
    }

    ngOnInit(): void {
        this.userService.getCurrentUser().subscribe(user => {
            this.currentUser = user;
            this.messageService.getAllMessage().pipe(first()).subscribe(value => {
                this.messages = value;
            });
            this.messageService.getLastMessage$().subscribe(value => {
                this.messages.push(value);
                setTimeout(() => {
                    this.ionContent.scrollToBottom(0);
                }, 500);
            });
            this.geolocation.getCurrentPosition().then((resp) => {
                this.geolocationValue = `${resp?.coords.latitude},${resp?.coords.longitude}`;
            }).catch((error) => {
                console.log('Error getting location', error);
            });
        });
    }

    ngAfterViewChecked(): void {
        this.ionContent.scrollToBottom(0);
    }

    public send(): void {
        this.userService.getCurrentUser().pipe(first()).subscribe(author => {
            const data: Message = {
                date: Date.now(),
                author,
                geolocation: this.geolocationValue || 'ici',
                content: this.text
            };
            this.messageService.send(data);
            this.text = null;
        });
    }

    public takePicture() {
        this.photoService.addNewToGallery().then(() => {
            this.userService.getCurrentUser().pipe(first()).subscribe(author => {
                const data: Message = {
                    date: Date.now(),
                    author,
                    geolocation: this.geolocationValue,
                    content: null,
                    picture: this.photoService.photos[0].webviewPath
                };
                this.messageService.send(data);
                this.text = null;
            });
        });
    }
}
