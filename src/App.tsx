import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import LangSwitch from "./components/LangSwitch";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import { LangProvider } from "./i18n";
import { useHashPage, type Page } from "./hooks";

const views: Record<Page, JSX.Element> = {
  about: <About />,
  projects: <Projects />,
  skills: <Skills />,
};

export default function App() {
  const page = useHashPage();
  return (
    <LangProvider>
      <div className="shell">
        <Sidebar />
        <div className="main">
          <header className="topbar">
            <Nav active={page} />
            <LangSwitch />
          </header>
          <main className="content" key={page}>
            {views[page]}
          </main>
        </div>
      </div>
    </LangProvider>
  );
}
