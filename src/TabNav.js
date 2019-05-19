import React, { useRef, useState, useLayoutEffect } from 'react';
import styled from '@emotion/styled';

const StledTabNav = styled.nav`
  ul {
    background: white;
    padding: 0;
    position: relative;
  }
`;

const StyledLi = styled.li`
  border: none;
  list-style: none;
  display: inline-block;
  padding: 16px;
  cursor: pointer;
  color: #007bff;
  width: 280px;
  ${({ active }) =>
    active &&
    `
        background: #ebeced;
        color: blue;
      `};
`;

const StyledHr = styled.hr`
  height: 4px;
  bottom: 0;
  background: #007bff;
  border: 1px solid #007bff;
  border-radius: 5px 5px 0 0;
  width: 100%;
  border: none;
  position: absolute;
  margin: 0;
  transition: left .3s ease-in-out;
  max-width: ${({ width }) => `${width}px`};
  left: ${({ width, index }) => `${width * index + 1}px`};
`;

export default function TabNav({ tabList = [], activeIndex, onClick }) {
  const ref = useRef(null);
  const [ w, setW ] = useState(280);
  useLayoutEffect(
    () => {
      setW(ref.current.clientWidth);
    },
    [ ref ]
  );
  return (
    <StledTabNav>
      <ul>
        {tabList.map((tab, idx) => (
          <StyledLi active={activeIndex === idx} ref={ref} key={idx} onClick={() => onClick(idx)}>
            {tab} {idx}
          </StyledLi>
        ))}
        <StyledHr index={activeIndex} width={w} />
      </ul>
    </StledTabNav>
  );
}
