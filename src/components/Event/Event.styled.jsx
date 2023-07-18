import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  border: 2px dashed ${(props) => props.theme.colors.black};
  // padding: 8px;
  // padding: ${(props) => props.theme.spacing * 2}px;
  padding: ${(props) => props.theme.spacing(2)};
  border-radius: 4px;
`;

export const EventName = styled.h2`
  margin-top: 0;
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export const Info = styled.p`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: ${(props) => props.theme.spacing(2)};
  color: ${(props) => props.theme.colors.primaryText};
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0.25px;

  //   &:hover,
  //   &:focus {
  //     background-color: red;
  //   }

  svg {
    display: block;
    margin-right: ${(props) => props.theme.spacing(2)};
    color: ${(props) => props.theme.colors.secondaryText};
  }
`;

// 1 variant:
// const setBgColor = ({ $eventType, theme }) => {
//   switch ($eventType) {
//     case "free":
//       return theme.colors.green;
//     case "paid":
//       return theme.colors.blue;
//     case "vip":
//       return theme.colors.red;
//     default:
//       return theme.colors.black;
//   }
// };

// export const Chip = styled.span`
//   position: absolute;
//   top: 4px;
//   right: 4px;
//   padding: ${(props) => props.theme.spacing(1)} ${(props) => props.theme.spacing(2)};
//   border-radius: 4px;
//   text-transform: uppercase;
//   color: ${props => props.theme.colors.white};
//   background-color: ${setBgColor};
// `;

// 2 variant:
export const Chip = styled.span`
  position: absolute;
  top: 4px;
  right: 4px;
  padding: ${(props) => props.theme.spacing(1)} ${(props) => props.theme.spacing(2)};
  border-radius: 4px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.white};
  background-color: ${({ $eventType, theme }) => {
    switch ($eventType) {
      case "free":
        return theme.colors.green;
      case "paid":
        return theme.colors.blue;
      case "vip":
        return theme.colors.red;
      default:
        return theme.colors.black;
    }
  }};
`;
