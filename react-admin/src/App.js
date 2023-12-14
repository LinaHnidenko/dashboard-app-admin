import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team/Team.jsx";
import Contacts from "./scenes/contacts/Contacts.jsx";
import Invoices from "./scenes/invoices/Invoices.jsx";
import Form from "./scenes/form/Form.jsx";
import Calendar from "./scenes/calendar/Calendar.jsx";
import FAQ from "./scenes/faq/faq.jsx";
import Bar from "./scenes/bar/Bar.jsx";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import Geography from "./scenes/geography";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />}></Route>
              <Route path="/faq" element={<FAQ />}></Route>
              <Route path="/bar" element={<Bar />}></Route>
              {/* <Route path="/pie" element={<Pie />}></Route> */}
              {/* <Route path="/line" element={<Line />}></Route> */}
              {/* <Route path="/geography" element={<Geography />}></Route> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
