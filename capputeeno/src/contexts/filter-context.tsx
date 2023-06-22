"use client"

import {createContext, ReactNode, useState} from "react";
import {FilterType} from "@/types/filter-type";
import {PriorityTypes} from "@/types/priority-types";

export const FilterContext = createContext({
    search: "",
    page: 0,
    type: FilterType.ALL,
    priority: PriorityTypes.NEWS,
    setPriority: (priority: PriorityTypes) => {},
    setSearch: (search: string) => {},
    setPage: (page: number) => {},
    setType: (type: FilterType) => {}
})

interface ProviderProps {
    children: ReactNode
}

export function FilterContextProvider({children}: ProviderProps) {
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(0);
    const [type, setType] = useState(FilterType.ALL);
    const [priority, setPriority] = useState(PriorityTypes.NEWS);
    return (
        <FilterContext.Provider value={{
            search,
            page,
            type,
            priority,
            setPriority,
            setPage,
            setSearch,
            setType
        }}>
            {children}
        </FilterContext.Provider>
    )
}
