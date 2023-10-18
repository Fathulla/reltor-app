import { AppCard } from "../../components/AppCard/AppCard";
import { AppHeader } from "../../components/AppHeader/AppHeader";
import { AppMain } from "../../components/AppMain/AppMain";
import { AppNavigation } from "../../components/AppNavigation/AppNavigation";
/* import {useGetSimilarHomesQuery } from "../../store/api/propertiesApi"; */
import { SCCardsContainer, SCHomeList } from "./MainPage.styled";

export const MainPage = () => {
  /* const { data, isLoading, error } = useGetSimilarHomesQuery({
    baths: 1,
    beds: 1,
    sqft: 1,
    href: '',
    city: '',
    line: '',
    postal_code: '',
    state_code: '',
    status: 'for_sale',
    list_price: 1,
    date: '',

    limit: 1,
    property_id: '4017223400',
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } */
  return (
    <>
      <AppNavigation />
      <AppMain />
      <SCHomeList>
        <AppHeader type="h2" headerText="Browse homes in West Palm Beach, FL" />
        {/* {isLoading && <h5>Идет загрузка</h5>}
        {error && <h5>Ошибка</h5>} */}
        <SCCardsContainer>
          {/* {data &&
            data.home.related_homes.results.map((item: any) => ( */}
          <AppCard
            href="https://t4.ftcdn.net/jpg/03/08/04/63/360_F_308046361_DOBhAPa0VyrjIJ2Br4CqI4brEYGWteDw.jpg"
            date="12 September 2015"
            status="For Sale"
            list_price={450000}
            beds={2}
            baths={1}
            sqft={76000}
            city="Tashkent"
            line="Uzbekistan"
            state_code="TC"
            postal_code="766"
            halfBaths={null}
            lotSqft={null}
            estimate={0}
            listing_id={""}
            permalink={""}
            property_id={""}
            //! city={home.city}
          />
          {/* ))} */}
        </SCCardsContainer>
        <div className="favourites">
          <AppHeader headerText="Favourites" type="h2" />
        </div>
      </SCHomeList>
    </>
  );
};
