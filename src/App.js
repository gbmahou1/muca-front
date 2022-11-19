import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./routes/landingPage/landingPage";
import SignUp from "./routes/signUp/signUpPage";

function App() {
  return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
			</Routes>
		</BrowserRouter>
  );
}

export default App;
