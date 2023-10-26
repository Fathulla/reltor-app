import { useLocation } from "react-router";
import { AppInfoCard } from "../../components/AppInfoCard/AppInfoCard";
import { useGetDetailsQuery } from "../../store/api/propertiesApi";

// interface ICardInfoPageProps {
//   property_id: string;
// }

export const CardInfoPage = () => {
  const location = useLocation();

  const { data, isLoading, error } = useGetDetailsQuery(
    location.state.property_id
  );

  // if (data) {
  //   console.log("PROPERTY DATA", data);
  // }

  const { home } = data;

  console.log("HOME", home)

  // if (isLoading) {
  //   console.log(isLoading);
  // }

  // if (error) {
  //   console.log(error);
  // }

  return (
    <>
      {isLoading && <h5>Идет загрузка</h5>}
      {error && <h5>Ошибка</h5>}
      <AppInfoCard
        list_price={0}
        schools={0}
        year_built={0}
        beds={0}
        baths={0}
        sqft={0}
        text={""}
        city={""}
        country={""}
        line={""}
        postal_code={""}
        state={""}
        state_code={""}
        street_name={""}
        street_number={""}
      />
    </>
  );
};
