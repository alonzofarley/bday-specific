import { redirect, useRouter } from "next/navigation"
import styles from "@/styles/Home.module.css";

export default function FirstPage() {
  const router = useRouter();

  return <div className={styles.mainDiv}>
      <a href="https://docs.google.com/document/d/1Fcs2booxBP6notst8xaJqpc2VRH-_KJbXFUGQiPoSsg/edit?usp=sharing" target={"_blank"}>Instructions (click here)</a>
      <button onClick={e => {
        router.push('/codePage');
      }}>What now?</button>
  </div>
}

