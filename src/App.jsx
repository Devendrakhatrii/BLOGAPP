import Contact from "./pages/contact";
import Home from "./pages/home";
import { About } from "./about";
import Practice from "./pages/practice"
import Button from "./pages/button";

const App = () => {
  const users = [{name:'Snigdha', age:21},{name:'Ram', age: 22},{name:'Hari', age:19}]
  return(
    <>
   <Contact />
   <hr/>
   <Home data= {users}/>
   <hr/>
   <About title = "CONTACT INFORMATION" description= "Please enter your valid information" contactno = "ENter your contact number"/>
   <hr></hr>
   <Practice isGoal = {2} />
   <hr></hr>
   <Button/>
  
  </>

 
 
  ); 
}
export default App;