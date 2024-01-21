import { useLoaderData } from 'react-router-dom';
import Services from '../../Components/Services/Services';
import Team from '../../Components/Team/Team';
import Header from '../../Components/Header/Header';
import Faq from '../../Components/FAQ/Faq';

const Home = () => {
  const cards = useLoaderData();
  return (
    <div className="text-center">
      <Header></Header>
      <Services cards={cards}></Services>
      <Team></Team>
      <Faq></Faq>
    </div>
  );
};

export default Home;
