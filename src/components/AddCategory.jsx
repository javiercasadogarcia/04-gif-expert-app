import { useState } from "react"

export const AddCategory = ({/*setCategories*/onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')    

    const onInputChange = (event) => {
        //console.log(event.target.value);
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        //console.log(event);
        event.preventDefault();
        //console.log(inputValue);
        if (inputValue.trim().length <= 1) return;

        //setCategories(categories => [inputValue, ...categories]);
        onNewCategory(inputValue);
        setInputValue('');
    }

  return (
    <>
        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    </>
  )
}
