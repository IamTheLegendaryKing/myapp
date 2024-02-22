import Employee from "./components/Employees";
import "./index.css";
import { useState } from "react";
import {v4 as uuid4} from 'uuid';

function App() {
  const [role, setRole] = useState();
  const [employee, setEmployee] = useState([
    {
      name: "Melvan",
      role: "King",
      img: "public/images/pexels-kate-kerr-13330726.jpg",
    },
    {
      name: "MPT",
      role: "King",
      img: "public/images/pexels-nashon-otieno-15694760.jpg",
    },
    {
      name: "rogM",
      role: "King",
      img: "public/images/pexels-shernon-hague-20150823.jpg",
    },
    {
      name: "man8",
      role: "King",
      img: "public/images/pexels-soubhagya-maharana-18887233.jpg",
    },
  ]);
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
            placeholder="Enter Role..."
          />
          <div className="flex flex-wrap justify-center">
            {employee.map((employee) => {
              return (
                <Employee
                  key={uuid4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p> not allow to see employees</p>
      )}
    </div>
  );
}

export default App;
