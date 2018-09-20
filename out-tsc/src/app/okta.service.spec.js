import { TestBed, inject } from '@angular/core/testing';
import { OktaService } from './okta.service';
describe('OktaService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [OktaService]
        });
    });
    it('should be created', inject([OktaService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=okta.service.spec.js.map