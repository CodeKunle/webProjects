import react, {useState} from 'react' ;

function UseStateTrial(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);

    const updateName = () => {  
        setName ("Kunle" );}
    const updateAge = () => {
        setAge (age + 1);
    } 


    
    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Update Name</button>

            <p>Age: {age}</p>
            <button onClick={updateAge}>Update Age</button>
      
        </div>
  )
}

export default UseStateTrial