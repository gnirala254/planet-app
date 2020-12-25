export const Favorite = (obj) => ({
  type: "FAVORITE",
  payload: obj,
});

export const RemoveFavorite = (id) => ({
  type: "REMOVE",
  payload: id,
});
