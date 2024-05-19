import {useEffect, useState} from React;
import axios from "axios";

const useEff = () => {
    const [post, setPost] = useState([]);

useEffect(() => {
    const fetchData = async () =>{
        try{
            const {data} = await axios("https://dummyjson.com/posts");
            setPost(data.posts);
        }
        catch(e){
            console.log(e);
        }
    };
    fetchData();
}, []);

return <div>{JSON.stringify(post)}</div>

};
export default useEff;