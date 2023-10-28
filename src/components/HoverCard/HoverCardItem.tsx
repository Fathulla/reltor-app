import { Link } from "react-router-dom";
import "./HoverCard.css";
import { useState } from "react";
import { AppModal } from "../AppModal/AppModal";

export interface IHoverCardItem {
  status: string;
  date: string;
  readMore: string;
  imgLink: any;
  list_price: number;
  beds: number;
  baths: number;
  sqft: number;
  city: string;
  line: string;
  postal_code: string;
  state_code: string;
  property_id: string;
  clickHandler: () => void;
}

export const HoverCardItem = ({
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
  property_id,
  clickHandler,
}: IHoverCardItem) => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="content-wrapper" onClick={clickHandler}>
      <div className="news-card">
        <Link to={"/card-info"} className="news-card__card-link"></Link>
        <img src={imgLink.href} alt="" className="news-card__image" />
        <div className="news-card__text-wrapper">
          <h2 className="news-card__title">
            {city}, {line}
          </h2>
          <div className="news-card__post-date">{date}</div>
          <div className="news-card__details-wrapper">
            <p className="news-card__excerpt">
              Prise: ${list_price} <br />
              Beds: {beds} <br />
              Baths: {baths} <br />
              Sqft: {sqft} <br />
              Id: {property_id}
            </p>
            <p className="news-card__excerpt">
              Location: {city}, {line}, {state_code} {postal_code}
            </p>
            <button
              onClick={() => setModalActive(true)}
              className="news-card__read-more"
            >
             
              {readMore}
              <i className="fas fa-long-arrow-alt-right"></i>
            </button>
          </div>
        </div>
      </div>
      <AppModal
        active={modalActive}
        setActive={setModalActive}
        modalText="Успешно добавлено в избранное!"
      />
    </div>
  );
};
