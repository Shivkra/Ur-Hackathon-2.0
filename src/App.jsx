import styles from "./style";
import {
  Billing1,
  Billing2,
  Billing3,
  Billing4,
  Business,
  Clients0,
  Clients,
  Clients2,
  Clients3,
  Clients4,
  Clients5,
  Clients6,
  CTB,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "./components";
import GetStarted from "../src/components/GetStarted";

const App = () => (
  <div className="bg-[#FCFFE7] w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-[#FCFFE7] ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
        <div className={`ss:flex hidden ${styles.flexCenter}`}>
          <GetStarted />
        </div>
      </div>
    </div>

    <div className={`bg-[#FCFFE7] ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
         {/* <Billing1 /> */}
        {/* <Billing2 /> */}
        <Billing3 />
        <Billing4 /> 
        <Testimonials />
        <div className={`ss:flex ${styles.flexCenter}`}>
          <h1 className="text-3xl font-bold pt-12">
             SPECIAL PARTNER 
          </h1>
        </div>
        <div className={`ss:hidden hidden ${styles.flexCenter}`}>
          <h1 className="text-xl font-bold py-3">
            SPECIAL PARTNER
          </h1>
        </div>
        <Clients3 />
        <div className={`ss:flex hidden ${styles.flexCenter}`}>
          <h1 className="text-3xl font-bold pt-12">
            ⭐️⭐️⭐️ PLATINUM SPONSORS ⭐️⭐️⭐️
          </h1>
        </div>
        <div className={`ss:hidden ${styles.flexCenter}`}>
          <h1 className="text-xl font-bold py-3">
            ⭐️⭐️⭐️ PLATINUM SPONSORS ⭐️⭐️⭐️
          </h1>
        </div>
        <Clients0 />
        <div className={`ss:flex hidden ${styles.flexCenter}`}>
          <h1 className=" text-3xl font-bold pt-12">
            ⭐️⭐️ GOLD SPONSORS ⭐️⭐️
          </h1>
        </div>
        <div className={`ss:hidden ${styles.flexCenter}`}>
          <h1 className="text-xl font-bold pt-12">
            ⭐️⭐️ GOLD SPONSORS ⭐️⭐️
          </h1>
        </div>
        <Clients />
        <div className={`ss:flex hidden ${styles.flexCenter}`}>
          <h1 className="text-black text-3xl font-bold pt-12">
            ⭐️ SILVER SPONSORS ⭐️
          </h1>
        </div>
        <div className={`ss:hidden ${styles.flexCenter}`}>
          <h1 className="text-black text-xl font-bold pt-12">
            ⭐️ SILVER SPONSORS ⭐️
          </h1>
        </div>
        <Clients2 /> 
        <div className={`ss:flex hidden ${styles.flexCenter}`}>
          <h1 className="text-black text-3xl font-bold pt-12">
          COMMUNITY PARTNERS
          </h1>
        </div>
        <div className={`ss:hidden ${styles.flexCenter}`}>
          <h1 className="text-black text-xl font-bold pt-12">
          COMMUNITY PARTNERS
          </h1>
        </div>
        <Clients4 />
        <div className={`ss:flex hidden ${styles.flexCenter}`}>
          <h1 className="text-black text-3xl font-bold pt-12">
          MEDIA & OUTREACH PARTNER
          </h1>
        </div>
        <div className={`ss:hidden ${styles.flexCenter}`}>
          <h1 className="text-black text-xl font-bold pt-12">
          MEDIA & OUTREACH PARTNER
          </h1>
        </div>
        <Clients5 /> 
        <div className={`ss:flex hidden ${styles.flexCenter}`}>
          <h1 className="text-black text-3xl font-bold pt-12">
          OTHER SPONSORS
          </h1>
        </div>
        <div className={`ss:hidden ${styles.flexCenter}`}>
          <h1 className="text-black text-xl font-bold pt-12">
          OTHER SPONSORS
          </h1>
        </div>
        <Clients6 />
        <CTB />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
