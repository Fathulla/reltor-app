import { AppCard } from "../../components/AppCard/AppCard";
import { AppHeader } from "../../components/AppHeader/AppHeader";
import { AppMain } from "../../components/AppMain/AppMain";
import { AppNavigation } from "../../components/AppNavigation/AppNavigation";
import { useGetListSaleQuery } from "../../store/api/propertiesApi";
import "./MainPage.css";

export const MainPage = () => {
  const { data, isLoading, error } = useGetListSaleQuery({
    city: 'California City',
    state_code: '93505',
    limit: 1,
  });
  if (data) {
    console.log("DATA: ", data);
  } else if (error !== undefined) {
    console.error("ERROR: ", error);
  }  
  return (
    <>
    <input type="text"/>
      <AppNavigation />
      <AppMain />
      {data?.city}
      {isLoading && <h5>Идет загрузка</h5>}
      {error && <h5>Ошибка</h5>}
      <section className="homesList">
        <AppHeader type="h2" headerText="Browse homes in West Palm Beach, FL" />
        <div className="cardsContainer">
          <AppCard />
          <AppCard />
          <AppCard />
        </div>
      </section>
    </>
  );
};
