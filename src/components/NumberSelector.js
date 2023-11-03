import styled from "styled-components";

export default function NumberSelector(props) {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const NumberSelectorHandler = (value) => {
    props.setSelectedNumber(value);
    props.setError("");
  };

  return (
    <NumberSelectorContainer>
      <p className="errorMsg">{props.error}</p>
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box isSelected={value === props.selectedNumber} key={i} onClick={() => NumberSelectorHandler(value)}>
            {value}
          </Box>
        ))}
      </div>
      <p style={{ color: props.checkBg() ? "white" : "black" }}>Select Number</p>
    </NumberSelectorContainer>
  );
}

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
  }

  p {
    font-size: 24px;
    font-weight: 700px;
  }

  .errorMsg {
    color: red;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700px;
  background-color: ${(props) => (props.isSelected ? "#ce4855" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
