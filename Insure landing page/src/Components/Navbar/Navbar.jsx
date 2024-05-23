import Logo from './logo.svg';

const Navbar = () => {
  return (
    <div className="navigation">
        <nav>
            <img src={Logo}></img>

            <ul>
                <li>How we work</li>
                <li>Blog</li>
                <li>Account</li>
                <a>View Plans</a>
            </ul>

        </nav>
    </div>
  )
}

export default Navbar