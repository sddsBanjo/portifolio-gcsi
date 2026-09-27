import CardNFT from '../CardNFT/CardNFT'
import { nfts } from '../../data/nfts'
import './CardList.css'

export default function CardList() {
  return (
    <div className="card-list">
      {nfts.map((nft) => (
        <div key={nft.id} className="card-list__item">
          <CardNFT
            image={nft.image}
            title={nft.title}
            description={nft.description}
            price={nft.price}
            timeLeft={nft.timeLeft}
            avatar={nft.avatar}
            creator={nft.creator}
          />
        </div>
      ))}
    </div>
  )
}