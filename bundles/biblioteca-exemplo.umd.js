(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('moment')) :
    typeof define === 'function' && define.amd ? define('biblioteca-exemplo', ['exports', '@angular/core', 'moment'], factory) :
    (factory((global['biblioteca-exemplo'] = {}),global.ng.core,global.m));
}(this, (function (exports,i0,m) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var BibliotecaExemploService = /** @class */ (function () {
        function BibliotecaExemploService() {
        }
        BibliotecaExemploService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        BibliotecaExemploService.ctorParameters = function () { return []; };
        /** @nocollapse */ BibliotecaExemploService.ngInjectableDef = i0.defineInjectable({ factory: function BibliotecaExemploService_Factory() { return new BibliotecaExemploService(); }, token: BibliotecaExemploService, providedIn: "root" });
        return BibliotecaExemploService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var BibliotecaExemploComponent = /** @class */ (function () {
        function BibliotecaExemploComponent() {
        }
        /**
         * @return {?}
         */
        BibliotecaExemploComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        BibliotecaExemploComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ble-biblioteca-exemplo',
                        template: "\n    <p>\n      biblioteca-exemplo works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        BibliotecaExemploComponent.ctorParameters = function () { return []; };
        return BibliotecaExemploComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var moment = m;
    var TesteComponent = /** @class */ (function () {
        function TesteComponent() {
            this.data = moment().format();
        }
        /**
         * @return {?}
         */
        TesteComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        TesteComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ble-teste',
                        template: "<div class=\"teste\">\n  <p>\n    <ng-content></ng-content>\n  </p>\n  <div class=\"div-data-img\">{{ data }}</div>\n</div>\n",
                        styles: [".teste{font-size:20px}.teste p{color:green}.teste .div-data-img{color:#00f;display:block;width:250px;height:140px;background-image:url(assets/images/angular6-logo.jpg);background-size:contain}"]
                    }] }
        ];
        /** @nocollapse */
        TesteComponent.ctorParameters = function () { return []; };
        return TesteComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var BibliotecaExemploModule = /** @class */ (function () {
        function BibliotecaExemploModule() {
        }
        BibliotecaExemploModule.decorators = [
            { type: i0.NgModule, args: [{
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
        return BibliotecaExemploModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.BibliotecaExemploService = BibliotecaExemploService;
    exports.BibliotecaExemploComponent = BibliotecaExemploComponent;
    exports.BibliotecaExemploModule = BibliotecaExemploModule;
    exports.TesteComponent = TesteComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlibGlvdGVjYS1leGVtcGxvLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vYmlibGlvdGVjYS1leGVtcGxvL2xpYi9iaWJsaW90ZWNhLWV4ZW1wbG8uc2VydmljZS50cyIsIm5nOi8vYmlibGlvdGVjYS1leGVtcGxvL2xpYi9iaWJsaW90ZWNhLWV4ZW1wbG8uY29tcG9uZW50LnRzIiwibmc6Ly9iaWJsaW90ZWNhLWV4ZW1wbG8vbGliL3Rlc3RlL3Rlc3RlLmNvbXBvbmVudC50cyIsIm5nOi8vYmlibGlvdGVjYS1leGVtcGxvL2xpYi9iaWJsaW90ZWNhLWV4ZW1wbG8ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQmlibGlvdGVjYUV4ZW1wbG9TZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmxlLWJpYmxpb3RlY2EtZXhlbXBsbycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBiaWJsaW90ZWNhLWV4ZW1wbG8gd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEJpYmxpb3RlY2FFeGVtcGxvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBtIGZyb20gJ21vbWVudCc7XG5jb25zdCBtb21lbnQgPSBtO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdibGUtdGVzdGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGVzdGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90ZXN0ZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRlc3RlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgZGF0YSA9IG1vbWVudCgpLmZvcm1hdCgpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJpYmxpb3RlY2FFeGVtcGxvQ29tcG9uZW50IH0gZnJvbSAnLi9iaWJsaW90ZWNhLWV4ZW1wbG8uY29tcG9uZW50JztcbmltcG9ydCB7IFRlc3RlQ29tcG9uZW50IH0gZnJvbSAnLi90ZXN0ZS90ZXN0ZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEJpYmxpb3RlY2FFeGVtcGxvQ29tcG9uZW50LFxuICAgIFRlc3RlQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBCaWJsaW90ZWNhRXhlbXBsb0NvbXBvbmVudCxcbiAgICBUZXN0ZUNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEJpYmxpb3RlY2FFeGVtcGxvTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJDb21wb25lbnQiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBT0U7U0FBaUI7O29CQUxsQkEsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7dUNBSkQ7Ozs7Ozs7QUNBQTtRQWFFO1NBQWlCOzs7O1FBRWpCLDZDQUFROzs7WUFBUjthQUNDOztvQkFkRkMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSx3QkFBd0I7d0JBQ2xDLFFBQVEsRUFBRSwwREFJVDtxQkFFRjs7Ozt5Q0FWRDs7Ozs7OztBQ0FBO0lBRUEsSUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDOztRQVdmO3dCQUZjLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRTtTQUVkOzs7O1FBRWpCLGlDQUFROzs7WUFBUjthQUNDOztvQkFaRkEsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxXQUFXO3dCQUNyQix5SUFBcUM7O3FCQUV0Qzs7Ozs2QkFSRDs7Ozs7OztBQ0FBOzs7O29CQUlDQyxXQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFLEVBQ1I7d0JBQ0QsWUFBWSxFQUFFOzRCQUNaLDBCQUEwQjs0QkFDMUIsY0FBYzt5QkFDZjt3QkFDRCxPQUFPLEVBQUU7NEJBQ1AsMEJBQTBCOzRCQUMxQixjQUFjO3lCQUNmO3FCQUNGOztzQ0FmRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=