export const getCategoriesAndDocuments = async () => {
  return await fetch(process.env.BACKEND_URL + "/api/categories")
    .then((res) => res.json())
    .then((data) => data);
};
