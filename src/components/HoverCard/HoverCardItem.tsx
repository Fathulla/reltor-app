import { Link } from "react-router-dom";
import "./HoverCard.css";

interface IHoverCardItem {
  status: string;
  date: string;
  readMore: string;
  imgLink: any
  list_price: number
  beds: number
  baths: number
  sqft: number
  city: string
  line: string
  postal_code: string
  state_code: string
}

export const HoverCardItem = ({
  status,
  date,
  readMore,
  imgLink,
  list_price,
  beds,
  baths,
  sqft,
  city,
  line,
  postal_code,
  state_code,
}: IHoverCardItem) => {
  return (
    <div className="content-wrapper">
      <div className="news-card">
        <Link to={""} className="news-card__card-link"></Link>
        <img
          src={imgLink.href}
          alt=""
          className="news-card__image"
        />
        <div className="news-card__text-wrapper">
          <h2 className="news-card__title">{status}</h2>
          <div className="news-card__post-date">{date}</div>
          <div className="news-card__details-wrapper">
            <p className="news-card__excerpt">
              Prise: ${list_price} <br />
              Beds: {beds} <br />
              Baths: {baths} <br />
              Sqft: {sqft}
            </p>
            <p className="news-card__excerpt">
            Location: {city}, {line}, {state_code} {postal_code}
            </p>
            <Link to={""} className="news-card__read-more">
              {readMore}
              <i className="fas fa-long-arrow-alt-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
