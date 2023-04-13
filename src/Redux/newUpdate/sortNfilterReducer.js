import React from "react";
import {
  HIGHT_TO_LOW,
  LOW_TO_HIGH,
  SORTED_HIGH_LOW_FILTER,
  SORTED_LOW_HIGH_FILTER,
} from "./actionType";

let initialState = {
  lowToHigh: [],
  highToLow: [],
  sortedLowToHigh: [],
  sortedHighToLow: [],
};

export default function sortNfilterReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case LOW_TO_HIGH:
      return {
        ...state,
        lowToHigh: payload,
      };
    case HIGHT_TO_LOW:
      return {
        ...state,
        highToLow: payload,
      };
    case SORTED_LOW_HIGH_FILTER:
      return {
        ...state,
        sortedLowToHigh: payload,
      };
    case SORTED_HIGH_LOW_FILTER:
      return {
        ...state,
        sortedHighToLow: payload,
      };
    default:
      return state;
  }
}
