export default function fillInAddress(place: google.maps.places.PlaceResult | null) {
  // Get the place details from the autocomplete object.
  // const place = autocomplete.getPlace();
  console.log(place?.geometry?.location?.lat());
  console.log(place?.geometry?.location?.lng());

  if (place === null) return
  if (place == undefined) return
  if (!place.address_components) return

  let addressStreet = "";
  let addressNumber = "";
  let city = "";
  let province = "";
  let lat = place?.geometry?.location?.lat() || 0
  let lng = place?.geometry?.location?.lng() || 0


  // Get each component of the address from the place details,
  // and then fill-in the corresponding field on the form.
  // place.address_components are google.maps.GeocoderAddressComponent objects
  // which are documented at http://goo.gle/3l5i5Mr
  for (const component of place?.address_components as google.maps.GeocoderAddressComponent[]) {
    // @ts-ignore remove once typings fixed
    const componentType = component.types[0];

    switch (componentType) {
      case "street_number": {
        addressNumber = component.long_name;
        break;
      }

      case "route": {
        addressStreet = component.short_name;
        break;
      }

      case "locality": {
        city = component.long_name;
        break;
      }
      case "administrative_area_level_1": {
        province = component.short_name;
        break;
      }

    }
  }

  return { addressStreet, addressNumber, city, province, lat, lng }
  // After filling the form with address components from the Autocomplete
  // prediction, set cursor focus on the second address line to encourage
  // entry of subpremise information such as apartment, unit, or floor number.
}