var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { OktaService } from '../okta.service';
import { AppService } from '../app.service';
var UserSearchComponent = /** @class */ (function () {
    function UserSearchComponent(data, ProfileData) {
        this.data = data;
        this.ProfileData = ProfileData;
        this.UserProfile = [];
        this.UserData = [];
        this.Group = true;
    }
    UserSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.ProfileData.getUserProfile().subscribe(ProfileData=>this.UserProfile=ProfileData);
        this.data.getUsersData().subscribe(function (data) { return _this.UserData = data; });
    };
    UserSearchComponent.prototype.onGroup = function () {
        this.Group = true;
        this.Apps = false;
    };
    UserSearchComponent.prototype.onApp = function () {
        this.Apps = true;
        this.Group = false;
    };
    UserSearchComponent.prototype.onMouseOver = function () {
        alert('test');
    };
    UserSearchComponent = __decorate([
        Component({
            selector: 'app-okta',
            templateUrl: './UserSearch.component.html',
            styleUrls: ['./UserSearch.component.css']
        }),
        __metadata("design:paramtypes", [OktaService, AppService])
    ], UserSearchComponent);
    return UserSearchComponent;
}());
export { UserSearchComponent };
//# sourceMappingURL=UserSearch.component.js.map