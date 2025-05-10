import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationSelector } from "./store/atoms/atoms";

function App(){
  return (
      <RecoilRoot>
        <MainApp/>
      </RecoilRoot>
  )
}

function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const messagingCount = useRecoilValue(messagingAtom);
  const notificationsCount = useRecoilValue(notificationsAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return(
    <div style={{
      display : "flex",
      flexDirection : "row",
      gap : "10px",
      justifyContent : "center"

    }}>
      <button>Home</button>

      <button>My network ({((networkNotificationCount>100) ? "99+" : networkNotificationCount)})</button>
      <button>Jobs ({jobsCount}) </button>
      <button>Messaging ({messagingCount}) </button>
      <button>Notifications ({notificationsCount}) </button>
      
      <button>Me ({totalNotificationCount}) </button>
    </div>
  )
}

export default App;