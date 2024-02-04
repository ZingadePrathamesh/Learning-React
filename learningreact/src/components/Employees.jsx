import { useState } from "react";
import femaleProfile from '../images/female_profile.png';
import maleProfile from '../images/male_profile.png';

const Employees = (props)=>{
    const [selectedTeam, setTeam] = useState("Team A")

    const [employees, setEmployees] = useState([{
        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA"
      },
      {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA"
      },
      {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA"
      },
      {
        id: 4,
        fullName: "Sam Reynolds",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB"
      },
      {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB"
      },
      {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB"
      },
      {
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC"
      },
      {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC"
      },
      {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC"
      },
      {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD"
      },
      {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD"
      },
      {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD"
      }]);

      function handleTeamSelection(event) {
        setTeam(event.target.value);
      }

      function handleEmployeeChange(event){
        const transformedEmployee = employees.map((emp) => emp.id === parseInt(event.currentTarget.id)
        ?(emp.teamName === selectedTeam)?{...emp, teamName:''}:{...emp, teamName : selectedTeam}: emp);

        setEmployees(transformedEmployee);
      }

    return(
        <main className="container">
            <div className="row justify-content-center m-2">
                <div className = "col-6">
                  <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelection}>
                    <option value="Team A">Team A</option>
                    <option value="Team B">Team B</option>
                    <option value="Team C">Team C</option>
                    <option value="Team D">Team D</option>
                  </select>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className = "col-8">
                  <div className="card-collection">
                    {employees.map(emp =>
                        <div key={emp.id} id = {emp.id} className={(emp.teamName === selectedTeam)?'card m-3 standout':'card m-3'} 
                                  style={{width:18 + "rem", cursor: "pointer"}} onClick={handleEmployeeChange}>
                            {(emp.gender==="female") 
                                      && <img src={femaleProfile} className="card-img-top" style={{height:18 + "rem", width:18 + "rem"}}></img>}
                            {(emp.gender==="male") 
                                      && <img src={maleProfile} className="card-img-top" style={{height:18 + "rem", width:18 + "rem"}}></img>}
                            <div className="card-body">
                                <h5 className="card-title">Name: {emp.fullName}</h5>
                                <p className="card-text"><b>Designation: </b>{emp.designation}</p>
                            </div>
                        </div>
                    )}
                  </div>
                </div>
            </div>
        </main>
    );
}

export default Employees;