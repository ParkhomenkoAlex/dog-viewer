import type { Dog } from '../../types/dog';
import styles from './MainDog.module.css';

interface MainDogProps {
    dog: Dog;
}

function MainDog({ dog }: MainDogProps) {
    return (
        <section className={styles.mainDog}>
            <img src={dog.imageUrl} alt={dog.breed} />
            <h2>{dog.breed}</h2>
        </section>
    );
}

export default MainDog;