import rootApi from "./rootApi";

export const searchApi = async (q) => {
  try {
    const res = await rootApi.get(`/search`, {
      params: { q: q },
    });
    return res;
  } catch (e) {
    console.error(e);
    return e;
  }
};
