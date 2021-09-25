import React,{useState,useEffect} from 'react';
import { useHistory } from 'react-router';
import firebaseDB from './firebase';

const Home = () => {
    let history = useHistory();
    const [data,setData] = useState({
        firstname:"",
        lastname:"",
        email:"",
    })
    const [getData,setGetData] = useState({});
    useEffect(() =>{
        firebaseDB.child('register').on('value', details =>{
            console.log(details.val());
            setGetData(details.val());
        })
    },[])
    const {firstname,lastname,email} = {...data}
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value});
    }
    const submitHandler = async(e) =>{
        e.preventDefault();
        var dataAdded = await firebaseDB.child('register').push(
         data,
        err =>{
            if (err){
                console.log(err);
            }
            else{
                alert("Data added")
            }
        }
        )
        setData({
            firstname:"",
            lastname:"",
            email:"",
        })
    }
    const deleteHandler = key => {
        firebaseDB.child(`register/${key}`).remove(
            err => {
                if (err){
                    console.log(err)
                }
            }
        )
    }
    return (
        <div>
        <h2 style={{"textAlign":"center"}}>Register Form</h2><br />
        <form className="form-horizontal" onSubmit={submitHandler} autoComplete="off">
            <div className="form-group">
            <label className="control-label col-sm-2">First Name:</label>
            <div className="col-sm-4">
                <input type="text" className="form-control"placeholder="First Name" name="firstname" value={firstname} onChange={changeHandler}/>
            </div>
            </div>
            
            <div className="form-group">
            <label className="control-label col-sm-2">Last Name:</label>
            <div className="col-sm-4">          
                <input type="text" className="form-control" placeholder="Last Name" name="lastname" value={lastname} 
                onChange={changeHandler}/>
            </div>
            </div>

            <div className="form-group">
            <label className="control-label col-sm-2">Email:</label>
            <div className="col-sm-4">          
                <input type="email" className="form-control" placeholder="Enter Email" name="email" value={email} 
                onChange={changeHandler}/>
            </div>
            </div>
            
            <div className="form-group">        
            <div className="col-sm-offset-2 col-sm-10">
                <input type="submit" className="btn btn-success" 
                value="Submit" />
            </div>
            </div>
    </form>
    <div>
        {getData && 
        Object.keys(getData).map(key => 
            <div className="border">
                <p>FirstName : {getData[key].firstname}</p>
                <p>LastName : {getData[key].lastname}</p>
                <p>Email : {getData[key].email}</p>

                <button className="btn btn-success"
                onClick={() => history.push(`/edit?firstname=${getData[key].firstname}&lastname=${getData[key].lastname}&email=${getData[key].email}&key=${key}`)}
                >Update</button> &nbsp;

                <button className="btn btn-danger" 
                onClick={() => deleteHandler(key)}
                >Delete</button>
            </div>)
        }
    </div>
        </div>
    )
}

export default Home;
