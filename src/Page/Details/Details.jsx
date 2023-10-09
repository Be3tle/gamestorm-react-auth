/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetAllData from "../../hooks/useGetAllData";
import DetailsCard from "./DetailsCard";
import Navbar from "../../Components/Header/Navbar";

const Details = () => {
  const { id } = useParams();

  console.log(id);

  //useCustomHook
  const [cards, isLoading] = useGetAllData();

  const [card, setCard] = useState({});

  useEffect(() => {
    if (cards) {
      const findSingleCard = cards?.find((singleCard) => singleCard.id == id);
      setCard(findSingleCard);
    }
  }, [id, cards]);

  // console.log(card);

  return (
    <div>
      <Navbar></Navbar>
      <DetailsCard card={card}></DetailsCard>
    </div>
  );
};

export default Details;
