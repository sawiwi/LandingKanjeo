import React, { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import {BsCheck,MdOutlineArrowDropDown} from '../../icon/index.js'


const listBox = ({selected,setSelected,plans}) => {
  return (
    <div className="tw-my-7 tw-relative">
      <Listbox value={selected} onChange={setSelected}>
        <div className="tw-relative tw-mt-1">
          <Listbox.Button className="tw-relative tw-w-full tw-cursor-default tw-rounded-full tw-border tw-bg-white tw-py-2 tw-pl-4 tw-pr-10 tw-text-left tw-shadow focus:tw-outline-none focus-visible:tw-border-indigo-500 focus-visible:tw-ring-2 focus-visible:tw-ring-white focus-visible:tw-ring-opacity-75 focus-visible:tw-ring-offset-2 focus-visible:tw-ring-offset-orange-300 sm:tw-text-sm">
            <span className="tw-block tw-truncate">{selected.name}</span>
            <span className="tw-pointer-events-none tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-items-center tw-pr-2">
              <MdOutlineArrowDropDown
                className="tw-h-5 tw-w-5 tw-text-primary"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="tw-transition tw-ease-in tw-duration-100"
            leaveFrom="tw-opacity-100"
            leaveTo="tw-opacity-0"
          >
            <Listbox.Options className="tw-absolute tw-mt-1 tw-max-h-60 tw-w-full tw-overflow-auto tw-rounded-md tw-bg-white tw-py-1 tw-text-base tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none sm:tw-text-sm">
              {plans.map((element, elementIdx) => (
                <Listbox.Option
                  key={elementIdx}
                  className={({ active }) =>
                    `tw-relative tw-cursor-default tw-select-none tw-py-2 tw-pl-10 tw-pr-4 ${active ? 'tw-bg-primary-light/20 tw-text-amber-900' : 'tw-text-gray-900'
                    }`
                  }
                  value={element}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`tw-block tw-truncate ${selected ? 'tw-font-medium' : 'tw-font-normal'
                          }`}
                      >
                        {element.name}
                      </span>
                      {selected ? (
                        <span className="tw-absolute tw-inset-y-0 tw-left-0 tw-flex tw-items-center tw-pl-3 tw-text-primary-light">
                          <BsCheck className="tw-h-5 tw-w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default listBox
