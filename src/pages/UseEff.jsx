import {useEffect, useState} from 'react';
import axios from "axios";
import Table from '../components/Table';


const useEff = () => {
    const [post, setPost] = useState([]);

useEffect(() => {
    const fetchData = async () =>{
        try{
            const {body} = await axios("https://dummyjson.com/posts");
            setPost(body.posts);
        }
        catch(e){
            console.log(e);
        }
    };
    fetchData();
}, []);

return <div> {post.length > 0 && (<Table header = {["id","title","body","userId","tags","reaction"]}
body = {post}
/>
)}
</div>
}
export default useEff;  