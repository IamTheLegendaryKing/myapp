import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import Employee from "./components/Employees";
import "./index.css";
import { useState } from "react";
import { v4 as uuid4 } from "uuid";

function App() {
  const [role, setRole] = useState();
  const [employee, setEmployee] = useState([
    {
      id: 1,
      name: "Melvan",
      role: "King 1",
      img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.worldhistory.org%2Fimg%2Fr%2Fp%2F500x600%2F10138.jpg%3Fv%3D1654797002&tbnid=1YWPNepjY9LSAM&vet=12ahUKEwicuID9zb6EAxVPQaQEHW75D6MQMygEegQIARB9..i&imgrefurl=https%3A%2F%2Fwww.worldhistory.org%2FMansa_Musa_I%2F&docid=6C2PxJ7T7T4VBM&w=387&h=379&q=mansa%20musa&ved=2ahUKEwicuID9zb6EAxVPQaQEHW75D6MQMygEegQIARB9",
    },
    {
      id: 2,
      name: "MPT",
      role: "King 2",
      img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmalevus.com%2Fwp-content%2Fuploads%2F2023%2F10%2FSolomon-When-He-Became-King-3.jpg&tbnid=OY3YtPNruaCq8M&vet=12ahUKEwjnj7WLzr6EAxVWVKQEHWUDACwQMygMegUIARCOAQ..i&imgrefurl=https%3A%2F%2Fmalevus.com%2Fhow-old-was-solomon-when-he-became-king%2F&docid=6_ytK5ckcnSihM&w=1450&h=1436&q=king%20solomon&ved=2ahUKEwjnj7WLzr6EAxVWVKQEHWUDACwQMygMegUIARCOAQ",
    },
    {
      id: 3,
      name: "rogM",
      role: "King 3",
      img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.mariegranieri.com%2Fwp-content%2Fuploads%2F2020%2F04%2Fdavid-2.jpg&tbnid=pqCsPeVcuKVWZM&vet=12ahUKEwja47iizr6EAxUFTKQEHXzfAOMQMygSegUIARCaAQ..i&imgrefurl=https%3A%2F%2Fwww.mariegranieri.com%2Fdavids-kingship-worthy-of-praise-or-protest%2F&docid=OWah3yH4jhs2WM&w=546&h=674&q=king%20david&ved=2ahUKEwja47iizr6EAxUFTKQEHXzfAOMQMygSegUIARCaAQ",
    },
    {
      id: 4,
      name: "man8",
      role: "King 4",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRIt155ueZZVfr05fjk2GYavF0EYvv1Twljg&usqp=CAU",
    },
  ]);

  //update employee state
  function updateEmployee(id, newName, newRole) {
    const updateEmployee = employee.map((employee) => {
      if (id == employee.id) {
        return { ...employee, name: newName, role: newRole };
      }
      return employee;
    });
    setEmployee(updateEmployee);
  }

  function NewEmployee(name, role, img) {
    NewEmployee = {
      id: uuid4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployee([...employee, NewEmployee]);
  }

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
              const editEmployee = (
                <EditEmployee
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  updateEmployee={updateEmployee}
                />
              );
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  editEmployee={editEmployee}
                />
              );
            })}
          </div>
          <AddEmployee NewEmployee={NewEmployee} />
        </>
      ) : (
        <p> not allow to see employees</p>
      )}
    </div>
  );
}

export default App;
