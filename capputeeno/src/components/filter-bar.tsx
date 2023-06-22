"use client"

import {FilterByType} from "@/components/filter-by-type";
import styled from "styled-components";
import {FilterByPriority} from "@/components/filter-by-priority";

interface FilterBarProps {

}

const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
  justify-content: space-between;
`

export function FilterBar(props: FilterBarProps) {
    return (
        <FilterContainer>
            <FilterByType/>
            <FilterByPriority/>
        </FilterContainer>
    )
}
