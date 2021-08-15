import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { useState, useEffect, Dispatch } from "react";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

function getSavedValues(key: string, initialValue: any) {
  const savedValue = JSON.parse(localStorage.getItem(key)!);
  if (savedValue) return savedValue;

  if (initialValue instanceof Function) return initialValue();

  return initialValue;
}

export function useLocalStorage<T>(
  key: string,
  initialValue: any
): [T, Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    return getSavedValues(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
