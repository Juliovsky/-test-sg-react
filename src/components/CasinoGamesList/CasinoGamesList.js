import casino_games from '../../casino_games.json';
import  CasinoGame from '../CasinoGame/CasinoGame.js'
import styles from './casinoGamesList.module.css'

const CasinoGamesList = () => {
      return (
    <div className="container">
      <ul className={styles.casinoGamesList}>
        {casino_games.map(casinoGame => (
                 <CasinoGame casinoGame={casinoGame} key={casinoGame.id}/>
            )
        )}
      </ul>
    </div>
   )
}

export default CasinoGamesList;

