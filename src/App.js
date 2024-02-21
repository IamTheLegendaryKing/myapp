import Employee from './components/Employees';
import './App.css';
import {useState} from 'react';

function App() {
  const [role,setRole] = useState();
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? 
      (
        <>
        <input type="text" onChange={(e) =>{console.log(e.target.value); 
          setRole(e.target.value)}} placeholder='Enter Role...'/>
      <Employee name="Melvan" role="King"/>
      <Employee name="MPT" role={role}/>
      <Employee name="Smellies" />
      </>
      )
      :
      (<p> not allow to see employees</p>)}
    </div>
  );
}

export default App;
