import { Magic } from "magic-sdk";

const magic =
  typeof window !== "undefined" && new Magic("pk_live_D30FCE5EB4EB6110");

export default magic;
