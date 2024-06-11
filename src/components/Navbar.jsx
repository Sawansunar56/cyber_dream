import "./styles/navbar.css";

function Navbar() {
    return (
        <nav>
            <div className="leftSide">
            </div>
            <div className="middleSide">
                <ul>
                    <li>Projects</li>
                    <li>Skills</li>
                    <li>About me</li>
                    <li>Portfolio</li>
                </ul>
            </div>
            <div className="rightSide">
                <ul>
                    <li> Icon 1
                    </li>
                    <li> Icon 2
                    </li>
                    <li> Icon 3
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
