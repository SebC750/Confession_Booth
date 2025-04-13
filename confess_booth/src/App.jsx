import { useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Button from "./components/Button"
import ConfessionCard from './components/ConfessionCard'
import API from "./api/api"
import { convertToDate } from './utilities'
const api = new API(import.meta.env.VITE_API)
function App() {
  const [data, setData] = useState(null)
  const [confession, setConfession] = useState(null)

  const apiAvailable = useRef(false)
  const handleApiCall = async () => {
    try{
      if(!apiAvailable.current){
        const response = await api.getAllConfessions();
        setData(response.confessions)
        apiAvailable.current = true;
        console.log(data)
      }
      else{
        return;
      }    
    }catch(e){
         console.log(e)
    }
  }
  const handleClick = async (id) => {
    console.log(id)
    const response = await api.getConfession(id)
    setConfession(response.confession)
    console.log(confession)
  } 
  /*
  useEffect(() => {
    async () => {
      const confessions = await api.getAllConfessions();
      console.log(confessions)
      setConfessions(confessions)
    }
  },[])
  */
  return (
    <>
    <Navbar/>
     <div className="container mt-5">
      <nav className="border border-top-0 border-start-0 border-end-0 d-flex justify-content-between">
        <h2 className="d-flex align-items-center gap-2"> <i class="bi bi-journal"></i> Today's penance </h2>
        <button className="btn btn-outline-dark d-flex align-items-center rounded-pill mb-2"> <i className="bi bi-plus fs-4"> </i>New confession </button>
      </nav>
          <div className="row">
            
          </div>
        <button className="btn btn-dark" onClick={() => handleApiCall()}> Test API </button>
        {data ? (<table className="table">
          <thead>
             <tr> 
               <td> ID </td>
               <td> Title </td>
               <td> Content </td>
               <td> Timestamp </td>
             </tr>
          </thead>
          <tbody>
               {data?.map((val) => (
                <tr key={val.id}>
                   <td> {val.id} </td>
                   <td> {val.title} </td>
                   <td> {val.content} </td>
                   <td> {convertToDate(val.submit_date._seconds, val.submit_date._nanoseconds)} </td>
                   <td> <button className="btn btn-primary" onClick={() => handleClick(val.id)}> Get record </button></td>
                </tr>
               ))}
          </tbody>
        </table>):<p> No data available. </p> }
        {confession && (<>
           <h4> {confession.id} </h4>
           <p> {confession.title} </p>
           <p> {confession.content} </p>
           <p> {convertToDate(confession.submit_date._seconds, confession.submit_date._nanoseconds)} </p>
        </>)

        }
     </div>
    </>
  )
}

export default App
