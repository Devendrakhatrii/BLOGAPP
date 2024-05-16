const Practice = ({isGoal}) => {
let result;
switch (true) {
    case isGoal === 0:
        result = <MissedGoal/>;
        break;
    case isGoal === 1:
        result = <Goal/>;
        break;
    case isGoal === 2:
        result = <Brace/>
        break;
    case isGoal === 3:
    result = <Hatrick/>
    break;
    default:
        result = <>No GOAl Registered</> 
}
return <>{result}</>
}

const Goal = () => {
    return <>Goal</>
}
const MissedGoal = () => {
    return <>Missed Goal</>
}
const Brace = () => {
    return <>Scored Brace</>
}
const Hatrick = () => {
    return <>Hatrick</>
}

export default Practice;