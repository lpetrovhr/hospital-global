const regexEmail = /^[\w0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[\w0-9!#$%&'*+/=?^_`{|}~-]+)*@((?:[\w0-9-]*[\w0-9])*?\.)[\w0-9](?!.{8,})(?:[\w0-9-]*[\w0-9])?$/;
const regexPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,128}$/;

export const validateEmail = (value: string): boolean => {
  return regexEmail.test(value);
};

export const validatePassword = (value: string): boolean => {
  return regexPassword.test(value);
};
