import './CardNFT.css'
import equilibriumImg from '../../assets/images/image-equilibrium.jpg'
import avatarImg from '../../assets/images/image-avatar.png'
import iconEthereum from '../../assets/images/icon-ethereum.svg'
import iconClock from '../../assets/images/icon-clock.svg'
import iconView from '../../assets/images/icon-view.svg'

export default function CardNFT() {
  return (
    <article className="card-nft">
      <div className="card-nft__image-wrapper">
        <img className="card-nft__image" src={equilibriumImg} alt="Equilibrium NFT artwork" />
        <div className="card-nft__image-overlay">
          <img src={iconView} alt="" />
        </div>
      </div>

      <h2 className="card-nft__title">Equilibrium #3429</h2>
      <p className="card-nft__description">
        Our Equilibrium collection promotes balance and calm.
      </p>

      <div className="card-nft__info">
        <div className="card-nft__price">
          <img src={iconEthereum} alt="" />
          <span>0.041 ETH</span>
        </div>
        <div className="card-nft__time">
          <img src={iconClock} alt="" />
          <span>3 days left</span>
        </div>
      </div>

      <hr className="card-nft__divider" />

      <div className="card-nft__creator">
        <img className="card-nft__avatar" src={avatarImg} alt="Jules Wyvern avatar" />
        <p>Creation of <span>Jules Wyvern</span></p>
      </div>
    </article>
  )
}