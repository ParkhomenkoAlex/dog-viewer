import type { Dog } from '../../types/dog';
import styles from './Favorites.module.css';
import {formatBreed} from "../../utils/formatBreed.ts";

interface FavoritesProps {
    favorites: Dog[];
    onSelectDog: (dog: Dog) => void;
    onRemoveFavorite: (dog: Dog) => void;
}

function Favorites({
                       favorites,
                       onSelectDog,
                       onRemoveFavorite,
                   }: FavoritesProps) {
    return (
        <aside className={styles.favorites}>
            <h2>Favorites</h2>

            {favorites.length === 0 ? (
                <p>No favorites yet.</p>
            ) : (
                <ul className={styles.list}>
                    {favorites.map((dog) => (
                        <li className={styles.item} key={dog.imageUrl}>
                            <button
                                className={styles.dog}
                                type="button"
                                onClick={() => onSelectDog(dog)}
                            >
                                <img src={dog.imageUrl} alt={formatBreed(dog.breed)} />
                                <span>{formatBreed(dog.breed)}</span>
                            </button>

                            <button
                                className={styles.remove}
                                type="button"
                                onClick={() => onRemoveFavorite(dog)}
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </aside>
    );
}

export default Favorites;