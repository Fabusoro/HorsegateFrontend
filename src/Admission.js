import { useEffect, useState } from "react";
import './profile.css';
import { toast } from 'react-toastify';

const Admission = () =>
{

    const [firstName, firstNamechange] = useState("");
    const [lastName, lastNamechange] = useState("");
    const [address, addresschange] = useState("");
    const [email, emailchange] = useState("");
    const [phoneNumber, phoneNumberchange] = useState("");
    const [role, rolechange] = useState("");

    const handleAdmission = (e) =>
    {
        e.preventDefault();
        let reg = { firstName, lastName, email, role, address, phoneNumber};
        console.log(reg);

        fetch("https://localhost:7110/api/Email/recieve-admission", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(reg)
        }).then((res) =>
        {
            console.log(res);
            toast.success('Registration Successful')
        }).catch((res) =>
        {
            toast.error('Registration Failed: ' + res.message);
        });
    }

    return (
        <div>
            <div className="login-form-container">
                <form  onSubmit={handleAdmission} className="login-form">
                    <label className="input-label">First Name</label>
                    <input className="inpute" type="text" placeholder="First Name" name="firstname" value={firstName} onChange={e => firstNamechange(e.target.value)}></input>
                    <label className="input-label">Last Name</label>
                    <input className="inpute" type="text" placeholder="Last Name" name="lastname" value={lastName} onChange={e => lastNamechange(e.target.value)}></input>
                    <label className="input-label">Email</label>
                    <input className="inpute" type="email" placeholder="Email" name="Email" value={email} onChange={e => emailchange(e.target.value)}></input>
                    <label className="input-label" for="class-names">Role</label>
                    <select className="select-area" value={role} onChange={e => rolechange(e.target.value)} name="Role" id="class-names">
                        <option>Student</option>
                        <option>Teacher</option>
                    </select>
                    <label className="input-label">Address</label>
                    <input className="inpute"  placeholder="Address" name="Password" value={address} onChange={e => addresschange(e.target.value)}></input>
                    <label className="input-label">Phone Number</label>
                    <input className="inpute" required type="tel" placeholder="PhoneNumber" name="Phone Number" value={phoneNumber} onChange={e => phoneNumberchange(e.target.value)}></input>
                    <button type="submit" className="button">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Admission;