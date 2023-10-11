import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dropdown from 'react-dropdown-select';
import styles from './aviablecars.module.css';
import { Link } from 'react-router-dom';

function AvailableCars() {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedCarInfo, setSelectedCarInfo] = useState(null);
  const [carImg, setCarsImg] = useState(null);
  const [companyPhoneNumber] = useState('+380730000000');
  const hourPrice = [
    10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140,
  ];
  const [visibleItems, setVisibleItems] = useState(8);

  const [favoriteCars, setFavoriteCars] = useState(() => {
    const storedFavorites = localStorage.getItem('favoriteCars');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    axios
      .get('https://65244612ea560a22a4e9ae4a.mockapi.io/carlist')
      .then(function (response) {
        const data = response.data;
        setCars(data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  const carOptions = cars.map(car => ({
    label: car.make,
    value: car.id,
  }));

  const priceOptions = hourPrice.map(price => ({
    label: price,
    value: price,
  }));

  const handleSubmit = e => {
    e.preventDefault();
    setVisibleItems(8);
    console.log('Form submitted:', {
      selectedCar,
      selectedPrice,
      mileageFrom,
      mileageTo,
    });
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.classList.remove(styles.showBackdrop);
  };

  const handleLearnMore = carId => {
    const selectedCarDetails = cars.find(car => car.id === carId);
    setSelectedCarInfo(selectedCarDetails);
    setCarsImg(selectedCarDetails.img);
    setShowModal(true);
    document.body.classList.add(styles.showBackdrop);
  };
  useEffect(() => {
    const handleKeyPress = e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    const handleBackdropClick = e => {
      if (e.target.classList.contains(styles.modal)) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('click', handleBackdropClick);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('click', handleBackdropClick);
    };
  }, []);

  const loadMore = () => {
    setVisibleItems(prev => prev + 8);
  };

  const addToFavorites = carId => {
    const carToAdd = cars.find(car => car.id === carId);
    setFavoriteCars(prevFavorites => [...prevFavorites, carToAdd]);
    localStorage.setItem(
      'favoriteCars',
      JSON.stringify([...favoriteCars, carToAdd])
    );
  };

  const removeFromFavorites = carId => {
    const updatedFavorites = favoriteCars.filter(car => car.id !== carId);
    setFavoriteCars(updatedFavorites);
    localStorage.setItem('favoriteCars', JSON.stringify(updatedFavorites));
  };

  const isCarFavorite = carId => {
    return favoriteCars.some(car => car.id === carId);
  };

  return (
    <div className={styles.fullPage}>
      <header>
        <h1
          style={{
            textAlign: 'center',
            fontFamily: 'Montserrat',
            fontWeight: 600,
            fontSize: '56px',
          }}
        >
          🚘Car Place
        </h1>
        <nav>
          <ul
            style={{
              display: 'flex',
              gap: '16px',
              marginBottom: '36px',
              justifyContent: 'center',
            }}
          >
            <li>
              <Link
                to="/"
                style={{
                  color: '#121417',
                  textDecoration: 'none',
                  fontSize: '42px',
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/aviable"
                style={{
                  color: '#121417',
                  textDecoration: 'none',
                  fontSize: '42px',
                }}
              >
                Available cars
              </Link>
            </li>
            <li>
              <Link
                to="/favorite"
                style={{
                  color: '#121417',
                  textDecoration: 'none',
                  fontSize: '42px',
                }}
              >
                Favorite
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <form onSubmit={handleSubmit} className={styles.form}>
        <ul
          style={{
            display: 'flex',
            flexDirection: 'row',
            columnGap: '18px',
            justifyContent: 'center',
          }}
        >
          <li>
            <h3 className={styles.formTitle}>Car brand</h3>
            <Dropdown
              placeholder="Select brand"
              options={carOptions}
              onChange={values => setSelectedCar(values)}
              style={{
                width: '224px',
                height: '48px',
                borderRadius: '12px',
                background: '#F7F7FB',
                textColor: '#121417',
              }}
            />
          </li>
          <li>
            <h3 className={styles.formTitle}>Price / 1 hour</h3>
            <Dropdown
              placeholder="To $"
              options={priceOptions}
              onChange={values => setSelectedPrice(values)}
              style={{
                width: '125px',
                height: '48px',
                borderRadius: '12px',
                background: '#F7F7FB',
                textColor: '#121417',
              }}
            />
          </li>
          <li>
            <h3 className={styles.formTitle}>Car mileage / km</h3>
            <input
              type="number"
              min="0"
              placeholder="from"
              value={mileageFrom === '' ? 'from' : mileageFrom}
              onChange={e => setMileageFrom(e.target.value)}
              style={{
                padding: '14px 24px',
                width: '112px',
                height: '20px',
                borderRadius: '12px',
                background: '#F7F7FB',
                border: '0',
                borderRight: '1px solid #8A8A89',
                borderRadius: '14px 0 0 14px',
              }}
            />
            <input
              type="number"
              min="0"
              placeholder="to"
              value={mileageTo === '' ? 'to' : mileageTo}
              onChange={e => setMileageTo(e.target.value)}
              style={{
                padding: '14px 24px',
                width: '112px',
                height: '20px',
                borderRadius: '12px',
                background: '#F7F7FB',
                border: '0',
                borderRadius: '0 14px 14px 0',
              }}
            />
          </li>
          <li>
            <button
              type="submit"
              className={styles.formSearch}
              style={{ marginTop: '16px' }}
            >
              Search
            </button>
          </li>
        </ul>
      </form>
      <main>
        <ul className={styles.carCardGlobalList}>
          {cars.slice(0, visibleItems).map((car, index) => (
            <li className={styles.fullCard} key={`${car.id}-${index}`}>
              <div className={styles.carCard}>
                <img src={car.img} alt="car" className={styles.carCardImage} />
                <ul className={styles.carCardList}>
                  <li>
                    <h2 className={styles.carCardTitle}>
                      {car.make}{' '}
                      <span className={styles.carCardTitleSpan}>
                        {car.model}
                      </span>
                      , {car.year}
                    </h2>
                  </li>
                  <li className={styles.li}>{car.rentalPrice}</li>
                </ul>
                <button
                  className={styles.carCardButton}
                  type="button"
                  onClick={() => handleLearnMore(car.id)}
                >
                  Learn more
                </button>
                <button
                  className={styles.favoriteButton}
                  type="button"
                  onClick={() =>
                    isCarFavorite(car.id)
                      ? removeFromFavorites(car.id)
                      : addToFavorites(car.id)
                  }
                  style={{ color: isCarFavorite(car.id) ? 'red' : 'gray' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C16.09 3.81 17.76 3 19.5 3 22.58 3 25 5.42 25 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
      {visibleItems < cars.length && (
        <div>
          <button
            type="button"
            onClick={loadMore}
            className={styles.buttonLoadMore}
          >
            Load More
          </button>
        </div>
      )}
      <div
        className={`${styles.backdrop} ${showModal ? styles.showBackdrop : ''}`}
      ></div>
      {showModal && (
        <div className={styles.modal}>
          <div className="modal-content">
            <span className={styles.close} onClick={closeModal}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="#121417"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="#121417"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            {selectedCarInfo && (
              <div>
                <ul>
                  <li>
                    {selectedCarInfo.img && (
                      <img
                        src={carImg}
                        alt="car"
                        width="469px"
                        height="314px"
                        style={{ borderRadius: '14px' }}
                      />
                    )}
                  </li>
                  <li>
                    <h2
                      className={styles.carname}
                      style={{ marginBottom: '62px' }}
                    >
                      {selectedCarInfo.make}{' '}
                      <span className={styles.model}>
                        {selectedCarInfo.model}
                      </span>
                      , {selectedCarInfo.year}
                    </h2>
                  </li>
                  <li>
                    <p className={styles.modalAbout}>
                      {selectedCarInfo.description}
                    </p>
                  </li>
                  <li style={{ width: '461px' }}>
                    <p style={{ marginBottom: '8px' }}>
                      Accessories and functionalities:
                    </p>
                    {selectedCarInfo.description && (
                      <div>
                        <ul className={styles.modalFuncList}>
                          {selectedCarInfo.description
                            .split('\n')
                            .map((line, index) => (
                              <li key={index} className={styles.modalFunc}>
                                {line}
                              </li>
                            ))}
                        </ul>
                        <p className={styles.rental}>Rental conditions:</p>
                        <ul className={styles.modalFuncList}>
                          {selectedCarInfo.rentalConditions
                            .split('\n')
                            .map((condition, index) => (
                              <li key={index} className={styles.modalFunc}>
                                {condition.includes(':') ? (
                                  condition.split(':').map((item, idx) => (
                                    <span
                                      key={idx}
                                      className={
                                        isNaN(item.trim())
                                          ? styles.text
                                          : styles.number
                                      }
                                    >
                                      {item.trim()} {idx === 0 && ':'}
                                    </span>
                                  ))
                                ) : (
                                  <span className={styles.text}>
                                    {condition}{' '}
                                  </span>
                                )}
                              </li>
                            ))}
                          <li className={styles.text}>
                            Mileage:{' '}
                            <span className={styles.number}>
                              {selectedCarInfo.mileage}
                            </span>
                          </li>
                          <li className={styles.text}>
                            Price:{' '}
                            <span className={styles.number}>
                              {selectedCarInfo.rentalPrice}
                            </span>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>
                  <li>
                    <button
                      className={styles.rentalButton}
                      onClick={() =>
                        (window.location.href = `tel:${companyPhoneNumber}`)
                      }
                    >
                      Rental Car
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default AvailableCars;
