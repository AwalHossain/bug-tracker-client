"use client";
import ToastProvider from "@/context/ToastProvider";
import store from "@/redux/store";

import { Provider } from "react-redux";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ToastProvider>{children}</ToastProvider>
    </Provider>
  );
};

export default Providers;
