import { useEffect, useState } from "react";

// create your App component here
export default function App(){
    const [dogImage,setDogimage] = useState()
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random").then((response) => response.json())
        .then((data)=>{
            setDogimage(data)
            setIsLoaded(true)
        });
    },[])
    if (!isLoaded) return <h3>Loading...</h3>;
    return(
        <div>
            <img src={dogImage.message} alt="A Random Dog"/>
        </div>
    );
}