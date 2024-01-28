import { useState } from "react";

class UiElemenetEvent extends EventTarget {
    constructor(statusFunc) {
      super();
      this.change = statusFunc
    }
  
    online() {
      this.change(true);
    }
    offline() {
        this.change(false);
      }
  
  
  }

export function useFriendStatus(){
    const [status, setStatus] = useState(true)

    const miniEvent = new UiElemenetEvent(setStatus)

    // const handleOnline = () => setStatus(true)
    // const handleOffline = () => setStatus(false)

    return {status, miniEvent}
}