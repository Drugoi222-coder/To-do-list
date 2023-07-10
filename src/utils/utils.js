import { conditions } from "../constants/constants";

export const switchHighlight = (highlight) => (highlight ? " highlighted" : "");

export const switchComplete = (condition) =>
  condition === conditions.complete ? " completed" : "";
