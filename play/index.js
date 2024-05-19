// API fetch https://dummyjson.com/posts
// fetch("https://dummyjson.com/posts")
// .then ((result) => result.json())
// .then ((finalAns) => console.log(finalAns));
const fetchJson = async() => {
 try {
        const {response} = await axios("https://dummyjson.com/posts");
        const finalAns = await response.json();
        console.log(finalAns)
        }
      catch(error){
   console.log("Error Fetching te JSON:", error);
  }
 }
fetchJson()