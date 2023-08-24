import Link from 'next/link';
import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { MdFitnessCenter } from 'react-icons/md';
import { BiFoodMenu, BiCalculator, BiHome } from 'react-icons/bi';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5vh;
  background-color: whitesmoke;
 box-shadow: 0 0.5px 1px 0 rgba(0, 0, 0, 0.2);





a { 
  margin-right: 16px;
  color: #222;
  text-decoration: none;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;


  &:hover {
    color: #f4f4f4;
  }

  &:last-child {
    margin-right: 5px;
  }
  &:first-child {
    margin-left: 5px;
  }
`;

function MobileNavbar() {
  return (
    <NavbarContainer>
      <Link href="/">
        <BiHome size={'1.5em'} />
      </Link>
      <Link href="/exercises">
        <MdFitnessCenter size={'1.5em'} />
      </Link>
      <Link href="/recipe">
        <BiFoodMenu size={'1.5em'} />
      </Link>
      <Link href="/calculator">
        <BiCalculator size={'1.5em'} />
      </Link>
    </NavbarContainer>
  );
}

export default MobileNavbar;
