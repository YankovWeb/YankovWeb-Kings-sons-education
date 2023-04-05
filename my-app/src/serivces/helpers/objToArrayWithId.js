export const transformObjectToArrayWithId = (response) => {
  const arrayWithId = Object.entries(response).map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return arrayWithId;
};
