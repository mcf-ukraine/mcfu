import {
  MCFU_MEMBERSHIP_FEE_FULL,
  MCFU_MEMBERSHIP_FEE_REDUCED,
  MCFU_REGISTRATION_FEE_FULL,
  MCFU_REGISTRATION_FEE_REDUCED,
} from "../constants/feeAmounts";

export const getRegistrationFee = (age: number) => {
  if (age < 16 || age >= 65) {
    return MCFU_REGISTRATION_FEE_REDUCED;
  }
  return MCFU_REGISTRATION_FEE_FULL;
};

export const getMembershipFee = (age: number) => {
  if (age < 16 || age >= 65) {
    return MCFU_MEMBERSHIP_FEE_REDUCED;
  }
  return MCFU_MEMBERSHIP_FEE_FULL;
};
