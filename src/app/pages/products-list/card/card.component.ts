/* eslint-disable no-console */
import {Component} from '@angular/core';
import {ProductMock} from '../../../shared/products/product.mock';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    readonly product = ProductMock;

    buttonClickedBuy(event: MouseEvent) {
        console.log(event);
    }
}
