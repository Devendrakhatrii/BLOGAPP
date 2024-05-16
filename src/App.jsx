import Contact from "./pages/contact";
import Home from "./pages/home";
import { About } from "./about";

const App = () => {
  return(
    <>
   <Contact />
   <hr/>
   <Home/>
   <hr/>
   <About title = "CONTACT INFORMATION" description= "Please enter your valid information" contactno = "ENter your contact number"/>
  </>
 
  ); 
}
export default App;