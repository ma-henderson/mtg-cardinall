import styled from "styled-components";
// name, small image, mana cost, setName,

export const cardsTrack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 12px;
  justify-items: space-between;
`;

export const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const CardName = styled.h3`
  font-size: 16px;
  color: #222;
  font-weight: 600;
  letter-spacing: 1px;
  text-align: left;
`;

export const CardMana = styled.span`
  font-size: 14px;
`;

export const CardImage = styled.div`
  background-image: url(${(props) => props.bg});
  width: 223px;
  height: 310px;
  background-size: 100% 100%;
`;

export const CardSetName = styled.h5`
  font-size: 11px;
`;
