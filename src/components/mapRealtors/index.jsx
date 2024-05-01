
import { useEffect, useState } from 'react';
import Map, { Marker, Popup, NavigationControl, GeolocateControl, FullscreenControl } from 'react-map-gl';
// import { TbMapPinStar } from "react-icons/tb";
import MarkerIcon from '../../assets/img/map/agente-de-bienes-raices.png';
import { Realtors } from '../../data/community';


const MapsRealtor = () => {
  const [selectedZone, setSelectedZone] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

 

  useEffect(() => {
    if (Realtors.length > 0) {
      setIsLoading(false);
    }
  }, [isLoading]);

  return (
    <div className='mx-10 xl:mx-44'>
        <div className="my-14 mt-2">   
            <Map
              mapboxAccessToken={'pk.eyJ1Ijoic2VyZ2lvdmVyYWhlcm5hbmRlemJpZGF0YSIsImEiOiJjbDMwZHc4cmswMDdqM2NydmIzYWF0cGl4In0.hsYQFPebleAB4j6mRckMzQ'}
              initialViewState={{
                pitch: 45,
                width: 400,
                height: 420,
                attributionControl: false,
                longitude: -72.10242446727796,
                latitude: -33.60656286043602,
                zoom: 6,
              }}
              mapStyle={'mapbox://styles/mapbox/streets-v12'}
              style={{
                width: 'auto',
                height: '73vh',
                borderRadius: '20px',
              }}
            >
              {Realtors?.map((item) => {
            
                let lng = parseFloat(item.longitude)
                let lat = parseFloat(item.latitude)

                return (
                  <Marker
                    key={item?.id}
                    longitude={lng}
                    latitude={lat}
                    offsetLeft={-20}
                    offsetTop={-10}
                    style={{
                      cursor: 'pointer',
                      zIndex: 0,
                      margin: '0',
                      padding: '0',
                    }}
                  >
                    <div>
                      <img
                        title='marker-icon'
                        src={MarkerIcon}
                        className='hover:tw-scale-105 tw-duration-200'
                        alt="marker"
                        height={45}
                        width={45}
                        onClick={() =>
                          setSelectedZone((prev) =>
                            prev && prev.id === item.id ? false : item
                          )
                        }
                      />

                        {selectedZone &&
                        selectedZone.id === item.id && (
                          <Popup
                            longitude={lng}
                            latitude={lat}
                            onClose={() => selectedZone(true)}
                            anchor="bottom"
                            closeButton={false}
                            closeOnClick={false}
                            dynamicPosition={true}
                            focusAfterOpen={false}
                            offsetTop={-10}
                            offsetLeft={-10}
                            closeOnMove={false}
                            style={{
                                zIndex: 100,
                                cursor: 'pointer',
                            }}
                          >
                                <div className="max-w-sm bg-white">
                                    <div>
                                      <a href="/perfil-corredor" 
                                          className="tw-mb-1 tw-font-normal tw-text-sm tw-text-gray-700 dark:tw-text-gray-500 tw-underline-offset-1 tw-duration-150"
                                        >
                                         <b>Nombre:</b> {item.realtor}
                                         <p className="tw-mb-1 tw-font-normal tw-text-gray-700 dark:tw-text-gray-500">
                                            <b>Comuna:</b> {item?.ubi ?? 'No cuenta con ubicación'}
                                        </p>
                                        </a>
                                       
                                    </div>
                                </div>
                          
                          </Popup>
                        )}
                    </div>
                    </Marker>
                );
              })}
              <NavigationControl />
              <GeolocateControl />
              <FullscreenControl />
            </Map>
        </div>
    </div>
  
  );
};

export default MapsRealtor;
