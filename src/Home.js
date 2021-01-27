import React,{useState,useEffect} from 'react'

function Home({ history }) {
    const [data,setData]=useState([
        {
        "id": 1,
        "name": "test1",
        "age": "11",
        "gender": "male",
        "email": "test1@gmail.com",
        "phoneNo": "9191919191"
        },
        {
        "id": 2,
        "name": "test2",
        "age": "12",
        "gender": "male",
        "email": "test2@gmail.com",
        "phoneNo": "9292929292"
        },
        {
        "id": 3,
        "name": "test3",
        "age": "13",
        "gender": "male",
        "email": "test3@gmail.com",
        "phoneNo": "9393939393"
        },
        ]
        )
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("login"))
        if (!token)
        {
            history.push("/")
            }
    }, [localStorage])
    const logOutHandler = () => {
        localStorage.removeItem("login")
        history.push("/")
    }
    return (
        <div>
            <div className="logout">
                <button className="btn2" onClick={()=>logOutHandler()}>Log-Out</button>
            </div>
            <div className="data">
               { data.map((Element)=>(
                 <div className="card" key={Element.id}>
                    <h3> Name :{Element.name}</h3>
                    <h4> Age : {Element.age }</h4>
                    <p1> gender : {Element.gender }</p1>
                    <p1> email : {Element.email }</p1>
                    <p1> phoneNo : {Element.phoneNo }</p1>
                 </div>
                ))}
            </div>
        </div>
    )
}

export default Home
