export const formatMoney = (amount: number, fixed = 2, suffix = 'TL'): string => {
  return amount.toFixed(fixed).replace('.', ',') + ` ${suffix}`;
};
