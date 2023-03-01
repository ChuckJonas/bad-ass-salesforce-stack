interface System {
  import<T = any>(module: string): Promise<T>;
}
declare let System: System;

//allow importing of files with file-loader
declare module '*.png';
declare module '*.jpg';
