import { ParamUser } from "../model/ParamUser";

interface NavBarProps {
  paramUser: ParamUser;
}

const NavBar = ({ paramUser }: NavBarProps) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand">Welcome {paramUser.firstName}!</span>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/parameters"
                >
                  Parameters
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-current="page" href="#">
                  Settings
                </a>
              </li>
            </ul>
          </div>
          <span className="navbar-brand">{paramUser.email}</span>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
