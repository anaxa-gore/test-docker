/**
 * Created by tbonavia on 29/06/2016.
 */
import {Component} from '@angular/core';
import {HelloWorldService} from "./helloworld.service";
import {OnInit} from "angular2/core";

@Component({
    selector: 'my-app',
    template: '<h1 (click)="onClick()">Hello World {{test.name}} !!!</h1><br><h2>{{message}}</h2>',
    providers: [HelloWorldService]
})
export class AppComponent implements OnInit {
    title = "Hey c'est parti !!!";
    message:string = null;
    error:any = null;

    test:Test = {
        name: "cool"
    };

    constructor(private helloService:HelloWorldService) {

    }

    ngOnInit() {
        this.getMessage();
    }

    getMessage() {
        this.helloService.getInfo().subscribe(
            message => this.message = message,
            error => this.error = error);
    }

    onClick() {
        this.test.name = "hey";
    }
}

class Test {
    name:string;
}