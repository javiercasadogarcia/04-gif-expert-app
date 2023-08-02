import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('AddCategory tests', () => { 
    test('should change the value of the input', () => { 
        render(<AddCategory onNewCategory={ () => {}}/>);

        const inputValue = 'Dragon Ball';
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: inputValue}});
        expect(input.value).toBe(inputValue);
        //screen.debug();
    });

    test('should call onNewCategory if the input has any value', () => { 
        const inputValue = 'Dragon Ball';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory }/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input(input, {target: {value: inputValue}});
        expect(input.value).toBe(inputValue);
        
        fireEvent.submit(form);
        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
        //screen.debug();
    });

    test('should not call onNewCategory if the input is empty', () => { 
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory }/>);

        const form = screen.getByRole('form');
        
        fireEvent.submit(form);

        expect(onNewCategory).not.toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        //screen.debug();
    });
})
