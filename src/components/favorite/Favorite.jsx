import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './favorite.module.css'; 

function FavoritesPage() {
  const [favoriteCars, setFavoriteCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoriteCars');
    if (storedFavorites) {
      setFavoriteCars(JSON.parse(storedFavorites));
    }
  }, []);

  const carDetails = (carId) => {
    const selectedCarDetails = favoriteCars.find((car) => car.id === carId);
    setSelectedCar(selectedCarDetails);
  };

  return (
    <div className={styles.fullPage}>
      <header>
        <h1 style={{ textAlign: 'center', fontFamily: 'Montserrat', fontWeight: 600, fontSize: '56px' }}>🚘Car Place</h1>
        <nav>
          <ul style={{ display: 'flex', gap: '16px', marginBottom: '36px', justifyContent: 'center' }}>
            <li>
              <Link to="/" style={{ color: "#121417", textDecoration: "none", fontSize: "42px" }}>Home</Link>
            </li>
            <li>
              <Link to="/aviable" style={{ color: "#121417", textDecoration: "none", fontSize: "42px" }}>Available cars</Link>
            </li>
            <li>
              <Link to="/favorite" style={{ color: "#121417", textDecoration: "none", fontSize: "42px" }}>Favorite</Link>
            </li>
          </ul>
        </nav>
      </header>
      <aside className={styles.favoritesAside}>
        <h2>Favorites</h2>
        <ul>
          {favoriteCars.map((car) => (
            <li key={car.id} onClick={() => carDetails(car.id)}>
              {car.make} {car.model}
            </li>
          ))}
        </ul>
      </aside>
      <main className={styles.favoritesMain}>
        {selectedCar && (
          <div className={styles.selectedCarContainer}>
            <h2>{selectedCar.make} {selectedCar.model}, {selectedCar.year}</h2>
            <img src={selectedCar.img} style={{width: "400px", height: "250px"}} alt="Car" />
            <p>{selectedCar.description}</p>
            <ul>
              {selectedCar.rentalConditions.split('\n').map((condition, index) => (
                <li key={index}>{condition}</li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
}

export default FavoritesPage;
