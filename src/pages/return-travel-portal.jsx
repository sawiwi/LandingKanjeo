import React, { useState } from 'react';
import Section from '../components/section';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineUser } from '../components/icon';

const ReturnTravelPortal = () => {
  const [selectedTab, setSelectedTab] = useState();

  const [details, setDetails] = useState({
    name: 'sin seleccionar',
    date: 'sin seleccionar',
    nameVehicle: 'sin seleccionar',
  });

  const data2 = [
    {
      id: 1,
      progress: 'En retorno',
      nameConductor: 'Cristian Maldonado C.',
      startRoute: 'Las Condes, Santiago',
      phoneNumber: '569 556892124',
      endRoute: 'Flota Central Talca, Region del Maule',
      return: {
        dater: '2023-08-30',
        hour: '10:00',
      },
      vehicle: {
        name: 'Hyundai',
        model: 'RETRO 2001',
        patent: 'ABC-123',
        category: 'Productos alimenticios perecederos',
      },
      status: 'Ida y vuelta con carga',
      capacity: '5 Toneladas',
      authorized: 'True',
      company: 'Logística Express S.A.',
      ManagementSystem: 'LogiSys',
    },
  ];

  const onClickData = (element) => {
    setDetails({
      id: element.id,
      nameConductor: element.nameConductor,
      startRoute: element.startRoute,
      endRoute: element.endRoute,
      return: {
        dater: element.return.dater,
        hour: element.return.hour,
      },
      vehicle: {
        name: element.vehicle.name,
        model: element.vehicle.model,
        patent: element.vehicle.patent,
        category: element.vehicle.category,
      },
      status: element.status,
      capacity: element.capacity,
      authorized: element.authorized,
      company: element.company,
      ManagementSystem: element.ManagementSystem,
    });
    setSelectedTab(element.id);
  };

  const renderFirst = (
    <div className="tw-divide-y tw-mx-4 tw-divide-gray-300 tw-overflow-y-scroll tw-h-full tw-max-h-[600px]">
      <div className="tw-p-4 tw-text-sm">
        <h3 className="tw-text-gray-700">Nombre completo del conductor</h3>
        <p className="tw-text-gray-500">Sin Seleccionar</p>
      </div>
      <div className="tw-p-4 tw-text-sm">
        <h3 className="tw-text-gray-700">Ruta punto de partida</h3>
        <p className="tw-text-gray-500">Sin Seleccionar</p>
      </div>
      <div className="tw-p-4 tw-text-sm">
        <h3 className="tw-text-gray-700">Ruta punto de llegada</h3>
        <p className="tw-text-gray-500">Sin Seleccionar</p>
      </div>
      <div className="tw-p-4 tw-text-sm tw-flex">
        <div className="tw-w-1/2">
          <h3 className="tw-text-gray-700">Fecha de retorno</h3>
          <p className="tw-text-gray-500">Sin Seleccionar</p>
        </div>
        <div>
          <h3 className="tw-text-gray-700">Hora de retorno</h3>
          <p className="tw-text-gray-500">Sin Seleccionar</p>
        </div>
      </div>
      <div className="tw-p-4 tw-text-sm">
        <h3 className="tw-text-gray-700">Nombre del vehículo</h3>
        <p className="tw-text-gray-500">Sin Seleccionar</p>
      </div>
      <div className="tw-p-4 tw-text-sm tw-flex">
        <div className="tw-w-1/2">
          <h3 className="tw-text-gray-700">Modelo</h3>
          <p className="tw-text-gray-500">Sin Seleccionar</p>
        </div>
        <div>
          <h3 className="tw-text-gray-700">Matrícula</h3>
          <p className="tw-text-gray-500">Sin Seleccionar</p>
        </div>
      </div>
      <div className="tw-p-4 tw-text-sm">
        <h3 className="tw-text-gray-700">Tipo de carga que transporta</h3>
        <p className="tw-text-gray-500">Sin Seleccionar</p>
      </div>
      <div className="tw-p-4 tw-text-sm">
        <h3 className="tw-text-gray-700">Estado de retorno</h3>
        <p className="tw-text-gray-500">Sin Seleccionar</p>
      </div>
      <div className="tw-p-4 tw-text-sm">
        <h3 className="tw-text-gray-700">Capacidad de traslado</h3>
        <p className="tw-text-gray-500">Sin Seleccionar</p>
      </div>
      <div className="tw-p-4 tw-text-sm">
        <h3 className="tw-text-gray-700">Autorización del supervisor</h3>
        <p className="tw-text-gray-500">Sin Seleccionar</p>
      </div>
      <div className="tw-p-4 tw-text-sm">
        <h3 className="tw-text-gray-700">Empresa a la que pertenece</h3>
        <p className="tw-text-gray-500">Sin Seleccionar</p>
      </div>
      <div className="tw-p-4 tw-text-sm">
        <h3 className="tw-text-gray-700">
          Sistema de gestión al que pertenece
        </h3>
        <p className="tw-text-gray-500">Sin Seleccionar</p>
      </div>
      <div className="tw-p-4 tw-text-sm">
        <h3 className="tw-text-gray-700">Número Telefónico</h3>
        <p className="tw-text-gray-500">{'56 91233454'}</p>
      </div>
    </div>
  );

  const renderColor = (element) => {
    const mapIcon = {
      'En retorno': 'tw-bg-green-200 tw-text-green-600',
      amarillo: 'tw-bg-yellow-200 tw-text-yellow-600',
      Cancelado: 'tw-bg-red-200 tw-text-red-600',
    };

    return mapIcon[element];
  };

  return (
    <Section>
      <section className="tw-flex tw-flex-wrap">
        <div className="tw-w-full md:tw-w-2/3">
          <h2 className="sm:tw-text-3xl tw-text-2xl tw-font-medium tw-title-font tw-mb-4 tw-text-gray-900 tw-text-center tw-my-5">
            Listado de Viajes
          </h2>
          <div className="tw-w-full tw-flex tw-flex-wrap ">
            {data2.map((item, index) => (
              <div
                className="tw-p-2 lg:tw-w-1/2 tw-w-full tw-min-h-[106px] tw-cursor-pointer"
                onClick={() => onClickData(item)}
                key={index}
              >
                <div className="tw-flex tw-flex-wrap tw--mx-4">
                  <div className="tw-p-4">
                    <div className="tw-c-card tw-block tw-bg-white tw-shadow-md hover:tw-shadow-xl tw-rounded-lg tw-overflow-hidden">
                      <div className="tw-relative tw-pb-48 tw-overflow-hidden">
                        <img
                          className="tw-absolute tw-inset-0 tw-h-full tw-w-full tw-object-cover"
                          src="https://res.cloudinary.com/dvdb33uyj/image/upload/v1690390165/Projects/qr-service/imgs/hero/2_bjjqhz.png"
                          alt=""
                        />
                      </div>
                      <div className="tw-p-4">
                        <span className="tw-inline-block tw-px-2 tw-py-1 tw-leading-none tw-bg-orange-200 tw-text-orange-800 tw-rounded-full tw-font-semibold tw-uppercase tw-tracking-wide tw-text-xs">
                          {'En retorno'}
                        </span>
                        <h2 class="tw-mt-2 tw-mb-2 tw-font-bold">
                          Punto de Inicio: {item.startRoute} en direccion a{' '}
                          {item.return.data} a las {item.endRoute}
                        </h2>
                        <p class="tw-text-sm">
                          El viaje iniciara el dia {item.return.dater}
                        </p>
                        <div class="tw-mt-3 tw-flex tw-items-center">
                          <span class="tw-text-sm tw-font-semibold">
                            Hora de Salida:
                          </span>
                          &nbsp;
                          <span class="tw-font-bold tw-text-xl">10:00 am</span>
                          &nbsp;
                        </div>
                      </div>
                      <div class="tw-p-4 tw-border-t tw-border-b tw-text-xs tw-text-gray-700">
                        <span class="tw-flex tw-items-center tw-mb-1">
                          <i class="far fa-clock fa-fw tw-mr-2 tw-text-gray-900"></i>{' '}
                          {item.vehicle.name} {item.vehicle.model}
                        </span>
                        <span class="tw-flex tw-items-center">
                          <i class="far fa-address-card fa-fw tw-text-gray-900 tw-mr-2"></i>{' '}
                          {item.vehicle.patent}
                        </span>
                        <span class="tw-flex tw-items-center">
                          <i class="far fa-address-card fa-fw tw-text-gray-900 tw-mr-2"></i>{' '}
                          Empresa {item.company}
                        </span>
                      </div>
                      <div class="tw-p-4 tw-flex tw-items-center tw-text-sm tw-text-gray-600">
                        <svg
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          class="tw-h-4 tw-w-4 tw-fill-current tw-text-yellow-500"
                        >
                          <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                        </svg>
                        <svg
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          class="tw-h-4 tw-w-4 tw-fill-current tw-text-yellow-500"
                        >
                          <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                        </svg>
                        <svg
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          class="tw-h-4 tw-w-4 tw-fill-current tw-text-yellow-500"
                        >
                          <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                        </svg>
                        <svg
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          class="tw-h-4 tw-w-4 tw-fill-current tw-text-yellow-500"
                        >
                          <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                        </svg>
                        <svg
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          class="tw-h-4 tw-w-4 tw-fill-current tw-text-yellow-500"
                        >
                          <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                        </svg>
                        <span class="tw-ml-2">{item.nameConductor}</span>{' '}
                      </div>
                    </div>
                  </div>
                </div>

                {/* aca */}

                {/* <div
                  className={`${
                    selectedTab === item.id &&
                    'tw-border-primary tw-shadow-lg tw-bg-white'
                  } tw-h-full tw-flex hover:tw-shadow-lg hover:tw-border-slate-300 tw-items-start tw-border-gray-200 tw-border tw-p-4 tw-rounded-lg tw-relative tw-overflow-hidden tw-group`}
                >
                  <div
                    className={`tw-absolute tw-z-0 tw-w-[32px] tw-h-[32px] tw--top-4 tw--right-4 tw-rounded-full group-hover:tw-scale-[45] tw-transition-all tw-duration-500 ${
                      selectedTab === item.id ? 'tw-scale-[45]' : ''
                    }`}
                  ></div>
                  <img
                    alt="team"
                    className="tw-relative tw-z-10 tw-w-16 tw-h-16 tw-bg-gray-100 tw-object-cover tw-object-center tw-flex-shrink-0 tw-rounded-full tw-mr-4"
                    // src="https://res.cloudinary.com/dvdb33uyj/image/upload/v1692996842/Projects/qr-service/imgs/CamionIcon.webp"
                    src="https://cdn-icons-png.flaticon.com/512/5736/5736790.png"
                  />
                  <div className="tw-relative tw-z-10 tw-flex-grow">
                    <p
                      className={`tw-text-gray-900 tw-title-font tw-font-medium  tw-transition-all tw-duration-300`}
                    >
                      <small className="tw-text-gray-400 tw-font-thin">
                        Punto de Inicio:
                      </small>{' '}
                      {item.startRoute}.
                    </p>
                    <p
                      className={`tw-text-gray-900 tw-title-font tw-font-medium tw-transition-all tw-duration-300`}
                    >
                      <small className="tw-text-gray-400 tw-font-thin">
                        Destino:
                      </small>{' '}
                      {item.endRoute}.
                    </p>
                    <p
                      className={`tw-text-gray-900 tw-title-font tw-font-medium tw-transition-all tw-duration-300`}
                    >
                      <small className="tw-text-gray-400 tw-font-thin">
                        Hora de salida:
                      </small>{' '}
                      10:00 hrs
                    </p>
                    <p
                      className={`tw-text-gray-900 tw-flex tw-items-center tw-title-font tw-font-medium tw-transition-all tw-duration-300`}
                    >
                      <small className="tw-text-gray-400 tw-font-thin tw-flex tw-items-center">
                        Chofer: {item.nameConductor}
                      </small>{' '}
                    </p>
                    <p
                      className={`tw-text-gray-900 tw-flex tw-items-center tw-title-font tw-font-medium tw-transition-all tw-duration-300 ${
                        selectedTab === item.id ? 'tw-text-primary' : ''
                      }`}
                    >
                      <small className="tw-text-gray-400 tw-font-thin tw-flex tw-items-center">
                        Vehículo: {item.vehicle.name} {item.vehicle.model}
                      </small>{' '}
                    </p>
                    <p
                      className={`tw-text-gray-900 tw-flex tw-items-center tw-title-font tw-font-medium tw-transition-all tw-duration-300 ${
                        selectedTab === item.id ? 'tw-text-primary' : ''
                      }`}
                    >
                      <small className="tw-text-gray-400 tw-font-thin tw-flex tw-items-center">
                        Placa: {item.vehicle.patent}
                      </small>{' '}
                    </p>
                    <p
                      className={`tw-text-gray-900 tw-flex tw-items-center tw-title-font tw-font-medium tw-transition-all tw-duration-300 ${
                        selectedTab === item.id ? 'tw-text-primary' : ''
                      }`}
                    >
                      <small className="tw-text-gray-400 tw-font-thin tw-flex tw-items-center">
                        Empresa: {'Flotas San Miguel'}
                      </small>{' '}
                    </p>

                    <div className="tw-flex tw-justify-between tw-items-end">
                      <div></div>
                      <span
                        className={`tw-py-1 tw-px-3 tw-rounded-full tw-text-xs tw-h-max tw-w-max ${renderColor(
                          item.progress
                        )}`}
                      >
                        {item.progress}
                      </span>
                    </div>
                  </div>
                </div> */}
              </div>
            ))}
          </div>
        </div>

        <div className="tw-w-full tw-max-h-full md:tw-w-1/3 tw-bg-white tw-rounded-md tw-border tw-border-solid tw-border-gray-200 tw-mt-20 ">
          <h2 className="sm:tw-text-3xl tw-text-2xl tw-font-medium tw-title-font tw-text-gray-900 tw-text-center tw-py-5 tw-bg-gray-100">
            Detalles
          </h2>
          <AnimatePresence>
            <motion.div
              key={selectedTab ? details.id : 'empty'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              {selectedTab ? (
                <div className="tw-divide-y tw-m-4 tw-divide-gray-300 tw-overflow-y-scroll tw-h-full tw-max-h-[600px]">
                  <div className="tw-p-4 tw-text-sm">
                    <h3 className="tw-text-gray-700">
                      Nombre completo del conductor
                    </h3>
                    <p className="tw-text-gray-500">{details.nameConductor}</p>
                  </div>
                  <div className="tw-p-4 tw-text-sm">
                    <h3 className="tw-text-gray-700">Ruta punto de partida</h3>
                    <p className="tw-text-gray-500">{details.startRoute}</p>
                  </div>
                  <div className="tw-p-4 tw-text-sm">
                    <h3 className="tw-text-gray-700">Ruta punto de llegada</h3>
                    <p className="tw-text-gray-500">{details.endRoute}</p>
                  </div>
                  <div className="tw-p-4 tw-text-sm tw-flex">
                    <div className="tw-w-1/2">
                      <h3 className="tw-text-gray-700">Fecha de retorno</h3>
                      <p className="tw-text-gray-500">{details.return.dater}</p>
                    </div>
                    <div>
                      <h3 className="tw-text-gray-700">Hora de retorno</h3>
                      <p className="tw-text-gray-500">{details.return.hour}</p>
                    </div>
                  </div>
                  <div className="tw-p-4 tw-text-sm">
                    <h3 className="tw-text-gray-700">Nombre del vehículo</h3>
                    <p className="tw-text-gray-500">{details.vehicle.name}</p>
                  </div>
                  <div className="tw-p-4 tw-text-sm tw-flex">
                    <div className="tw-w-1/2">
                      <h3 className="tw-text-gray-700">Modelo</h3>
                      <p className="tw-text-gray-500">
                        {details.vehicle.model}
                      </p>
                    </div>
                    <div>
                      <h3 className="tw-text-gray-700">Matrícula</h3>
                      <p className="tw-text-gray-500">
                        {details.vehicle.patent}
                      </p>
                    </div>
                  </div>
                  <div className="tw-p-4 tw-text-sm">
                    <h3 className="tw-text-gray-700">
                      Tipo de carga que transporta
                    </h3>
                    <p className="tw-text-gray-500">
                      {details.vehicle.category}
                    </p>
                  </div>
                  <div className="tw-p-4 tw-text-sm">
                    <h3 className="tw-text-gray-700">Estado de retorno</h3>
                    <p className="tw-text-gray-500">{details.status}</p>
                  </div>
                  <div className="tw-p-4 tw-text-sm">
                    <h3 className="tw-text-gray-700">Capacidad de traslado</h3>
                    <p className="tw-text-gray-500">{details.capacity}</p>
                  </div>
                  <div className="tw-p-4 tw-text-sm">
                    <h3 className="tw-text-gray-700">
                      Autorización del supervisor
                    </h3>
                    <p className="tw-text-gray-500">{details.authorized}</p>
                  </div>
                  <div className="tw-p-4 tw-text-sm">
                    <h3 className="tw-text-gray-700">
                      Empresa a la que pertenece
                    </h3>
                    <p className="tw-text-gray-500">{details.company}</p>
                  </div>
                  <div className="tw-p-4 tw-text-sm">
                    <h3 className="tw-text-gray-700">
                      Sistema de gestión al que pertenece
                    </h3>
                    <p className="tw-text-gray-500">
                      {details.ManagementSystem}
                    </p>
                  </div>
                </div>
              ) : (
                renderFirst
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </Section>
  );
};

export default ReturnTravelPortal;
