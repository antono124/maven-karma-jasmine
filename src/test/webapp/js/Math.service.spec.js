describe('MathService', function() {

    var MathService;

    beforeEach(function() {

        // Declare the angular module used
        module('services');

        // Initialize the angular component tested (Service, Controller, etc)
        inject(function (_MathService_) {
            MathService = _MathService_;
        });
    });

    // Test the initialization
    describe('Angular component definition', function(){
        it('MathService should be defined', function() {
            expect(MathService).toBeDefined();
        });
    });

    // Test the initialization
    describe('Test math functions', function(){
        it('Test sum function', function() {
            expect(MathService.sum(2,3)).toBe(5);
        });
        it('Test multiply function', function() {
            expect(MathService.multiply(2,3)).toBe(6);
        });
    });

});
