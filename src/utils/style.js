import styled from "styled-components";

export const Title = styled.h3`
  ${(props) => {
    if (props.size === "small") {
      return "font-size: 18px;";
    } else if (props.size === "large") {
      return "font-size: 35px;";
    } else {
      return "font-size: 24px;";
    }
  }}
`;
export const CardList = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: block;
  }
`;
export const Card = styled.section`
  margin: 10px auto;
  font-size: 18px;
  font-weight: 600;
  border: 3px solid rgb(159, 104, 99, 0.6);
  width: 30%;
  background-color: rgb(136, 91, 94, 0.5);
  @media (max-width: 768px) {
    width: 80%;
  }
`;
export const CardSection = styled(CardList)`
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1024px) {
    display: block;
  }
  @media (max-width: 768px) {
    display: flex;
  }
  @media (max-width: 440px) {
    display: block;
  }
`;
export const Image = styled.img`
  height: 120px;
  width: 120px;
`;
export const Form = styled.section`
  margin: 0 auto;
  padding: 30px;
`;
export const Input = styled.input`
  border: 3px solid rgb(159, 104, 99, 0.1);
  border-right: none;
  padding: 1px 2px;
  width: 60%;
  height: 34px;
  background-color: rgb(159, 104, 99, 0.1);
  font-size: 18px;
  color: white;
  outline: none;
  &::placeholder {
    color: lightgrey;
    text-align: center;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`;
export const Button = styled.button`
  border: 3px solid rgb(159, 104, 99, 0.1);
  padding: 1px 6px;
  height: 34px;
  width: 34px;
  background-color: rgb(159, 104, 99, 0.1);
  font-size: 18px;
  color: lightgrey;
  outline: none;
  cursor: pointer;
`;
