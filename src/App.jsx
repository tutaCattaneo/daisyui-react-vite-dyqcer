import { useState } from 'react';
import './App.css';

function App() {
   const datos =[{
     id:1,
     title: 'Iron man',
     year:2008,
   },{
      id:2,
      title:'Spiderman: Homecoming',
      year:2017,
   },{
     id:3,
     title:'Avengers: Endgame',
     year:2019
   
   }]
    const getDatos =()=>{
      return new Promise((resolve,reject)=>{
        if(datos.length ==0){
          reject(new Error('no existen los datos'))
        }
          setTimeout(()=>{
             resolve(datos)
          },1500);
      })
    }
    async function fetchingData(){
      try{
        const datosFetched = await getDatos();
        console.log(datosFetched);
      }catch(err){
        console.log(err)
      }
   }
   fetchingData();
    

  return (
    <div className="App">
         
    </div>
  );
}

export default App;
