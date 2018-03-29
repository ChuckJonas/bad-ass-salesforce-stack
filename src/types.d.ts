interface Normalized<T> {
  byId: { [id: string]: T };
  allIds: string[];
}

interface System {
  import<T = any>(module: string): Promise<T>
}
declare var System: System;
