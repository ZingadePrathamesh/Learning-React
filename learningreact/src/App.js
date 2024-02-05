
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter, Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import { useState, useEffect } from "react";
import Employees from './components/Employees';
import GroupedTeam from './components/GroupedTeam';
import Nav from './components/Nav';

function App() {
  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('Selected Team')) || "Team A")

  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('EmployeeList')) || [{
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

    useEffect(
      ()=>{
        localStorage.setItem('EmployeeList', JSON.stringify(employees))
      },[employees])

      useEffect(
      ()=>{
        localStorage.setItem('Selected Team', JSON.stringify(selectedTeam))
      },[selectedTeam])


    function handleTeamSelection(event) {
      setTeam(event.target.value);
    }

    function handleEmployeeChange(event){
      const transformedEmployee = employees.map((emp) => emp.id === parseInt(event.currentTarget.id)
      ?(emp.teamName === selectedTeam)?{...emp, teamName:''}:{...emp, teamName : selectedTeam}: emp);

      setEmployees(transformedEmployee);
    }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Header selectedTeam = {selectedTeam}
        employeeCount = {employees.filter(emp => emp.teamName === selectedTeam).length}/>
        <Routes>
          <Route path='/' element={<Employees 
            selectedTeam={selectedTeam}
            employees ={employees}
            handleEmployeeChange={handleEmployeeChange}
            handleTeamSelection={handleTeamSelection}
            />}
          />
          <Route path='/grouped-team' element = {<GroupedTeam/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
