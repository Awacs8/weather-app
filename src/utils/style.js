import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
`;

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
  @media (max-width: 440px) {
    border: 3px solid rgb(105, 105, 105, 0.6);
    background-color: rgb(14, 14, 14, 0.6);
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
  display: flex;
  aligh-items: center;
  justify-content: center;
  padding: 50px 5px;
`;
export const Input = styled.input`
  border: 3px solid rgb(159, 104, 99, 0.1);
  border-right: none;
  padding: 1px 2px;
  width: 60%;
  height: 44px;
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
  @media (max-width: 440px) {
    border: 3px solid rgb(105, 105, 105, 0.6);
    background-color: rgb(14, 14, 14, 0.6);
    border-right: none;
  }
`;
export const Button = styled.button`
  display: inline-flex;
  padding: 1px 4px;
  height: 44px;
  width: 44px;
  border: 3px solid rgb(159, 104, 99, 0.1);
  border-left: none;
  background-color: rgb(159, 104, 99, 0.1);
  color: lightgrey;
  outline: none;
  cursor: pointer;
  @media (max-width: 440px) {
    border: 3px solid rgb(105, 105, 105, 0.6);
    background-color: rgb(14, 14, 14, 0.6);
    border-left: none;
    padding-top: 2px;
  }
`;
