import styles from './casinoGame.module.css'
import { BsStar } from "react-icons/bs";

const CasinoGame = ({casinoGame: {id, image, bonus_text, description, detail_link, money_bonus, reviews_quantity, reviews_link, mark, visit_link }}) => {
  return (
    <li className={styles.casinoGameListItem} key={id}>
  <img src={image} alt="game-logo" className={styles.gameLogoImg}/>
  <div className={styles.promoContent}>
    <h5 className={styles.bonusText}>{bonus_text}</h5>
    <div className={styles.descriptionContent}>
      <p className={styles.description}>{description}</p>
      <a href={detail_link} className={styles.moreLink}>More</a>
    </div>
  </div>
  <p className={styles.price}>£{money_bonus}</p>
  <div className={styles.rateContainer}>
    <p className={styles.rateSignature}>Rate it! ({reviews_quantity})</p>
    <ul className={styles.ratingList}>
      <li><BsStar title="Rate 5"/></li>
      <li><BsStar title="Rate 4"/></li>
      <li><BsStar title="Rate 3"/></li>
      <li><BsStar title="Rate 2"/></li>
      <li><BsStar title="Rate 1"/></li>
    </ul>
    <a className={styles.readReviewLink} href={reviews_link} >Read Review</a>
  </div>
  <p className={styles.mark}>{mark}</p>
  <a href={visit_link} className={styles.visitSiteBtn}>VISIT SITE</a>
</li>

)
}

 export default CasinoGame

