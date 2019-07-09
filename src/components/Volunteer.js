import React from 'react';
import { Link } from 'react-router-dom'

const Volunteer = () => {
    return (

        <div>
            <div className="container">
                <Link to="/createVolunteer" className="btn waves-effect waves-teal"><i className="material-icons left"></i>Become Member</Link>
            </div>

            <div className="container">
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
                            <td>Alvin</td>
                            <td>+918131823812</td>
                            <td>02/07/2016</td>
                        </tr>
                        <tr>
                            <td>Alan</td>
                            <td>+918131823812</td>
                            <td>02/07/2016</td>
                        </tr>
                        <tr>
                            <td>Jonathan</td>
                            <td>+918131823812</td>
                            <td>02/07/2016</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>



    )
}

export default Volunteer