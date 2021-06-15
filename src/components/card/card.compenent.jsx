import PropTypes from "prop-types";
// Images
import { ReactComponent as InfoIcon } from "../../assets/images/icon-info.svg";
import { ReactComponent as StarIcon } from "../../assets/images/icon-star.svg";
import { ReactComponent as DeadEmojiIcon } from "../../assets/images/icon-dead-emoji.svg";
// CSS
import "./card.styles.css";

export default function Card({ id, images, title, rating, price, discount }) {
  return (
    <div className="card-container" key={id}>
      <div className="card-image-container">
        <div className="card-images">
          <img src={images.main} alt={title}></img>
          <img src={images.main} alt={title}></img>
        </div>
        <div className="info-icon-container">
          <InfoIcon className="info-icon" />
          <div className="info-icon-content">
            {rating.count !== 0 && rating.count ? (
              <>
                <StarIcon />
                <div className="rate">{rating.rate}</div>
                <div className="count">({rating.count})</div>
              </>
            ) : (
              price.selling_price === price.rrp_price && (
                <DeadEmojiIcon className="dead-emoji-icon" />
              )
            )}
            {price.selling_price !== price.rrp_price && (
              <div className="discount">
                <div className="discount-percent">%{discount}</div>
                تخفیف شما از این خرید!
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="card-footer">
        <div className="card-title">{title}</div>
        <div className="price-container">
          <div className="price-toman">تومان</div>
          <div className="price-new">{price.selling_price}</div>
          {price.selling_price !== price.rrp_price && (
            <div className="price-old">{price.rrp_price}</div>
          )}
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  images: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.object.isRequired,
  price: PropTypes.object.isRequired,
  discount: PropTypes.number.isRequired,
};
