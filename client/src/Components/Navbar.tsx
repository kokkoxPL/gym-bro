import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Navbar = () => {
	return (
		<div className="navbar">
			<AppBar>
				<Toolbar>
					<Link to={"/s"}>Gymbro</Link>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Navbar;
