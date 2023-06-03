import { useState} from "react"

// eslint-disable-next-line react/prop-types
export const AddCategory= ({onNewCategory})=>{
const [inputValue,setInputValue]=useState('');
const onInputChange=({target})=>{
    
     setInputValue(target.value);

}
const onSubmit= (event)=>{
    event.preventDefault();
    if( inputValue.trim().length <= 1) return;

    
    // setCategories(categories=>[ inputValue,...categories ])
    onNewCategory(inputValue.trim());
    //al llamar al setInputValue vacio con '' agrego un dato en mi input y se limpia y puedo seguir agregando mas datos
    setInputValue('');

}


    return(
        
        <form onSubmit={(onSubmit)}>
        <input type="text"
        placeholder="Buscar gifs"
        value={inputValue} 
        onChange={onInputChange}           />
        </form>
    
    )
}