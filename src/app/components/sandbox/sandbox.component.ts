import { Component } from '@angular/core';
import { customer } from'./customer';

 @Component({
    selector: 'sandbox',
    //template: `<h1>Hello {{ name }}, his age is {{ age }}</h1>`
    //templateUrl: './sandbox.component.html',
   /* template: `<h1> hello world</h1>
                {{people}}
                <ul>
                    <li *ngFor="let person of people">
                        {{ person }}
                    </li>
                </ul>
                <ul>
                    <li *ngFor="let person of people; let i = index">
                        {{i}} {{ person }}
                    </li>
                </ul>
                  <ul>
                    <li *ngFor="let person of people2">
                         {{ person.firstName }} {{ person.lastName }}
                    </li>
                </ul>
             `
    
    
    //styleUrls: ['./sandbox.component.css']
    /*styles: [`
        .special{
            color: green;
            font-size: 20px;
            text-transform: uppercase
        }
    `]
    */

  /*  template: `<h1>Hello 
    <!--
            <span *ngIf="showName">{{ name }}</span>
            <span *ngIf="!showName">World</span>
        -->
        <span *ngIf="showName; else noName">{{ name }}</span>
        <ng-template #noName>World</ng-template>

        <p>Hello {{ showName ? name : 'world' }}</p>

        <hr> 

        <div [ngSwitch]="greeting">
            <div *ngSwitchCase="'1'">Hello World</div>
            <div *ngSwitchCase="'2'">Hi There</div>
            <div *ngSwitchCase="'3'">Whats Up</div>
            <div *ngSwitchDefault>Hello</div>
        </div>
    </h1>`
*/

/*template: `<h1>Hello World</h1>

            
            <div><img src="{{ imageUrl }}"></div>
             <div><img [src]="imageUrl"></div>
             <div><img bind-src="imageUrl"></div>

             <h4> Image Location: <span [textContent]="imageUrl"></span></h4>
   

            <hr>
            <h2>Create Post</h2>
            <p [hidden]="isUnchanged">Post has been Changed, please save</p>
            <button [disabled]="isUnchanged">save</button>
        `
*/
   
 /*    template: ` 
        
        <h1>Hello World</h1>
        <h4 [class.special]="isSpecial">This Class binding is special</h4>
        <h4 [ngClass]="currentClasses">This div is initially specail and saveable</h4>
        
        `,
        styles:[
            `  .special {
                color:green
            }

            .saveable {
                text-transform:uppercase;
            }
            `
        ]
        */
       /* template:`
                <h1> Hello World </h1>
                <div [style.font-size]="isSpecial?'x-large':'smaller'">FontSize depends on isSpeical</div>
                <div [ngStyle]="currentStyles">This Div is initially saveable and special</div>
        `
        */
       /* template: `
                <h1>Hello World</h1>
                <p>My birthday is {{ birthday | date | uppercase }}</p>
                <p>My birthday is {{ birthday | date:"MM-dd-yyyy" }}</p>
                <p>I love {{ 'cake' | uppercase }}</p>
                <p>I hate {{ 'CATS' | lowercase }}</p>
                <p>your total is {{ total | currency:"USD":"1" }} </p>
                <p>Our fee is {{ fee | percent }}</p>
            `
            */
        template: `
                <h1>Hello World</h1>
               
            `

 
})

/*export class SandboxComponent{
    name = 'John Doe';
    age = 24;
    person = {firstName:'Steve', lastName: 'Smith'};

    constructor(){
        console.log('Constructor ran....');
        //this.age = 30;
        this.hasBirthday();        
    }
    hasBirthday(){
        this.age += 1;
    }
    showAge(){
        return this.age;
    }
}*/
/*export class SandboxComponent{
    name:string = 'John Doe';
    age:number = 35;
    hasChildren:boolean = false;
    city:any = 'boston';
    myNumbersArray:number[] = [1,2,3];
    myStringsArray:string[] = ['hello','world'];
    myAnyArray:any[] = ['jelly',3,this.hasChildren];
    myTuple: [string, number] = ['hello',3];
    unUsable:void = undefined;
    u: undefined = null;
    u1: null =undefined;
    constructor(){
       this.hasChildren = true;
       this.city = 35;
       this.myNumbersArray = [4,7,8];
  }
}*/

/*export class SandboxComponent {
    //customer: {id:number, name:string, email:string};
    customer: customer;
    customers: customer[];
    constructor() {
        this.customer = {
            name: 'John',
            email: 'sfd',
            id: 42
        }

        this.customers = [
            {
                name: 'John',
                email: 'sfd',
                id: 42
            },
            {
                name: 'wiley',
                email: 'sfd',
                id: 12
            }
        ]
    }
}*/

/*export class SandboxComponent {
    people = ['Rick', 'Daryl', 'Caryl'];
    people2 = [
        {
            firstName: 'Rick',
            lastName: 'Daryl'
        },
         {
            firstName: 'Grims',
            lastName: 'Dixon'
        },
         {
            firstName: 'Mary',
            lastName: 'Paul'
        }
    ];

    constructor(){
        this.people[5] = 'puppy';
        this.people[3] = '1243';
    }
}*/

/*export class SandboxComponent {
    name:string = 'John Doe';
    showName:boolean = false;
    greeting:number = 34;
}*/

/*export class SandboxComponent {
    imageUrl = "http://lorempixel.com/400/200";
    isUnchanged:boolean = true;
}*/

/*export class SandboxComponent {
    isSpecial = true;
    canSave = true;
    currentClasses = {};

    constructor(){
        this.setCurrentClasses();
    }

    setCurrentClasses(){
        this.currentClasses = {
            saveable: this.canSave,
            special: this.isSpecial
        }
    }

}*/
/*
export class SandboxComponent {
    isSpecial = true;
    canSave = true;
    currentStyles = {}

    constructor(){
        this.setCurrentStyles();
    }

    setCurrentStyles(){
        this.currentStyles = {
            'font-style': this.canSave ? 'italic' : 'normal',
            'font-size': this.isSpecial ? '24px' : '12px',
            'color': this.isSpecial ? 'green' : 'black'
        }
    }
}*/

/*export class SandboxComponent {
    birthday = new Date(1981, 1, 15);
    total = 500;
    fee = 10;

}*/

export  class SandboxComponent {

}