
export const empty = <T>() => {
  const obj: Normalized<T> = {
    byId: {},
    allIds: [],
  };
  return obj;
};

export const forEach = <T>(normalizedObjs: Normalized<T>, callback: (obj: T) => void) => {
  normalizedObjs.allIds.forEach((id) => {
    callback(normalizedObjs.byId[id]);
  });
};

export const map = <T>(normalizedObjs: Normalized<T>, callback: (obj: T) => any) => {
  const ret = [];
  normalizedObjs.allIds.forEach((id) => {
    ret.push(callback(normalizedObjs.byId[id]));
  });
  return ret;
};

export const filter = <T>(normalizedObjs: Normalized<T>, callback: (obj: T) => boolean): T[] => {
  const ret: T[] = [];
  normalizedObjs.allIds.forEach((id) => {
    const item = normalizedObjs.byId[id];
    if (callback(item)) {
      ret.push(item);
    }
  });
  return ret;
};

// immuatable add item
export const addItem = <T, K extends keyof T>(normalizedObjs: Normalized<T>, key: K, item: T): Normalized<T> => {
  const index = item[key] as any;
  const byId = { ...normalizedObjs.byId, [index]: item };
  let allIds = normalizedObjs.allIds;
  if (allIds.indexOf(index) === -1) {
    allIds = normalizedObjs.allIds.concat(index);
  }
  return { byId, allIds };
};

// immuatable add item
export const addItems = <T, K extends keyof T>(normalizedObjs: Normalized<T>, key: K, items: T[]): Normalized<T> => {
  const newByIds = { };
  const allIds = normalizedObjs.allIds.slice();
  for (const item of items){
    const index = item[key] as any;
    newByIds[index] = item;
    if (allIds.indexOf(index) === -1) {
      allIds.push(index);
    }
  }
  return {
    byId: {...normalizedObjs.byId, ...newByIds},
    allIds,
  };
};

// immuatable remove item
export const removeItem = <T>(normalizedObjs: Normalized<T>, key: string): Normalized<T> => {
  const byId = { ...normalizedObjs.byId };
  delete byId[key];

  const allIds = normalizedObjs.allIds.filter((id) => {
    return id !== key;
  });
  return { byId, allIds };
};

export const fromArray = <T>(arr: T[], idFunction: (obj: T) => string): Normalized<T> => {
  const allIds = [];
  const byId = {};
  arr.forEach((item) => {
    const id = idFunction(item);
    allIds.push(id);
    byId[id] = item;
  });
  return {
    allIds,
    byId,
  };
};
