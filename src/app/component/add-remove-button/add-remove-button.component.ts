import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'add-remove-button',
    templateUrl: './add-remove-button.component.html'
})
export class AddRemoveButtonCommponent{
    @Input() quantity?:number = 0
    @Input() inCart = false
    @Output() add = new EventEmitter()
    @Output() remove = new EventEmitter();
}