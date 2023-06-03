import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


//un hook no es mas que una funcion que regresa algo, aqui implemento el custom hook 
export const useFetchGifs = (category) => {

  
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading]=useState(true);

  const getImages = async () => {
    // eslint-disable-next-line no-undef
    const newImages = await getGifs(category);
    console.log("newImages ",newImages)
    setImages(newImages);
    setIsLoading(false);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(() => {
    getImages();
  }, []);


  return{
    images,
    isLoading
  }
}
