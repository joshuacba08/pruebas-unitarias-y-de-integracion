import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";

describe('Pruebas en <PrimeraApp />', () => {
    
    test('Debe mostrar el mensaje "Hola, soy Josué"', () => {

        const saludo = "Hola, soy Josué";

        const { getByText } = render( <PrimeraApp saludo ={ saludo }/>)

        expect( getByText(saludo) ).toBeInTheDocument(); 
    })
})
