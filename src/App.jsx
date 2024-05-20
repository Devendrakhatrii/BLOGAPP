import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Question from "./pages/Questions";
import Practice from "./pages/Practice";
import Button from "./pages/Button";
import UseEff from "./pages/UseEff";


const App = () => {
  const users = [{name:'Snigdha', age:21},{name:'Ram', age: 22},{name:'Hari', age:19}]
  return(
    <>
   <Contact />
   <hr/>
   <Home data= {users}/>
   <hr/>
   <Practice isGoal = {2} />
   <hr></hr>
   <Button/>
   <hr></hr>
   <Question/>
  <UseEff/>
  </>

 
 
  ); 
}
export default App;