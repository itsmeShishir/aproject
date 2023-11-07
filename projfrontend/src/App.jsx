import { Routes, Route } from "react-router-dom";
import MainLayouts from "./pages/main";
import Homepage from "./pages/homepage";
import BlogPage from "./pages/blogpage";
import ContactUs from "./pages/contactus";
import PageError from "./pages/404page";
import SigninPage from "./pages/signinpage";
import SignupPage from "./pages/signuppage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayouts />}>
        <Route index element={<Homepage />} />
        <Route path="blogs" element={<BlogPage />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="signin" element={<SigninPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="*" element={<PageError />} />
      </Route>
    </Routes>
  );
}

export default App;
