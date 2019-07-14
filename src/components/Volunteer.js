import React from 'react';
import { Link } from 'react-router-dom'

const Volunteer = () => {

    return (

        <div>


            <div>
                <table className="highlight">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Joining Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Sandeep</td>
                            <td>+918131823812</td>
                            <td>02/07/2016</td>
                        </tr>
                        <tr>
                            <td>Aman</td>
                            <td>+918131823812</td>
                            <td>02/07/2016</td>
                        </tr>
                        <tr>
                            <td>Abhishek</td>
                            <td>+918131823812</td>
                            <td>02/07/2016</td>
                        </tr>
                    </tbody>
                </table>
                <div className="container">

                    <span>
                    <Link to="/createVolunteer" className="btn waves-effect waves-teal"><i className="material-icons left"></i>Become Member</Link><br/><br/>
                    <Link to="/keyPeople" className="btn waves-effect"><i className="material-icons left"></i>Key People</Link>
                    </span>
                </div>
            </div>

        </div>



    )
}

export default Volunteer