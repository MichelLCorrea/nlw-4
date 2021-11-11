import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {

    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/68828314?s=460&u=114475c4bab420a0242f9d1011d5840efca19d54&v=4" alt="Michel"/>

            <div>
                <strong>Michel Luiz Correa</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level { level }
                </p>
            </div>

        </div>
    )
}