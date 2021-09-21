interface System {
  import<T = any>(module: string): Promise<T>
}
declare var System: System;

//declare any necessary imported file types
declare module '*.png'
declare module '*.jpg'
