import React from "react";

const DiscordButton = ({ styles }) => (
  <a href="https://discord.gg/pdzKbzRJjd">
    <button
      type="button"
      className={`font-poppins font-medium text-[18px] text-primary rounded-[10px]  btn-grad ${styles}`}
    >
      Join Discord
    </button>
  </a>
);

export default DiscordButton;
