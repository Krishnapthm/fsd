import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./Home";
import { Button } from "@/components/ui/button";

function Builds() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Button>My Builds</Button>
      </div>
    </>
  );
}

export default Builds;
