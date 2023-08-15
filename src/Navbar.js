import {Link} from "react-router-dom"
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" style={{color: "white", fontSize: "30px"}}>AI Code Training</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to="/Mainpage" style={{color: "white", fontSize: "20px"}}> Home </Link>
            </li>
            <br/>
            <li class="nav-item">
            <Link to="/Lessons" style={{color: "white", fontSize: "20px"}}> Lessons </Link>
            </li>
            <br/>
            <li class="nav-item">

            <Link to="/Challenges" style={{color: "white", fontSize: "20px"}}> Challenges </Link>
              
            </li>
            <br/>
            <li class="nav-item">
            <Link to="/Settings" style={{color: "white", fontSize: "20px"}}> Settings </Link>
            </li>
            <br/>
            <li> 
              <Link to="/Profile" style={{color: "white", fontSize: "20px"}}> Profile</Link>
            </li>
            <br/>
            <li> Profile </li>
          </ul>
         <div align="right">
          <form class="form-inline my-2 my-lg-0">
      
           <span> Login: <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{padding: 10}}/></span>
            
          </form>
          
          </div> 
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
          <div align="right"> <button class="btn btn-outline-success my-2 my-sm-0" type="submit"> FAQ </button></div>
          
        </div>
                  </nav>
    );
}
export default Navbar;