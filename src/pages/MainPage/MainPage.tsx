import { AppCard } from "../../components/AppCard/AppCard";
import { AppHeader } from "../../components/AppHeader/AppHeader";
import { AppMain } from "../../components/AppMain/AppMain";
import { AppNavigation } from "../../components/AppNavigation/AppNavigation";
import { useGetForRentQuery } from "../../store/api/propertiesApi";
import { SCCardsContainer, SCHomeList } from "./MainPage.styled";

export const MainPage = () => {
  const { data, isLoading, error } = useGetForRentQuery({
    location: "santa monica",
    limit: 1,
  });

  if (data) {
    console.log("DATA: ", data);
  } else if (error !== undefined) {
    console.error("ERROR: ", error);
  }

  if (data && Array.isArray(data)) {
    return (
      <>
        <AppNavigation />

        <AppMain />
        <SCHomeList>
          <AppHeader
            type="h2"
            headerText="Browse homes in West Palm Beach, FL"
          />
          {isLoading && <h5>Идет загрузка</h5>}
          {error && <h5>Ошибка</h5>}
          <SCCardsContainer>
            {data.map((home) => (
              <AppCard key={home.property_id} home={home} />
            ))}
          </SCCardsContainer>
        </SCHomeList>
      </>
    );
  } else {
    return null;
  }
};