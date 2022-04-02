#   Aprendiendo React V18

##  Modulos Deprecados de Version Anterior a la Version 18

    -   Deprecations

        react-dom: ReactDOM.render has been deprecated. Using it will warn and run your app in React 17 mode.
        react-dom: ReactDOM.hydrate has been deprecated. Using it will warn and run your app in React 17 mode.
        react-dom: ReactDOM.unmountComponentAtNode has been deprecated.
        react-dom: ReactDOM.renderSubtreeIntoContainer has been deprecated.
        react-dom/server: ReactDOMServer.renderToNodeStream has been deprecated.

    To resolve you can either revert to a previous version of React or update your index.js file to align with the React 18 syntax.


##  Enviando Propiedades entre componentes, Hacer Validaciones y Evitar el acceso de componentes sin los Props Necesarios PropTypes

    -   PrimeraApp.propTypes = {
            props: PropTypes.string
        }
    
    -   Console Resp: Warning: Failed prop type: Invalid prop `props` of type `number` supplied to `PrimeraApp`, expected `string`.
        PrimeraApp@http://localhost:3000/static/js/bundle.js:32:7


##  Hooks
    -   UseState
        const [Counter, setCounter] = useState(initialValue);   
        -   Counter -> Valor renderizado
        -   SetCounter -> Acciones 
        -   InitialValue -> Valor Inicial


##  Aplicando Tests
    -   Generar Patron de diseño para prubeas ordenadas y limpias
    -   Carpeta Source -> Tests

        describe('Prubeas Iniciales en Jest con React', () => {

            test('SameStrings', () => {
            
                //  1.  Initialized Test
                const mensaje = 'Hola Mundo'
            
                //  2.  Estimulo
                const message = `Hola Mundo`
            
                const messageIncorrect = 'Hola Mundo 2'
            
                //  3.  Observar el Comportanemiento
                expect( mensaje ).not.toBe(messageIncorrect)
                
                expect( mensaje ).toBe(message)
            
            })

        })