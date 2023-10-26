import './Navbar.css';


export default function Navbar() {
    return(
      <div className="navbar">
        <div className="nav-right">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href='#' id='log'>Log in</a>
          <a href='#' id='sig'>Sign up</a>
        </div>
    </div>
    )
}

