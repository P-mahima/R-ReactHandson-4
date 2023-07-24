import React, { useState } from "react";
import '../App.css'

const Student = () => {
    const[data] = useState([
        {
            Name:"Mahima",
            Age:23,
            Course : "MERN",
            Batch: "EA23",
            Change : "Edit"
        },
        {
            Name:"Mahima",
            Age:23,
            Course : "MERN",
            Batch: "EA23",
            Change : "Edit"
        },
        {
            Name:"Mahima",
            Age:23,
            Course : "MERN",
            Batch: "EA23",
            Change : "Edit"
        },
        {
            Name:"Mahima",
            Age:23,
            Course : "MERN",
            Batch: "EA23",
            Change : "Edit"
        },
        {
            Name:"Mahima",
            Age:23,
            Course : "MERN",
            Batch: "EA23",
            Change : "Edit"
        },
        {
            Name:"Mahima",
            Age:23,
            Course : "MERN",
            Batch: "EA23",
            Change : "Edit"
        }

    ])
    return(
        <div>
            <div className="studentadd">
            <h1 className="student">Student List</h1>
            <button className="Btn">Add Student</button>
            </div>
            <div>
                <table className="table" border={1} >
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Batch</th>
                        <th>Change</th>
                    </tr>
                    
                        {
                            data.map((item, index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{item.Name}</td>
                                        <td>{item.Age}</td>
                                        <td>{item.Course}</td>
                                        <td>{item.Batch}</td>
                                        <td className="edit">{item.Change}</td>
                                    </tr>
                                )
                            })
                        }
                    
                </table>
            </div>
        </div>
    )
}
export default Student