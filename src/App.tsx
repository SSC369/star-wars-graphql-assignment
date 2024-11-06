import React from "react";
import { observer } from "mobx-react-lite";

import Launches from "./components/Launches";

const App: React.FC = observer(() => {
  return (
    <div className="p-4 bg-slate-900 min-h-dvh">
      <Launches />
    </div>
  );
});

export default App;
