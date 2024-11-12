import axios from "axios"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { PRODUCT_GET_PENDING } from "../saga/main/action"

const Dashboard = () => {
    let [user, setUser] = useState([])
    let dispatch = useDispatch()

    let product = useSelector((state) => state.productReducer)
    console.log(product);



    let getUser = async () => {
        let get = await axios.get("http://localhost:3001/v1/user/recive", {
            headers: {
                "auth": `Bearer ${localStorage.getItem("token")}`
            }
        })
        console.log(get.data.user);
        let users = get.data.user
        setUser(users)
    }

    let deleteUser = async (id) => {
        let remove = await axios.delete(`http://localhost:3001/v1/user/delete/${id}`)
        console.log(remove);
    }

    useEffect(() => {
        getUser()
        dispatch({ type: PRODUCT_GET_PENDING })
    }, [])
    return (
        <div className="app">
            <table border={"2px"} cellPadding={"10px"} cellSpacing={"10px"}>
                <thead>
                    <tr>
                    <th>INDEX</th>
                    <th>EMAIL</th>
                    <th>PASSWORD</th>
                    <th>REMOVE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((val, index) => (
                            <tr key={val._id} style={{ textAlign: "center" }}>
                                <td>{index + 1}</td>
                                <td key={index}>{val.email}</td>
                                <td >{val.password}</td>
                                <td><button onClick={() => deleteUser(val._id)}>Delete User</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard