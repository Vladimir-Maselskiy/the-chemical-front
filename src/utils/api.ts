export const getOpenDeals = async () => {
  return await fetch('http://localhost:3001/api/deals').then(res => res.json()) as any[];
};
