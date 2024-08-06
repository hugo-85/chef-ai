"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import {
  type ChefStore,
  createChefStore,
  initChefStore,
} from "@/app/store/chef-store";

export type ChefStoreApi = ReturnType<typeof createChefStore>;

export const ChefStoreContext = createContext<ChefStoreApi | undefined>(
  undefined
);

export interface ChefStoreProviderProps {
  children: ReactNode;
}

export const ChefStoreProvider = ({ children }: ChefStoreProviderProps) => {
  const storeRef = useRef<ChefStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createChefStore(initChefStore());
  }

  return (
    <ChefStoreContext.Provider value={storeRef.current}>
      {children}
    </ChefStoreContext.Provider>
  );
};

export const useChefStore = <T,>(selector: (store: ChefStore) => T): T => {
  const chefStoreContext = useContext(ChefStoreContext);

  if (!chefStoreContext) {
    throw new Error(`useChefStore must be used within ChefStoreProvider`);
  }

  return useStore(chefStoreContext, selector);
};
