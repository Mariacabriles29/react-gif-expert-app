import { useState } from "react";
import { AddCategory,GifGrid } from './components';




export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);
  const onAddcategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    // asi se agrega una nueva categoria al array
    setCategories([newCategory, ...categories]);

    //otra forma de agregar una nueva categoria
    // setCategories(cat=>[...cat,'Valorant']);

  };
  return (
    <>
  
      <h1>GifExpertApp</h1>
      <AddCategory 
      
      // setCategories={setCategories}
      onNewCategory={(value) => onAddcategory (value)}
     
      />
      
     
      {/* //para renderizar un listado por categoria  */}
      {/* <button onClick={onAddcategory}>Agregar</button> */}
      <ol>
      {
        categories.map((category) =>(
          
          <GifGrid key={category} category={category}/>
        ))
        
        }
        
      </ol>
      {/* GifItems */}
    </>
  );
};
