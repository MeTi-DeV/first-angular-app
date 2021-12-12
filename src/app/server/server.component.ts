//comment 1 : first of all to create new component , create a folder like component name  here I need a component with name
// server name 
//comment 2 :each component has a ts file and HTMl file
// after to create server component the ts file name should be server.component.ts
//comment 3 : in the first of component should import Component from @angular/core 
import { Component } from "@angular/core";
//comment 4 : inside Component calss we should define 2 important atributes
@Component({ 
    //component 5 : selector : the name of our component that will  be use in other components as a Tag
    selector:'app-server',
    //templateUrl : is the next atributes to intgrate component HTML file to this component ts file
    templateUrl:'./server.component.html',
})
export class ServerComponent {}