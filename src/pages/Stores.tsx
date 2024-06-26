import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Stores() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button>Stores component</Button>
    </div>
  );
}

export default Stores;
