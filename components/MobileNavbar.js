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
  background-color:background: rgb(0,0,0);
background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(98,98,98,1) 0%, rgba(176,176,176,1) 54%, rgba(57,57,57,1) 100%, rgba(0,0,0,1) 100%);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);


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
