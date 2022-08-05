export function isNum(n) {
  const re_number = /[0-9]/;
  return re_number.test(n);
}

export const initVector = { x1: '', x2: '', y1: '', y2: '', z1: '', z2: '' };

export const initError = {
  status: false,
  message: '',
};
