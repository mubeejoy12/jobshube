
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";
import Hero from "../components/Hero";
import Clients from "../components/Clients";
import About from "../components/About";
import Services from "../components/Services";
import Action from "../components/Action";
import Team from "../components/Team";
import Faq from "../components/Faq";
import Contacts from "../components/Contacts";
import NewsletterSubscription from "../components/NewsLetter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Box>
    
      <Box
        sx={{ height: "64px", background: "#36517e",  }}
      />{" "}
      {/* Spacer for Navbar */}
      <Hero />
      <Clients />
      <About />
      <Services />
      <Action/>
      <Team/>
      <Faq/>
      <Contacts/>
      <NewsletterSubscription/>
      <Footer/>
    </Box>
  );
};

export default Home;
