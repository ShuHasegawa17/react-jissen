import * as yup from 'yup';

const jpLocale = {
  mixed: {
    required: (param) => `${param.label}は必須です！`,
  },
  string: {
    min: (param) => `${param.label}は${param.min}以上にしてください！`,
    max: (param) => `${param.label}は${param.max}以下にしてください！`,
  },
};

yup.setLocale(jpLocale);
export default yup;
