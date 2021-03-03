// import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

describe('Pruebas en <PrimeraApp />', () => {
    
    // test('Debe mostrar el mensaje "Hola, soy Josué"', () => {
    //     const saludo = "Hola, soy Josué";
    //     const { getByText } = render( <PrimeraApp saludo ={ saludo }/>)
    //     expect( getByText(saludo) ).toBeInTheDocument(); 
    // })
    test('Debe de mostrar el compotente <PrimeraAPP /> correctamente', () => {
        
        const saludo = "Hola, soy Josué"
        const wrapper = shallow( <PrimeraApp saludo ={ saludo } /> );

        expect( wrapper ).toMatchSnapshot();
    })
    


})
