import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Container from "@mui/material/Container";

import Home from "./Pages/Home";

import Navbar from "./Components/Navbar";

import "./App.css";

function App() {
	const theme = createTheme({
		palette: {
			common: {
				// black: "#000000",
			},
		},
		// contrastThreshold: 3,
		// tonalOffset: 0.2,
	});

	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<Container>
					<BrowserRouter>
						<Navbar />
						<Routes>
							<Route path="/" element={<Home />} />
						</Routes>
					</BrowserRouter>
				</Container>
			</ThemeProvider>
		</div>
	);
}

export default App;
