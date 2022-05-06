import img from './img.png'
export default function Navbar(){
    return(
        <div>
            <img src={img} name="Image1" align="bottom" width={215} height={35} border={0} />
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                {/* <a class="navbar-brand" href="#"><img src={img} name="Image1" align="bottom" width={215} height={35} border={0} /></a> */}
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="/">Home<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">ARPA/Internet</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/Videos">Videos</a>
                </li><li class="nav-item">
                    <a class="nav-link" href="/">Newell Report</a>
                </li><li class="nav-item">
                    <a class="nav-link" href="/">Attendees</a>
                </li>
                </ul>
            </div>
            </nav>
        </div>
    )

}