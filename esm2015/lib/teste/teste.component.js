/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as m from 'moment';
/** @type {?} */
const moment = m;
export class TesteComponent {
    constructor() {
        this.data = moment().format();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TesteComponent.decorators = [
    { type: Component, args: [{
                selector: 'ble-teste',
                template: "<div class=\"teste\">\n  <p>\n    <ng-content></ng-content>\n  </p>\n  <div class=\"div-data-img\">{{ data }}</div>\n</div>\n",
                styles: [".teste{font-size:20px}.teste p{color:green}.teste .div-data-img{color:#00f;display:block;width:250px;height:140px;background-image:url(assets/biblioteca-exemplo/images/angular6-logo.jpg);background-size:contain}"]
            }] }
];
/** @nocollapse */
TesteComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    TesteComponent.prototype.data;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYmlibGlvdGVjYS1leGVtcGxvLyIsInNvdXJjZXMiOlsibGliL3Rlc3RlL3Rlc3RlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQzs7QUFDNUIsTUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBT2pCLE1BQU07SUFJSjtvQkFGYyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUU7S0FFZDs7OztJQUVqQixRQUFRO0tBQ1A7OztZQVpGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIseUlBQXFDOzthQUV0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBtIGZyb20gJ21vbWVudCc7XG5jb25zdCBtb21lbnQgPSBtO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdibGUtdGVzdGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGVzdGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90ZXN0ZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRlc3RlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgZGF0YSA9IG1vbWVudCgpLmZvcm1hdCgpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19