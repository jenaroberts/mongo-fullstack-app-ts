import { FC, useEffect, useState } from "react";
import "./scss/app.scss";
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  List,
  ListItem,
} from "@mui/material";

import { getWishes, Wish } from "./services/wishes";
import { WishForm } from "./components/WishForm";

const theme = createTheme({
  typography: {
    fontFamily: `'Noto Sans', sans-serif`,
    fontWeightRegular: 600,
  },
  palette: {
    mode: "dark",
    background: {
      default: "#d1c4e9",
    },
    primary: {
      main: "#9575cd",
    },
    secondary: {
      main: "#311b92  ",
    },
  },
});

export const App: FC = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);

  useEffect(() => {
    getWishes().then(setWishes);
  }, []);
  console.log(wishes);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="wish-form">
        <WishForm />
      </div>
      <div className="list">
        <List>
          {wishes.map((wish) => {
            return <ListItem key={wish.name}>{wish.name}</ListItem>;
          })}
        </List>
      </div>
    </ThemeProvider>
  );
};
