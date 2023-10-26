import React from "react";
import { AppInfoCard } from "../../components/AppInfoCard/AppInfoCard";
import { useGetDetailsQuery } from "../../store/api/propertiesApi";



export const CardInfoPage = () => {
  const { data, isLoading, error } = useGetDetailsQuery({
    property_id: '1231321',
  });
  if(data) {
    console.log(data);
  }
  if(isLoading) {
    console.log(isLoading);
  }
  if(error) {
    console.log(error);
  }
  
  return (
    <div>
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
    </div>
  );
};
