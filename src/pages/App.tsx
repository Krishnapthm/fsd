import React from "react";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Builds from "./Builds";
import Stores from "./Stores";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../components/ui/navigation-menu";
import { ModeToggle } from "@/components/ui/mood-toggle";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <div>
        <Router>
          <div className='flex flex-col items-center pt-5'>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to='/'>
                    <NavigationMenuTrigger hasDropdown={false}>
                      Home
                    </NavigationMenuTrigger>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to='/my-builds'>
                    <NavigationMenuTrigger hasDropdown={false}>
                      My Builds
                    </NavigationMenuTrigger>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to='/stores'>
                    <NavigationMenuTrigger hasDropdown={false}>
                      Stores
                    </NavigationMenuTrigger>
                  </Link>
                </NavigationMenuItem>
                <ModeToggle></ModeToggle>
              </NavigationMenuList>
            </NavigationMenu>

            <div className='pt-5'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/my-builds' element={<Builds />} />
                <Route path='/stores' element={<Stores />} />
              </Routes>
            </div>
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
