import { Component, OnChanges, Input } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})

export class StarComponent implements OnChanges{
    @Input() rating: number;  
    starWidth: number;
    ngOnChanges():void{  // Now upon changing the input value the ngOnChange() will occur
                         // for different products different ratings are present
                         // so whenever the value of [rating] property changes ngOnChanges() 
                         // method is invoked and [starWidth] property value is changed.
        this.starWidth = (this.rating*75)/5;
    }
}