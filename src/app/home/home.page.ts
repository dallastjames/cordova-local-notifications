import { Component } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage {
    constructor(private notifications: LocalNotifications) {}

    public send() {
        this.notifications.schedule({
            id: 1,
            text: 'This is a test notification',
            actions: [
                {
                    id: 'cool',
                    title: 'Cool'
                },
                {
                    id: 'cooler',
                    title: 'Cooler'
                }
            ]
        });
    }
}
