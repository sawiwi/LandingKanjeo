import { motion } from 'framer-motion';
import Badge from '../ui/badge';
import { BsCheckLg, BsCheckCircleFill  } from '../icon/';
import { scrollUpVariants } from '../../utils';
import '../../assets/css/components/card/card-01.css';

const Card01 = ({ plan }) => {
  const { name, description, category, itemList } = plan;
  const _renderedPlanItems =
    itemList?.length > 0 &&
    itemList?.map((item, idx) => (
      <li
        key={idx}
        className="tw-flex tw-mb-2 tw-items-start tw-justify-start tw-text-gray-800"
      >
        <span className="tw-mt-[5px] tw-mr-2">
          <BsCheckCircleFill className="tw-text-green-500" />
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
      className="card1 tw-relative tw-overflow-hidden tw-transition-transform tw-duration-300 tw-ease-in-out tw-transform hover:tw--translate-y-2 tw-shadow-md tw-shadow-secondary-light/20 hover:tw-shadow-xl tw-rounded-lg tw-p-4 tw-bg-gray-50"
    >
      <div className="tw-w-full tw-p-0 tw-m-0">
        <Badge content={category} color="blue" />
      </div>
      <div className="tw-my-2 tw-w-full tw-p-0 tw-m-0">
        <h3 className="tw-text-lg sm:tw-text-xl tw-text-secondary">{name}</h3>
      </div>
      <div className="tw-w-full tw-p-0 tw-m-0">
        <p className="small tw-font-thin tw-text-gray-800">{description}</p>
      </div>
      <div className="tw-w-full tw-py-7 tw-m-0 tw-flex tw-justify-center tw-items-center xl:tw-mt-7">
        <a
          href="#contact-plan-form"
          className="tw-bg-secondary tw-cursor-pointer tw-px-4 tw-py-3 tw-rounded-full tw-text-primary"
        >
          Cotizar plan
        </a>
      </div>
      <div className="tw-w-full tw-m-0 tw-p-5  xl:tw-mt-8">
        <ul>{_renderedPlanItems}</ul>
      </div>
    </motion.div>
  );
};

export default Card01;
