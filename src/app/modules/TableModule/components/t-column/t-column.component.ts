import {Component, Input} from '@angular/core';
import {staticTColl, staticTCollDate} from "../../interface-type/type";


@Component({
    selector: 't-column',
    templateUrl: './t-column.component.html',
    styleUrls: []
})
export class TColumnComponent {
    @Input('cellName') cellName: staticTColl;
    @Input('filter') filter: staticTColl;
    @Input('order') order: staticTColl;
    @Input('cellProp') cellProp: staticTColl;
    @Input('date') date?: staticTCollDate;
    @Input('template') template?: staticTColl;
}
