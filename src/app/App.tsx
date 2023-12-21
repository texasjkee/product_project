import { Suspense, useState } from "react";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";

import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Modal } from "shared/ui/Modal/Modal";

import "./styles/index.scss";

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log("file: App.tsx:14 ~ App ~ isOpen:", isOpen)
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <button onClick={() => setIsOpen(true)}>toggle</button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, repudiandae vero veritatis aliquid sed adipisci laborum totam porro, ipsum perferendis, quas nesciunt atque tempora nemo perspiciatis ex rem eaque maxime!
          </Modal>
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;