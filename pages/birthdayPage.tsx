import styles from "@/styles/Home.module.css";

export default function BdayPage() {
    return <div className={styles.mainDiv}><h1>Happy Birthday!!! (Click the video and wait for it)</h1><BdayVideoDisplay /></div>
  }

  function BdayVideoDisplay(props: {}){
    return <div className={styles.videoDiv}>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/gTosyKamjWY?si=TUh2K0eIiwPj4bVq" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  }