System.register(['angular2/core', './tester.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, tester_service_1;
    var ChildComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tester_service_1_1) {
                tester_service_1 = tester_service_1_1;
            }],
        execute: function() {
            ChildComponent = (function () {
                function ChildComponent(tester2Service) {
                    this.tester2Service = tester2Service;
                }
                ChildComponent.prototype.changeit = function () {
                    this.tester2Service.wordp = "changed p from child";
                };
                ChildComponent = __decorate([
                    core_1.Component({
                        selector: 'my-child',
                        template: "<h1 (click)=\"changeit()\"  >My {{tester2Service.wordc}} Child</h1>"
                    }), 
                    __metadata('design:paramtypes', [tester_service_1.TesterService])
                ], ChildComponent);
                return ChildComponent;
            }());
            exports_1("ChildComponent", ChildComponent);
        }
    }
});
//# sourceMappingURL=child.component.js.map