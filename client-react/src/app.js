import { useState } from "react";

import ChatsPage from "./chatsPage";

function App() {
  const [user, setUser] = useState();

  if (!user) {
    return 
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;
