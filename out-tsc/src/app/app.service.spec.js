import { TestBed, inject } from '@angular/core/testing';
import { AppService } from './app.service';
describe('AppService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [AppService]
        });
    });
    it('should be created', inject([AppService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=app.service.spec.js.map