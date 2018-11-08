import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../../node_modules/rxjs';

@Injectable()
export class HeaderService {
    isActive = new BehaviorSubject<boolean>(false);

    change() {
        this.isActive.next(!this.isActive.getValue())
    }
}
 