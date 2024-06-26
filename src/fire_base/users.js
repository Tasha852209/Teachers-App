import { child, get, ref, set } from 'firebase/database';
import { database } from './config';
import { Notify } from 'notiflix';

export const getUser = async id => {
  const dbRef = ref(database);

  try {
    const snapshot = await get(child(dbRef, `users/${id}`));

    if (snapshot.exists()) {
      return { id, ...snapshot.val() };
    } else {
      return null;
    }
  } catch (error) {
    Notify.failure(error.message);
  }
};

export const createUser = async (userId, body) => {
  try {
    set(ref(database, 'users/' + userId), body);

    return { id: userId, ...body };
  } catch (error) {
    Notify.failure(error.message);
  }
};

export const updateFavorites = async (id, body) => {
  try {
    set(ref(database, `users/${id}/favorites`), body);
  } catch (error) {
    Notify.failure(error.message);
  }
};
