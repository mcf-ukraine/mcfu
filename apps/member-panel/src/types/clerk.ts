export type SignInSingleError = {
  message: string;
  long_message: string;
  code: string;
  meta: {
    param_name: string;
  };
};

export type SignInError = {
  errors: SignInSingleError[];
};
