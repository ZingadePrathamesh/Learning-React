
import femaleProfile from '../images/female_profile.png';
import maleProfile from '../images/male_profile.png';

const Employees = ({selectedTeam, employees, handleEmployeeChange, handleTeamSelection})=>{
    

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
                                  style={{width:14 + "rem", cursor: "pointer"}} onClick={handleEmployeeChange}>
                            {(emp.gender==="female") 
                                      && <img src={femaleProfile} className="card-img-top" style={{height:14 + "rem", width:14 + "rem"}}></img>}
                            {(emp.gender==="male") 
                                      && <img src={maleProfile} className="card-img-top" style={{height:14 + "rem", width:14 + "rem"}}></img>}
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