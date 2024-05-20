import {useEffect, useState} from 'react';
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

return <div> {post.length > 0 && (<Table header = {["id","title","body","userId","tags","reaction"]}
data = {post}
/>
)}
</div>
}
export default useEff;  