import { useLoaderData } from "react-router-dom";
import Services from "../../Components/Services/Services";
import Footer from "../../Components/Footer/Footer";
import Team from "../../Components/Team/Team";
import Navbar from "../../Components/Header/Navbar";
import Header from "../../Components/Header/Header";
import Faq from "../../Components/FAQ/Faq";

const Home = () => {
  const cards = useLoaderData();
  return (
    <div className="text-center">
      <Navbar></Navbar>
      <Header></Header>
      <Services cards={cards}></Services>
      <Team></Team>
      <Faq></Faq>
      <Footer></Footer>
    </div>
  );
};

export default Home;
