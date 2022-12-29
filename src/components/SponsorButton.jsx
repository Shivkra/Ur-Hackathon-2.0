import React from "react";

const SponsorButton = ({ styles }) => (
  <a href="https://linktr.ee/Web3ForAll">
    <button
      type="button"
      className={`py-4 px-6 font-poppins font-medium text-[18px]  btn-grad rounded-[10px] outline-none ${styles}`}
    >
      Contact Us
    </button>
  </a>
);

export default SponsorButton;
