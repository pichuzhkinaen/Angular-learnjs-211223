import {Component, Input, Output, EventEmitter} from '@angular/core';
import {IProduct} from '../../../shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    @Input() product: IProduct | null = null;
    @Output() readonly buy = new EventEmitter();

    onProductBuy(event: Event) {
        event.stopPropagation();
        this.buy.emit(event);
    }

    isStarActive(starIndex: number): boolean {
        return !!(this.product && this.product.rating >= starIndex);
    }
}
