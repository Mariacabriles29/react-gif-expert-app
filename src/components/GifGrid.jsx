
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

// eslint-disable-next-line react/prop-types
export const GifGrid = ({ category }) => {
 


  // eslint-disable-next-line no-undef
  //esto es un custom hook
  const { images, isLoading } = useFetchGifs(category);

  
  
  return (
    <>
    {console.log("images ",images)}
      <h3>{category}</h3>
      <h3>{ category }</h3>
            {
              //and logico 
              //aqui indico que si  isLoading es true se ejecuta el cargando...
              isLoading && ( <h2>Cargando...</h2> )
            }
      
      
        {/*crear los list item  de manera dinamica, para traer una lista de las primeras imagenes   */}
        <div className="card-grid">
                {
                    images?.map( ( image ) => (
                        <GifItem 
                            key={ image.id } 
                            { ...image }
                        />
                    ))
                }
                
            </div>
        
    </>
  );
};
