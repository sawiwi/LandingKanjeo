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
        className="flex mb-2 items-start justify-start text-gray-800"
      >
        <span className="mt-[5px] mr-2">
          <BsCheckCircleFill className="text-green-500" />
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
      className="card1 relative overflow-hidden transition-transform duration-300 ease-in-out transform hover:-translate-y-2 shadow-md shadow-secondary-light/20 hover:shadow-xl rounded-lg p-4 bg-gray-50"
    >
      <div className="w-full p-0 m-0">
        <Badge content={category} color="blue" />
      </div>
      <div className="my-2 w-full p-0 m-0">
        <h3 className="text-lg sm:text-xl text-secondary">{name}</h3>
      </div>
      <div className="w-full p-0 m-0">
        <p className="small font-thin text-gray-800">{description}</p>
      </div>
      <div className="w-full py-7 m-0 flex justify-center items-center xl:mt-7">
        <a
          href="#contact-plan-form"
          className="bg-secondary cursor-pointer px-4 py-3 rounded-full text-primary"
        >
          Cotizar plan
        </a>
      </div>
      <div className="w-full m-0 p-5  xl:mt-8">
        <ul>{_renderedPlanItems}</ul>
      </div>
    </motion.div>
  );
};

export default Card01;
