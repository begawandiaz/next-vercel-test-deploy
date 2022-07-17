import styles from "../styles/Home.module.css";
import { Image } from "antd";
export default function Footer(){
  return(
    <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="https://i.pinimg.com/originals/17/dd/84/17dd84fe75c8ba1ca26aa18b3570b65b.png" alt="Vercel Logo" width={72} height={16} preview={false}/>
          </span>
        </a>
      </footer>
  )
}