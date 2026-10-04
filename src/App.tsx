import { useEffect, useState } from 'react';
import { getRandomDogs } from './api/dogs';
import DogGallery from './components/DogGallery/DogGallery';
import MainDog from './components/MainDog/MainDog';
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

            {selectedDog && <MainDog dog={selectedDog} />}

            <DogGallery dogs={dogs} onSelectDog={setSelectedDog} />
        </main>
    );
}

export default App;