import { Box, Container } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getEvents } from "./slice/eventsSlice.ts";
import { AppDispatch } from "./store.ts";
import EventsView from "./views/EventsList/EventsView.tsx";

import TopBar from "./components/TopBar/TopBar.tsx";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  return (
    <>
      <TopBar />
      <Box p={3}>
        <Container maxWidth="sm">
          <EventsView />
        </Container>
      </Box>
    </>
  );
}

export default App;
