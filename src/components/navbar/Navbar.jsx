import logo from '../../assets/images/navbar/logo.png'

const Navbar = () => {
    return (
        <nav className='p-5 pr-8 flex justify-between'>
            <div id="part-1">
                <a href="/">
                    <img src={logo} alt="" className='h-16 w-16' />
                </a>
            </div>

            <div id="part-2" className='flex items-center justify-center gap-20 mr-10'>
                <h1>Projects</h1>
                <h1>Expertises</h1>
                <h1>The team</h1>
                <h1>Contact</h1>
            </div>
        </nav>
    )
}

export default Navbar
