import styled from 'styled-components';
import Socials from './Socials';
import Image from 'next/image';
import Link from 'next/link';
import lib from './lib';

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  -webkit-box-shadow: 0 10px 6px -6px black;
  -moz-box-shadow: 0 10px 6px -6px black;
  box-shadow: 0 10px 6px -6px black;
  background: var(--grayD);
  @media (max-width: 1080px) {
    padding: 2rem;
  }
  @media (max-width: 695px) {
    flex-direction: column;
  }
`;
const Logo = styled.section`
  display: flex;
  width: 10%;
  max-width: 10%;
  padding-left: 2rem;
  @media (max-width: 1080px) {
    display: none;
  }
`;
const NavSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 35%;
  font-size: 2rem;
  font-family: var(--nunitoB);
`;
const Link1 = styled(Link)`
  border: 5px solid var(--grayMD);
`;
const Span = styled.span`
  border: 5px solid var(--grayD);
  &:hover {
    padding: 1rem;
    cursor: pointer;
    color: var(--teal);
    border-radius: 5px;
    border: 5px outset var(--purple);
  }
`;

export default function Navigation() {
  const { navigation } = lib();
  return (
    <Section>
      <Logo>
        <Image
          src={navigation.logo.icon}
          alt={navigation.logo.name}
          width={100}
          height={100}
        />
      </Logo>
      <Socials />
      <Nav />
    </Section>
  );
}

function Nav() {
  return (
    <NavSection>
      <Link1 href='#about'>
        <Span>&nbsp;About</Span>
      </Link1>
      <Link1 href='#helm'>
        <Span>&nbsp;Helm</Span>
      </Link1>
      <Link1 href='#process'>
        <Span>&nbsp;Process</Span>
      </Link1>
      <Link1 href='#enlist'>
        <Span>&nbsp;Enlist</Span>
      </Link1>
      <Link1 href='#faqs'>
        <Span>&nbsp;FAQs</Span>
      </Link1>
    </NavSection>
  );
}
