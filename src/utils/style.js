import styled from "styled-components";

export const Title = styled.h3`
  font-size: 20px;
`;
export const CardList = styled.div`
  display: flex;
`;
export const Card = styled.section`
  margin: 10px auto;
  font-size: 18px;
  font-weight: 600;
  border: white solid 2px;
  width: 30%;
  background-color: rgb(136, 91, 94, 0.5);
`;

export const Image = styled.img`
  height: 90px;
  width: 90px;
`;

// export const Description = styled.article`
//   float: left;
// `;

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
