"use client"

import styled from "styled-components";

import {Saira_Stencil_One} from 'next/font/google'
import {PrimaryInputWSearchIcon} from "@/components/primary-input";
import {CartControl} from "@/components/cart-control";
import {useFilter} from "@/hooks/useFilter";
import {useRouter} from "next/navigation";

const sairaStencial = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin']
})

interface HeaderProps {

}

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    padding: 20px 160px;
  }
`

const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  cursor: pointer;

  @media (min-width: ${props => props.theme.tabletBreakpoint}) {
    font-size: 24px;
  }

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    font-size: 40px;
  }
`

export function Header(props: HeaderProps) {
  const {setSearch, search} = useFilter()
  const router = useRouter();
  const handleLogoClick = () => {
    router.push('/')
  }
  return (
    <TagHeader>
      <Logo className={sairaStencial.className} onClick={handleLogoClick}>Capputeeno</Logo>
      <div>
        <PrimaryInputWSearchIcon
          placeholder={"Procurando por algo específico?"}
          value={search}
          handleChange={setSearch}
        />
        <CartControl/>
      </div>
    </TagHeader>
  )
}
