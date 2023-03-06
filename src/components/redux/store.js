import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import todosReducer from './todosSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //locale storage için
import storageSession from 'redux-persist/lib/storage/session'; //session storage için
import thunk from 'redux-thunk'; // what is that idk ??-->search this
import galleryReducer from './gallerySlice';

const userPersistConfig = {
  key: 'users',
  storage: storageSession,
};

const todosPersistConfig = {
  key: 'todos',
  storage,
};

const galleryPersistConfig = {
  key: 'gallery',
  storage: storageSession,
  // whitelist:['photos'],
  blacklist:['message','isLoading']

};

const userPersistReducer = persistReducer(userPersistConfig, userReducer);

const todosPersistReducer = persistReducer(todosPersistConfig, todosReducer);

const galleryPersistReducer = persistReducer(galleryPersistConfig, galleryReducer);

const rootReducer = combineReducers({
  users: userPersistReducer,
  todos: todosPersistReducer,
  photoState: galleryPersistReducer,
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);
// const persistConfig = {
//   key: 'root',
//   // storage, // local storage için storage:storage-->storage
//   storage: storageSession,
// };

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

// export const store = configureStore({
//   reducer: {
//     users: userPersistReducer,
//     todos: todosPersistReducer,
//   },
//   middleware: [thunk],
// });

export const persistor = persistStore(store);

// /// ORIGINAL SETTING AREA///////////

// export const store = configureStore({
//   reducer: userReducer,
//   middleware: [thunk],
// });

// ////////////////////////////////////////
