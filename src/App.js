import React,{ useState,useEffect } from 'react';
import './App.css';

function App() {
  const [endPoint,setEndpoint] = useState('')

  const [container,setContainer] = useState([])
  
  useEffect(()=>{
      fetchMe()
  },[endPoint])
  
  const fetchMe =()=>{

  fetch(`https://online-movie-database.p.rapidapi.com/auto-complete?q=+${endPoint}`, {
    "method": 'GET',
    "headers": {
      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
      'X-RapidAPI-Key': '35e269ebbcmshd43e1f48e086359p1f13a8jsnc3e6e63a38b0'
    }
  })
    .then(response =>{
      return response.json();
    })

    // data
    .then(data =>{
      setContainer(data.d)
    })

    .catch(err =>{
      console.log(err);
    });
  } 

    const onChangeHandler =(e)=>{
      setEndpoint(e.target.value)
    }

    const submitHandler =(e)=>{
      e.preventDefault()
    }

  return (
    <div className="App">

      <form onSubmit={submitHandler}>

         <input type='text' value={endPoint} onChange={onChangeHandler}/>
         <button type='submit'>Submit</button>

      </form> 

      {container.map((item)=>{
        return(
          <p>{item.l}</p>
        )
      })}
      
     
    </div>
  );
}

export default App;
