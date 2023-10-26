import { useNavigate } from "react-router";
import { AppHeader } from "../../components/AppHeader/AppHeader";
import { AppMain } from "../../components/AppMain/AppMain";
import { AppNavigation } from "../../components/AppNavigation/AppNavigation";
import { HoverCardItem } from "../../components/HoverCard/HoverCardItem";
import { useGetForSaleQuery } from "../../store/api/propertiesApi";
import { SCCardsContainer, SCHomeList } from "./MainPage.styled";

export interface IData {
  location: any;
  description: any;
  baths: number;
  beds: number;
  sqft: number;
  href: string;
  city: string;
  line: string;
  postal_code: string;
  state_code: string;
  status: string;
  list_price: number;
  date: string;
  permalink: string;
  property_id: string;
  primary_photo: string;
}

export const MainPage = () => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetForSaleQuery("santa monica");

  const homes = data?.home_search.results;

  return (
    <>
      <AppNavigation />
      <AppMain />
      <SCHomeList>
        <AppHeader type="h2" headerColor="black" headerText="For Sale" />
        {isLoading && <h5>Идет загрузка</h5>}
        {error && <h5>Ошибка</h5>}
        <SCCardsContainer>
          {homes &&
            homes.map((h: IData) => (
              <HoverCardItem
                key={h.property_id}
                baths={h.description.baths}
                beds={h.description.beds}
                sqft={h.description.lot_sqft}
                imgLink={h.primary_photo}
                city={h.location.address.city}
                line={h.location.address.line}
                postal_code={h.location.address.postal_code}
                state_code={h.location.address.state_code}
                status={h.status}
                list_price={h.list_price}
                date={h.date}
                readMore={"Add to favorites"}
                property_id={h.property_id}
                clickHandler={() =>
                  navigate("/card-info", {
                    state: { property_id: h.property_id },
                  })
                }
              />
            ))}
        </SCCardsContainer>
      </SCHomeList>
    </>
  );
};
