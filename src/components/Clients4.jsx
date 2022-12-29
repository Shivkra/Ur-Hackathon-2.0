import { clients4 } from "../constants";
import styles from "../style";

const Clients4 = () => (
  <section className={`${styles.flexCenter} my-1 pb-12`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients4.map((client) => (
        <div key={client.id} className={`flex-3 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
        <a href={client.link}>
          <img src={client.logo} alt="client_logo" className="sm:w-[320px] w-[100px] object-contain" />
        </a>
        </div>
      ))}
    </div>
  </section>
);

export default Clients4;