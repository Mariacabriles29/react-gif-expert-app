//cada vez que se usa await la funcion debe ser asincrona
  export const getGifs = async( category ) => {

    const url =  `https://api.giphy.com/v1/gifs/search?api_key=ngIYOj4wbwkVBCO11gpZTemjbYO0Kj7A&q=${category}&limit=10`;
    //luego realizo la peticion http
    const resp = await fetch( url );
    //aqui desestructuro la data y con await y .json me traigo las imagen que hay en la pai creada de giphy
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    return gifs;
}

