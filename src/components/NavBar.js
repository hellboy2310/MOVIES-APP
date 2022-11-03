import {Component} from "react";
import { Link } from "react-router-dom";

class NavBar extends Component{
    render(){
        return(
            <>
            <div style = {{display:"flex",padding:"0.5rem",color:"blue"}}>
                <Link style={{textDecoration:"none"}} to='/'><h1>Movies App</h1></Link>
            <Link  style={{textDecoration:"none"}} to='favourites/'><h2 style = {{marginLeft:"2rem",marginTop:"0.5rem"}}>Favourites</h2></Link>
            
            
            </div>
            </>
            
            )
    }
}
export default NavBar