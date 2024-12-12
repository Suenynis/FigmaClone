import { useOthers, useSelf } from "@liveblocks/react";
import { Avatar } from "./Avatar";
import styles from "./index.module.css"
import { generateRandomName } from "@/lib/utils";
<<<<<<< HEAD
import { useMemo } from "react";
=======
>>>>>>> 27d964beab12a0487dcadb72fef610b46e78ed4a

const ActiveUsers = () => {
    const users = useOthers();
    const currentUser = useSelf();
    const hasMoreUsers = users.length > 3;

    console.log(currentUser)
<<<<<<< HEAD

    const memorizedUsers = useMemo(() => {
      return(
        <div className="flex items-center justify-center gap-1 py-2">
=======
  
    return (
      <main className="flex h-screen w-full select-none place-content-center place-items-center">
>>>>>>> 27d964beab12a0487dcadb72fef610b46e78ed4a
        <div className="flex pl-3">
        {currentUser && (
              <Avatar  name="You"  otherStyles ="border-[3px] borde-primary-green"/>
          )}
<<<<<<< HEAD
          {users.slice(0, 3).map(({ connectionId }) => {
=======
          {users.slice(0, 3).map(({ connectionId, info }) => {
>>>>>>> 27d964beab12a0487dcadb72fef610b46e78ed4a
            return (
              <Avatar key={connectionId} name={generateRandomName()} otherStyles="-ml-3" />
            );
          })}
  
          {hasMoreUsers && <div className={styles.more}>+{users.length - 3}</div>}
  

        </div>
      </div>
      )
    }, [users.length])
  
    return memorizedUsers;
  }

  export default ActiveUsers; 