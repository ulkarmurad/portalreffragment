import { useFriendStatus } from "../customhook"


export default function ChatPage(){
    const {status, miniEvent} = useFriendStatus()

  return (
    <>
    <p>Chat Line</p>
     {status? " ++ Friend is online": "-- Friend is offline"}
     <button onClick={() => miniEvent.online()}>Trick Online</button>
     <button onClick={() => miniEvent.offline()}>Trick Offline</button>
    </>
  )
}