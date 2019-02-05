import { Component, OnChanges, Input, Output,EventEmitter } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})

export class StarComponent implements OnChanges{
    @Input() rating: number;  
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    // Now upon changing the input value the ngOnChange() will occur
    // for different products different ratings are present
    // so whenever the value of [rating] property changes ngOnChanges() 
    // method is invoked and [starWidth] property value is changed.
    ngOnChanges():void{  
        this.starWidth = (this.rating*75)/5;
    }
    // in onClick() we raise this event and pass the message to parent component
    // emit() method is used on EventEmitter Object to pass the message to parent component
    onClick(): void{
        this.ratingClicked.emit("The rating " + (this.rating) +" was clicked!");
    }
}