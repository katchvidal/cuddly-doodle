/**
 *  Codigo de JavaScript dentro de Test
 *  Nombre del Archivo no es tan importante pero es conveniente de tener nombre de acuerdo a la prueba
 *  Comando para iniciar dentro de la consola es NPM RUN TEST arranca el comando para iniciar JEST
 *  Debe contener al menos una prueba dentro de este fichero de test si no dara por default ERROR
 */


describe('Prubeas Iniciales en Jest con React', () => {

    test('SameStrings', () => {
    
        //  1.  Initialized Test
        const mensaje = 'Hola Mundo';
    
        //  2.  Estimulo
        const message = `Hola Mundo`;
    
        //  3.  Observar el Comportanemiento
      
        expect( mensaje ).toBe(message);
    
    });

    test('NotSameStrings', () => {
    
        //  1.  Initialized Test
        const mensaje = 'Hola Mundo';
    
        //  2.  Estimulo
        const message = `Hola Mundo2`;
    
        //  3.  Observar el Comportanemiento
        expect( mensaje ).not.toBe(message);
         
    });

})
