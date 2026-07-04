import Link from "next/link"
function Navbar() {
    return (
        <nav className="w-full h-20 bg-slate-950">
            <div className="h-15 m-2">
                <div className="flex flex-row h-full w-full ">
                    <Link href="/" className="flex w-40 h-full flex-row">
                        
                        <h1 className="py-4 text-lg">VarietyNote</h1>
                    </Link>
                    <div className="flex justify-end items-center w-full  px-3 ">
                         
                        <div className="w-40 flex flex-row">
                            <Link id="navbar-options" href="#" >
                                <span className="w-20">Sign In</span>
                            </Link>
                            <Link href="#" id="navbar-options">
                                <span className="w-20">Sign Up</span>
                            </Link>
                        </div>
                       
                    </div>
                </div>
            </div>
        </nav>
    )
}
export { Navbar }
/*
<div className="w-full flex flex-row justify-center">
                            <Link href="#"  className="mx-2"><span>Option 1</span></Link>
                            <Link href="#"  className="mx-2"><span>Option 2</span></Link>
                            <Link href="#"  className="mx-2"><span>Option 3</span></Link>
                        </div>





<div className="mx-auto h-full relative justify-center px-5 sm:px-7 lg:px9">
                <div  className="flex flex-row h-full relative">
                    <Link href="/"  className="flex w-40 h-full flex-row">
                        <span>
                            <img src="hola2.jpg" className="w-full h-16 font-semibold " />
                        </span>
                        <h1 className="py-4 text-lg">VarietyNote</h1>
                    </Link>
                    <div className="flex justify-end items-center w-full  px-3 ">
                         <div className="w-full flex flex-row justify-center">
                            <Link href="#"  className="mx-2"><span>Option 1</span></Link>
                            <Link href="#"  className="mx-2"><span>Option 2</span></Link>
                            <Link href="#"  className="mx-2"><span>Option 3</span></Link>
                        </div>
                        <div className="w-40 flex flex-row">
                            <Link id="navbar-options" href="#" >
                                <span className="w-20">Sign In</span>
                            </Link>
                            <Link href="#" id="navbar-options">
                                <span className="w-20">Sign Up</span>
                            </Link>
                        </div>
                       
                    </div>
                </div>
            </div>

*/ 