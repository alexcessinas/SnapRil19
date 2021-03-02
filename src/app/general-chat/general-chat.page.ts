import { AfterViewChecked, Component, OnInit, ViewChild } from '@angular/core';
import { Message, User } from 'snapril-lib';
import { FormControl, Validators } from '@angular/forms';
import { MessageService } from '../services/message/message.service';
import { first } from 'rxjs/operators';
import { UserService } from '../services/user/user.service';
import { IonContent } from '@ionic/angular';
import { PhotoService } from '../services/photo/photo.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Capacitor } from '@capacitor/core';
import { Plugins, PushNotification, PushNotificationActionPerformed, PushNotificationToken } from '@capacitor/core';
const { PushNotifications } = Plugins;
const isPushNotificationsAvailable = Capacitor.isPluginAvailable('PushNotifications');

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
        console.log(isPushNotificationsAvailable);
        if (isPushNotificationsAvailable) {
            this.initPushNotifications();
        }
    }

    private initPushNotifications(){
        console.log('Initializing HomePage');

        // Request permission to use push notifications
        // iOS will prompt user and return if they granted permission or not
        // Android will just grant without prompting
        PushNotifications.requestPermission().then( result => {
            if (result.granted) {
                // Register with Apple / Google to receive push via APNS/FCM
                PushNotifications.register();
            } else {
                // Show some error
            }
        });

        // On success, we should be able to receive notifications
        PushNotifications.addListener('registration',
            (token: PushNotificationToken) => {
                alert('Push registration success, token: ' + token.value);
            }
        );

        // Some issue with our setup and push will not work
        PushNotifications.addListener('registrationError',
            (error: any) => {
                alert('Error on registration: ' + JSON.stringify(error));
            }
        );

        // Show us the notification payload if the app is open on our device
        PushNotifications.addListener('pushNotificationReceived',
            (notification: PushNotification) => {
                alert('Push received: ' + JSON.stringify(notification));
            }
        );

        // Method called when tapping on a notification
        PushNotifications.addListener('pushNotificationActionPerformed',
            (notification: PushNotificationActionPerformed) => {
                alert('Push action performed: ' + JSON.stringify(notification));
            }
        );
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
