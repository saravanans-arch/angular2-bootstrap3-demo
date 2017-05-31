/**
 * Created by saravanan on 5/31/2017.
 */
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'profile.component.html'
})

export class ProfileComponent implements OnInit {

    constructor(){
        console.log("Entered here:::::::::::::1");
    }

    ngOnInit(){
        console.log("Entered here:::::::::::::2");
        //called after the constructor and called  after the first ngOnChanges()
    }
}