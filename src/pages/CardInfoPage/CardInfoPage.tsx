import { useLocation } from "react-router";
import { AppInfoCard } from "../../components/AppInfoCard/AppInfoCard";
import { useGetDetailsQuery } from "../../store/api/propertiesApi";
import './CardInfoPage.css'

export const CardInfoPage = () => {
  const location = useLocation();

  const { data, isLoading, error } = useGetDetailsQuery(
    location.state.property_id
  );

  const homes = data?.home;

  return (
    <>
      {isLoading && <h5>Идет загрузка</h5>}
      {error && <h5>Ошибка</h5>}
      {homes && (
        <AppInfoCard
          list_price={homes.list_price}
          schools={homes.schools.total}
          year_built={homes.description.year_built}
          beds={homes.description.beds}
          baths={homes.description.baths}
          sqft={homes.description.sqft}
          text={homes.description.text}
          city={homes.location.address.city}
          country={homes.location.address.country}
          line={homes.location.address.line}
          postal_code={homes.location.address.postal_code}
          state={homes.location.address.state}
          state_code={homes.location.address.state_code}
          street_name={homes.location.address.street_name}
          street_number={homes.location.address.street_number}
        />
      )}
    </>
  );
};
