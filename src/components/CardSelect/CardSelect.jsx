import {
  cardsTrack,
  CardContainer,
  CardTop,
  CardName,
  CardMana,
  CardImage,
  CardSetName,
} from "./CardSelect.style";

const CardSelect = (props) => {
  return (
    <CardContainer>
      <CardTop>
        <CardName>{props.name}</CardName>
        <CardMana>{props.manaCost}</CardMana>
      </CardTop>
      <CardImage bg={props.imageUrl}></CardImage>
      <CardSetName>{props.setName}</CardSetName>
    </CardContainer>
  );
};
export default CardSelect;
