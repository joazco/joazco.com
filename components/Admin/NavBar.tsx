import { Logout } from "@mui/icons-material";
import { IconButton } from "@mui/material";

type NavBarProps = {
  onClickLogout: () => void;
};

const NavBar = (props: NavBarProps) => {
  const { onClickLogout } = props;
  return (
    <div className="joazco--admin-navbar">
      <div className="joazco--admin-navbar-left">
        <div>
          <img src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/images%2Fjoazco_logo_blank_72x72.png?alt=media&token=00e5c472-469e-4683-8653-9205d0417fe5" />
        </div>
        <div>
          <h1>Joazco.com admin</h1>
        </div>
      </div>
      <div className="joazco--admin-navbar-right">
        <IconButton onClick={onClickLogout}>
          <Logout />
        </IconButton>
      </div>
    </div>
  );
};

export default NavBar;
