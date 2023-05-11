import React from 'react';
import MovieCard from '../components/movieCard';
import styles from "../styles/common.module.css"

const Movie = async () => {

    const url = process.env.RAPID_KEY
    // await new Promise(resolve=>setTimeout(resolve, 2000));

  const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'b5a069c17fmshd3933bb40c8f274p192de5jsn008bc8c2f573',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }

};

   const res = await fetch(url, options);
   const data = await res.json();
   const main_data = data.titles;
   

    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movie</h1>
                    <div className={styles.card_section}>
                        {
                            main_data.map((curElem) => {
                                return <MovieCard key={curElem.id} {...curElem} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Movie;