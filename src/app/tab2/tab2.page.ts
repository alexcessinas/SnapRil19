import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'snapril-lib';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

    messages: Message[];
    text: string;
    public textControl = new FormControl(null, Validators.required);

    constructor() {
    }

    ngOnInit(): void {
        this.messages = [
            {
                author: {
                    id: '12',
                    username: 'toto',
                    picture: '../../assets/icon/picture.png',
                },
                content: 'MESSAGE',
                date: 12,
                geolocation: 'ici'
            },
            {
                author: {
                    id: '12',
                    username: 'toto',
                    picture: '../../assets/icon/picture.png',
                },
                content: 'MESSAGE',
                date: 12,
                geolocation: 'ici'
            }
        ];
    }

    public send(): void {
        console.log('SEND', this.text);
        // Hop à la reponse du subscribe on vide le champ
        this.text = null;
    }

}
