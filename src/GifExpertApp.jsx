import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        //setCategories(cat => [...cat, 'category']);
        if (categories.includes(newCategory)) return;
        //if (categories.find(category => category.toLowerCase() === newCategory.toLowerCase())) return;
        setCategories([newCategory, ...categories]);
    }

  return (
    <>
        <h1>Gif Expert App</h1>

        <AddCategory 
            //setCategories={ setCategories } 
            onNewCategory={onAddCategory}
        />        

        {/*<button onClick={onAddCategory}>Agregar</button>*/}

        { 
            categories.map( (category) => (
                <GifGrid 
                    key={category} 
                    category={category} 
                />
            )) 
        } 

    </>
  )
}
