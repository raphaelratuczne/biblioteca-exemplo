import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';
import * as m from 'moment';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class BibliotecaExemploService {
    constructor() { }
}
BibliotecaExemploService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
BibliotecaExemploService.ctorParameters = () => [];
/** @nocollapse */ BibliotecaExemploService.ngInjectableDef = defineInjectable({ factory: function BibliotecaExemploService_Factory() { return new BibliotecaExemploService(); }, token: BibliotecaExemploService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class BibliotecaExemploComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
BibliotecaExemploComponent.decorators = [
    { type: Component, args: [{
                selector: 'ble-biblioteca-exemplo',
                template: `
    <p>
      biblioteca-exemplo works!
    </p>
  `
            }] }
];
/** @nocollapse */
BibliotecaExemploComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const moment = m;
class TesteComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class BibliotecaExemploModule {
}
BibliotecaExemploModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [
                    BibliotecaExemploComponent,
                    TesteComponent
                ],
                exports: [
                    BibliotecaExemploComponent,
                    TesteComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { BibliotecaExemploService, BibliotecaExemploComponent, BibliotecaExemploModule, TesteComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlibGlvdGVjYS1leGVtcGxvLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9iaWJsaW90ZWNhLWV4ZW1wbG8vbGliL2JpYmxpb3RlY2EtZXhlbXBsby5zZXJ2aWNlLnRzIiwibmc6Ly9iaWJsaW90ZWNhLWV4ZW1wbG8vbGliL2JpYmxpb3RlY2EtZXhlbXBsby5jb21wb25lbnQudHMiLCJuZzovL2JpYmxpb3RlY2EtZXhlbXBsby9saWIvdGVzdGUvdGVzdGUuY29tcG9uZW50LnRzIiwibmc6Ly9iaWJsaW90ZWNhLWV4ZW1wbG8vbGliL2JpYmxpb3RlY2EtZXhlbXBsby5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBCaWJsaW90ZWNhRXhlbXBsb1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdibGUtYmlibGlvdGVjYS1leGVtcGxvJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIGJpYmxpb3RlY2EtZXhlbXBsbyB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgQmlibGlvdGVjYUV4ZW1wbG9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIG0gZnJvbSAnbW9tZW50JztcbmNvbnN0IG1vbWVudCA9IG07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JsZS10ZXN0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90ZXN0ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Rlc3RlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGVzdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBkYXRhID0gbW9tZW50KCkuZm9ybWF0KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmlibGlvdGVjYUV4ZW1wbG9Db21wb25lbnQgfSBmcm9tICcuL2JpYmxpb3RlY2EtZXhlbXBsby5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGVzdGVDb21wb25lbnQgfSBmcm9tICcuL3Rlc3RlL3Rlc3RlLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQmlibGlvdGVjYUV4ZW1wbG9Db21wb25lbnQsXG4gICAgVGVzdGVDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEJpYmxpb3RlY2FFeGVtcGxvQ29tcG9uZW50LFxuICAgIFRlc3RlQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQmlibGlvdGVjYUV4ZW1wbG9Nb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0lBT0UsaUJBQWlCOzs7WUFMbEIsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7Ozs7O0FDSkQ7SUFhRSxpQkFBaUI7Ozs7SUFFakIsUUFBUTtLQUNQOzs7WUFkRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsUUFBUSxFQUFFOzs7O0dBSVQ7YUFFRjs7Ozs7Ozs7O0FDVkQ7QUFFQSxNQUFNLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFPakI7SUFJRTtvQkFGYyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUU7S0FFZDs7OztJQUVqQixRQUFRO0tBQ1A7OztZQVpGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIseUlBQXFDOzthQUV0Qzs7Ozs7Ozs7O0FDUkQ7OztZQUlDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsRUFDUjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osMEJBQTBCO29CQUMxQixjQUFjO2lCQUNmO2dCQUNELE9BQU8sRUFBRTtvQkFDUCwwQkFBMEI7b0JBQzFCLGNBQWM7aUJBQ2Y7YUFDRjs7Ozs7Ozs7Ozs7Ozs7OyJ9