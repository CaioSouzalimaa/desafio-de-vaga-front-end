import {useEffect, useState} from "react";

export function useLocalStorage<T>(item: string, initialValue: T) {
    const [value, setValue] = useState<T>(initialValue);

    useEffect(() => {
        if(typeof window !== "undefined"){
            const storageValue = localStorage.getItem(item);
            if(storageValue){
                setValue(JSON.parse(storageValue));
            }
        }
    },[window])

    const updateLocalStorage = (newValue: T) => {
        setValue(newValue);
        localStorage.setItem(item, JSON.stringify(newValue));
    }

    return{
        value,
        updateLocalStorage
    }
}
