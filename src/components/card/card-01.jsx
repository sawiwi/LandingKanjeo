import { motion } from 'framer-motion';
import Badge from '../ui/badge';
import { BsCheckLg } from '../icon/';
import { scrollUpVariants } from '../../utils';
import '../../assets/css/components/card/card-01.css';

const Card01 = ({ plan }) => {
  const { name, description, category, itemList } = plan;
  const _renderedPlanItems =
    itemList?.length > 0 &&
    itemList?.map((item, idx) => (
      <li
        key={idx}
        className="tw-flex tw-mb-2 tw-items-start tw-justify-start tw-text-gray-500"
      >
        <span className="tw-mt-[5px] tw-mr-2">
          <BsCheckLg className="tw-text-green-500" />
        </span>
        {item}
      </li>
    ));

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      variants={scrollUpVariants}
      className="card1 tw-relative tw-overflow-hidden tw-transition-transform tw-duration-300 tw-ease-in-out tw-transform hover:tw--translate-y-2 tw-shadow-md hover:tw-shadow-xl tw-rounded-lg tw-p-4 tw-bg-white"
    >
      <div className="tw-w-full tw-p-0 tw-m-0">
        <Badge content={category} color="blue" />
      </div>
      <div className="tw-my-2 tw-w-full tw-p-0 tw-m-0">
        <h3 className="tw-text-lg sm:tw-text-xl tw-text-black">{name}</h3>
      </div>
      <div className="tw-w-full tw-p-0 tw-m-0">
        <p className="small tw-font-thin">{description}</p>
      </div>
      <div className="tw-w-full tw-py-7 tw-m-0 tw-flex tw-justify-center tw-items-center">
        <a
          href="#contact-plan-form"
          className="tw-bg-primary tw-cursor-pointer tw-px-4 tw-py-3 tw-rounded-full tw-text-white"
        >
          Cotizar mi plan
        </a>
      </div>
      <div className="tw-w-full tw-m-0 tw-p-5">
        <ul>{_renderedPlanItems}</ul>
      </div>
    </motion.div>
  );
};

export default Card01;
