import { useEffect, useState } from 'react';
import { getRandomDogs } from './api/dogs';
import type { Dog } from './types/dog';
import styles from './App.module.css';

function App() {
    const [dogs, setDogs] = useState<Dog[]>([]);
    const [selectedDog, setSelectedDog] = useState<Dog | null>(null);

    useEffect(() => {
        async function loadDogs() {
            try {
                const dogs = await getRandomDogs(10);

                setDogs(dogs);
                setSelectedDog(dogs[0]);
            } catch (error) {
                console.error(error);
            }
        }

        void loadDogs();
    }, []);

    return (
        <main className={styles.app}>
            <h1>Dog Viewer</h1>

            {selectedDog && (
                <section className={styles.mainDog}>
                    <img src={selectedDog.imageUrl} alt={selectedDog.breed} />
                    <h2>{selectedDog.breed}</h2>
                </section>
            )}

            <section className={styles.dogGallery}>
                {dogs.map((dog) => (
                    <button
                        className={styles.dogThumbnail}
                        key={dog.imageUrl}
                        type="button"
                        onClick={() => setSelectedDog(dog)}
                    >
                        <img src={dog.imageUrl} alt={dog.breed} />
                        <span>{dog.breed}</span>
                    </button>
                ))}
            </section>
        </main>
    );
}

export default App;