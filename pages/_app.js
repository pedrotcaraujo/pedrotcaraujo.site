import "../styles/globals.css";
import { NextUIProvider, createTheme } from "@nextui-org/react";

const theme = createTheme({
  type: "light",
  theme: {
    colors: {
      gradient: "linear-gradient(45deg, $yellow500 -20%, $red500 100%)",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
