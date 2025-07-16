

 export const Navbar = () => {

    return(
        <nav>
            <div>
            <a href= " "><img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/13.2.1/images/header/primary-logo.svg" alt="" /></a>
            <button>supersaver</button>
             <span>select location</span>
            <input type="text" name = "text" placeholder="search for 'banana'"/>
            <button>Login</button>
            <button>Cart</button>
            </div>
            <div>
                <ul>
                    <li><a href="/">All</a></li>
                    <li><a href="/Cafe">Cafe</a></li>
                    <li><a href="/Home">Home</a></li>
                    <li><a href="/Toys">Toys</a></li>
                    <li><a href="/Fresh">Fresh</a></li>
                    <li><a href="/Electronincs">Electronics</a></li>
                    <li><a href="/Moblies">Moblies</a></li>
                    <li><a href="/Beauty">Beauty</a></li>
                    <li><a href="/Fashion">Fashion</a></li>
                </ul>
            </div>
        </nav>
    )


}