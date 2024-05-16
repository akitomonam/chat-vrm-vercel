import Image from "next/image";
import styles from '../styles/Home.module.css';
import ChatVRM from "@/components/chatVRM";

export default function Home() {
    return (
        <div className={styles.pageWrapper}>
            <div className={styles.container}>
                <h1 className={styles.title}>Akitomo`s Page</h1>
                <p className={styles.description}>
                    Welcome to my personal website.
                </p>
                <div className={styles.imageWrapper}>
                    <div style={{ borderRadius: '5px', overflow: 'hidden' }}>
                        <Image src="/my-icon.jpg" alt="Profile Image" width={144} height={144} />
                    </div>
                </div>
                <div className={styles.info}>
                    <h3 className={styles.infoTitle}>About Me</h3>
                    <p className={styles.infoText}>
                        I am a software developer with a passion for learning new technologies and creating amazing user experiences.
                    </p>
                </div>
                <div style={{
                    top: '55%', left: '25%', position: 'absolute', height: '50vh', width: '50vw', zIndex: -20
                }}>
                    <ChatVRM />
                </div>
            </div>
        </div>
    );
}
