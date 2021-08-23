import React,{useState} from 'react'





const personList=[
    {
        name:"John",
        lastName:"Jackel",
        email:"Johnjackel@gmail.com",
        id:1,
    },
    {
        name:"Freedy",
        lastName:"stolz",
        email:"stolz@gmail.com",
        id:2,
     },
     {
        name:"Johnsen",
        lastName:"Nagot",
        email:"Johsennagot@gmail.com",
        id:3,
     },
     {
        name:"Jakson",
        lastName:"James",
        email:"Jamesjakson@gmail.com",
        id:4
     },
     {
        name:"Ali",
        lastName:"Muradi",
        email:"muradi@gmail.com",
        id:4
     },
     {
        name:"Murtaza",
        lastName:"Murtaza",
        email:"Murtazason@gmail.com",
        id:4
     },
     {
        name:"Mohammadi",
        lastName:"Frosh",
        email:"mohammadi@gmail.com",
        id:4
     },
     

]
function UserList() {


  
    const [state,setState]=useState({
        isClick:false,
        fullname:""
    })

    const clickHandler=()=>{
       setState({isClick:true,fullname:"Khushal"})
    }
    return (
        <div >
            <h1 >Click the button!</h1>
            <button onClick={clickHandler}>Show Info</button>
            <div>
                {state.isClick ? personList.map(result=> <p>{result.id} -  {result.name} - {result.lastName} - {result.email}</p>):null}
                <p>{state.fullname}</p>
            </div>
        </div>
    )
}

export default UserList

