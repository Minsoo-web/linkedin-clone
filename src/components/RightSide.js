import React from "react";
import styled from "styled-components";

const RightSide = () => {
  return (
    <Container>
      <FollowCard>rightside</FollowCard>
    </Container>
  );
};

export default RightSide;

const Container = styled.div`
  grid-area: rightside;
`;

const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: white;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgba(0 0 0 / 15%), 0 0 0 rgba(0 0 0 / 20%);
  padding: 12px;
`;
