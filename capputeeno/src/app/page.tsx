"use client"

import {FilterBar} from "@/components/filter-bar";
import {ProductsList} from "@/components/products-list";
import {QueryClient} from "@tanstack/react-query";
import styled from "styled-components";
import {inspect} from "util";

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 24px;
  background-color: var(--bg-primary);
  
  @media(min-width: ${props => props.theme.desktopBreakpoint}) {
    padding: 34px 160px;
  }
`

export default function Home() {
  const client = new QueryClient();
  return (
    <PageWrapper>
      <FilterBar/>
      <ProductsList/>
    </PageWrapper>
  )
}
