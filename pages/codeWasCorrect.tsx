import { redirect, useRouter } from "next/navigation"
import styles from "@/styles/Home.module.css";

export default function CodePage() {
    const router = useRouter();

  return <div className={styles.mainDiv}>
    <h1>You got the code correct! Let's see what we have in store for you....</h1>
      <button onClick={e => {
        router.push('/birthdayPage')
      }}>What could it possibly be now?</button>
  </div>
}
