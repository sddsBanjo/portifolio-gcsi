import './CardNFT.css'
import iconEthereum from '../../assets/images/icon-ethereum.svg'
import iconClock from '../../assets/images/icon-clock.svg'
import iconView from '../../assets/images/icon-view.svg'

export default function CardNFT({ image, title, description, price, timeLeft, avatar, creator }) {
  return (
    <article className="card-nft">
      <div className="card-nft__image-wrapper">
        <img className="card-nft__image" src={image} alt={title} />
        <div className="card-nft__image-overlay">
          <img src={iconView} alt="" />
        </div>
      </div>

      <h2 className="card-nft__title">{title}</h2>
      <p className="card-nft__description">{description}</p>

      <div className="card-nft__info">
        <div className="card-nft__price">
          <img src={iconEthereum} alt="" />
          <span>{price}</span>
        </div>
        <div className="card-nft__time">
          <img src={iconClock} alt="" />
          <span>{timeLeft}</span>
        </div>
      </div>

      <hr className="card-nft__divider" />

      <div className="card-nft__creator">
        <img className="card-nft__avatar" src={avatar} alt={`${creator} avatar`} />
        <p>Creation of <span>{creator}</span></p>
      </div>
    </article>
  )
}