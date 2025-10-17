"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { store, AppStore } from "../lib/store";

import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { Persistor } from "redux-persist/es/types";
export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null);
  const persistRef = useRef<Persistor | null>(null);
  if (!storeRef.current) {
    storeRef.current = store();
    persistRef.current = persistStore(storeRef.current);
  }

  return (
    <Provider store={storeRef.current}>
      <PersistGate persistor={persistRef.current} loading={null}>
        {children}
      </PersistGate>
    </Provider>
  );
}
