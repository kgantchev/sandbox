export const isLucky = (n) => {
    const c = Math.pow(10, `${n}`.length / 2);
    return Math.floor(n / c) % 9 === (n - (Math.floor(n / c) * c)) % 9;
};
