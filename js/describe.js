function describe (theSubject, funct) {
	try {
		funct();
		console.log('Ejecutando: ' + theSubject);
    } catch (error){
		console.log('Error al ejecutar ' + theSubject + ' ' + error);
    }
};
function it (theSubject, funct) { 
	try {
		funct();
		console.log('Ejecutando: ' + theSubject);
    } catch (error){
		throw 'en el test ' + theSubject + ':' + error;
    }
};
function expect (actual){
	return {
		toEqual: function(expected) {
			if (actual != expected) {
				throw actual + ' is not ' + expected;
            }
        },
        toBeGreaterOrEqualTo: function(expected){
            if (actual < expected) {
                throw actual + ' is not greater or equal to ' + expected;
            }
        },
        toBeLessOrEqualTo: function (expected) {
            if (actual > expected) {
                throw actual + ' is not less or equal to ' + expected;
            }
        },
        toBeTrue: function() {
            if (actual != true) {
                throw actual + ' is not true'; 
            }
        }
    };
}
describe('Prueba', function () {
    it('Test to Equal', function () {
        expect(1).toEqual(2);
    });
});
describe('Prueba', function () {
    it('Test to Equal', function () {
        expect(1).toEqual(1);
    });
});
describe('Prueba', function () {
    it('is true', function () {
        expect(1 === 1).toBeTrue();
    });
});
describe('Prueba', function () {
    it('check if a number is greater o equal to', function () {
        expect(2).toBeGreaterOrEqualTo(1);
    });
});