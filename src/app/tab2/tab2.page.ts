import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'snapril-lib';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

    messages: Message[];

    constructor() {
    }

    ngOnInit(): void {
        this.messages = [
            {
                author: {
                    id: '12',
                    username: 'toto',
                    picture: '',
                },
                content: 'MESSAGE',
                date: 12,
                geolocation: 'ici'
            },
            {
                author: {
                    id: '12',
                    username: 'toto',
                    picture: '',
                },
                content: 'MESSAGE',
                date: 12,
                geolocation: 'ici'
            }
        ];
    }

}
