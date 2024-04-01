"use client";
import { useParams, useSearchParams } from "next/navigation";
import HeroDetail from "@/components/HeroDetail";
import FormContact from "@/components/FormContact";
import CharacteristicsProperties from "@/components/CharacteristicsPropertie";
import DescriptionProperty from "@/components/DescriptionProperty";
import OtherProperties from "@/components/OtherProperties";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";
import { instanceAxios } from "@/lib/axios";
import { PropertyCard } from "@/lib/types";
import Header from "@/components/Header";

const mapsApiKey = "AIzaSyC5Imp84G-XJszq7Iep7djj0kI035RcbJk";

export default function Page() {
  const [property, setProperty] = useState<PropertyCard | undefined>();

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    instanceAxios
      .get(`/properties/${id}`)
      .then((res) => setProperty(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <Header />
      <main className="w-full md:w-8/12 mx-auto  p-4 bg-[#F5F5F7]">
        <HeroDetail
          value={property?.value}
          addressStreet={property?.addressStreet}
          addressNumber={property?.addressNumber}
          city={property?.city}
          province={property?.province}
          category={property?.category}
          propertyPictures={property?.propertyPictures}
          propertyId={id}
        />

        <section className="mt-4 flex flex-wrap md:justify-between sm:justify-center md:gap-8 gap-y-4">
          <div className="sm:w-full md:w-[45%] ">
            <CharacteristicsProperties
              coveredArea={property?.coveredArea}
              bathrooms={property?.bathrooms}
              bedrooms={property?.bedrooms}
              pets={property?.pets}
              garden={property?.garden}
            />

            {property ? (
              <div className="mt-8 md:h-96 sm:h-52 h-40  w-full">
                <APIProvider apiKey={mapsApiKey}>
                  <Map
                    defaultCenter={{
                      lat: property.lat,
                      lng: property.lon,
                    }}
                    defaultZoom={12}
                  >
                    <Marker
                      position={{
                        lat: property.lat,
                        lng: property.lon,
                      }}
                    />
                  </Map>
                </APIProvider>
              </div>
            ) : (
              <div>Cargando...</div>
            )}
          </div>
          <div className="md:w-[50%] w-full sm:mt-8  md:mt-0  bg-vectorcasa bg-contain bg-no-repeat bg-right">
            <FormContact idProperty={id} />
          </div>
        </section>

        <hr className="w-full mb-[25px] mt-[100px] border-[#CAC4D0]" />
        <DescriptionProperty
          coveredArea={property?.coveredArea}
          bathrooms={property?.bathrooms}
          bedrooms={property?.bedrooms}
          pets={property?.pets}
          garden={property?.garden}
          description={property?.description}
          rooms={property?.rooms}
          disposition={property?.disposition}
          age={property?.age}
          condition={property?.condition}
          orientation={property?.orientation}
          state={property?.state}
        />
        <hr className="w-full mb-[25px]  border-[#CAC4D0]" />

        <OtherProperties />
      </main>
    </>
  );
}
