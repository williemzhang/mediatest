import { BUTTON_PRESS } from "./constants.js";

export function buttonPress(value) {
  return {
    type: BUTTON_PRESS,
    payload: value
  };
}
