import type { Dog } from '../../types/dog';
import styles from './DogGallery.module.css';

interface DogGalleryProps {
    dogs: Dog[];
    onSelectDog: (dog: Dog) => void;
}

function DogGallery({ dogs, onSelectDog }: DogGalleryProps) {
    return (
        <section className={styles.dogGallery}>
            {dogs.map((dog) => (
                <button
                    className={styles.dogThumbnail}
                    key={dog.imageUrl}
                    type="button"
                    onClick={() => onSelectDog(dog)}
                >
                    <img src={dog.imageUrl} alt={dog.breed} />
                    <span>{dog.breed}</span>
                </button>
            ))}
        </section>
    );
}

export default DogGallery;