import type { Dog } from '../../types/dog';
import styles from './MainDog.module.css';
import {formatBreed} from "../../utils/formatBreed.ts";

interface MainDogProps {
    dog: Dog;
    onAddToFavorites: (dog: Dog) => void;
}

function MainDog({ dog, onAddToFavorites }: MainDogProps) {
    return (
        <section className={styles.mainDog}>
            <img src={dog.imageUrl} alt={formatBreed(dog.breed)} />

            <div className={styles.info}>
                <h2>{formatBreed(dog.breed)}</h2>

                <button
                    type="button"
                    onClick={() => onAddToFavorites(dog)}
                >
                    Add to favorites
                </button>
            </div>
        </section>
    );
}

export default MainDog;