import img from './img.png'
import './Navbar.css'

export default function Navbar(){
    return(
        <div style={{fontFamily : 'western'}}>
            <div id="navbarTogglerDemo01">
            <img src={img} id="Image1" align="bottom" width={215} height={35} border={0} />
            <nav className="navbar navbar-expand-lg navbar-expand-sm navbar-light" id="nav_container">
            {/* <nav class="navbar navbar-expand-sm bg-light"> */}
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse">
                {/* <a class="navbar-brand" href="#"><img src={img} name="Image1" align="bottom" width={215} height={35} border={0} /></a> */}
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0"> */}
                <li class="nav-item">
                    <a class="nav-link" href="/">Home<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/Videos">Videos</a>
                </li><li class="nav-item">
                    <a class="nav-link" href="/Historical_Documents">Historical Documents</a>
                </li><li class="nav-item">
                    <a class="nav-link" href="/Program">Program</a>
                </li>
                </ul>
            </div>
            </nav>
            </div>
            {/* <img src={img} name="Image1" align="bottom" width={215} height={35} border={0} /> */}
        </div>
    )

}