import AdminPanelEventPage from "./AdminPanelEventPage";
import AdminNavBar from "../components/AdminNavBar";
import React, {useEffect, useState} from "react";
import AdminUsersCard from "../components/AdminUsersCard";
import {backendUrl} from "../variables";
import CreateNewUserCard from "../components/CreateNewUserCard";
import {useLocation} from "react-router-dom";

function AdminPanelUsersPage() {
    const [users, setUsers] = useState([]);
    const [userIdSelected, setUserIdSelected] = useState(null);
    const [isCreatingUser, setIsCreatingUser] = useState(false);
    const [name, setName] = useState("");

    function getUsers() {
        fetch(`${backendUrl}/admin/getalluser`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setUsers(data);
            });
    }

    function createNewUser(username,password){
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        let urlencoded = new URLSearchParams();
        urlencoded.append("username", username);
        urlencoded.append("password", password);
        urlencoded.append("isAdmin", false);

        let requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: urlencoded,
            redirect: "follow",
            credentials: 'same-origin',
        };
        fetch(`${backendUrl}/admin/createuser`, requestOptions)
            .then(()=>{
                reload();
                setIsCreatingUser(false);
            });

    }

    function updateUser(userId,username,password){
        console.log(username)
        console.log(password)
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        let urlencoded = new URLSearchParams();
        urlencoded.append("userId", userId);
        urlencoded.append("username", username);
        urlencoded.append("password", password);

        let requestOptions = {
            method: "PUT",
            headers: myHeaders,
            body: urlencoded,
            redirect: "follow",
            credentials: 'same-origin',
        };
        fetch(`${backendUrl}/admin/updateuser`, requestOptions)
            .then(()=>{
                reload();
            });

    }

    function reload(){
        getUsers();
    }

    function deleteUser(){
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        let urlencoded = new URLSearchParams();
        urlencoded.append("userId", userIdSelected);

        let requestOptions = {
            method: "DELETE",
            headers: myHeaders,
            body: urlencoded,
            redirect: "follow",
            credentials: 'same-origin',
        };
        fetch(`${backendUrl}/admin/deleteuser`, requestOptions)
            .then(()=>{
                reload();
            });
    }

    useEffect(() => {
        getUsers();
        let username = sessionStorage.getItem("username");
        setName(username);
    }, [])
    return (
        <div>
            <AdminNavBar/>
            <form className='m-3 row'>
                <section className="col-md-3 col-sm-4 col-6 m-1">
                    <input type="search" className="form-control border border-dark h-100" id="userName"
                           placeholder="User Name"/>
                </section>
                <section className="col-md-2 col-sm-3 col-5 m-1">
                    <input type="search" className="form-control border border-dark h-100" id="userId"
                           placeholder="User ID"/>
                </section>
                <section className="col-md-2 col-sm-3 col-5 m-1">
                    <button type="button" className="btn btn-sm btn-dark one-line bg-deep-blue h-100 w-100">Find User
                    </button>
                </section>
                <section className="col-md-2 col-sm-3 col-5 m-1">
                    <select className="form-select border border-dark h-100" defaultValue="" aria-label="Order by">
                        <option value="">Order by</option>
                        <option value="location">Location</option>
                        <option value="eventId">Event ID</option>
                        <option value="eventName">Event Name</option>
                        <option value="dateAndTime">Date and time</option>
                    </select>
                </section>

                <section className="col-lg-1 col-md-2 col-sm-2 col-5 m-1">
                    <button onClick={() => {
                        setIsCreatingUser(!isCreatingUser)
                    }}
                            type="button"
                            className="btn btn-outline-light bg-transparent d-flex align-content-center justify-content-center h-100">
                        <i className="fa fa-circle-plus color-green fa-2x"></i>
                        <div className='color-green'>Create</div>
                    </button>
                </section>


                <section className="col-lg-1 col-md-2 col-sm-2 col-5 m-1">
                    <button type="button"
                            className="btn btn-outline-light bg-transparent d-flex align-content-center justify-content-around h-100"
                            onClick={deleteUser}
                    >
                        <i className="fas fa-trash-alt color-red fa-2x"></i>
                        <div className='color-red'>Delete</div>
                    </button>
                </section>
            </form>
            <div className="container">
                {
                    isCreatingUser&&
                    <div className="d-flex flex-row justify-content-center">
                        <CreateNewUserCard createNewUser={createNewUser}/>
                    </div>
                }

                <div className="row">
                    {
                        users && users.filter(user=>user.username!==name).map((user, index) => {
                            return (
                                <AdminUsersCard key={index} userId={user.UserId} username={user.username}
                                                password={user.password} setUserIdSelected={setUserIdSelected}
                                                isSelected={userIdSelected === user.UserId} updateUser={updateUser}/>
                            )
                        })
                    }

                </div>
            </div>

        </div>
    )
}

export default AdminPanelUsersPage;