export type Getter<T> = () => T
export type Setter<T> = (value: T) => void

export type Accessor<T> = {
  get: Getter<T>
  set?: Setter<T>
}

export interface Signal<T> {
  (): T
  (value: T): void
}

export interface ReadonlySignal<T> {
  (): T
}

export type Reactive<T> = Signal<T> &
  (T extends object
    ? { readonly [key in keyof T]: Reactive<T[key]> }
    : {})

export type ReadonlyReactive<T> = ReadonlySignal<T> &
  (T extends object
    ? { readonly [key in keyof T]: Reactive<T[key]> }
    : {})

export type ReactiveMap<T> = {
  [key in keyof T]: Reactive<T[key]>
}

export type EffectFunction = (...args: any[]) => any

export type Option<T> = {
  reactiveMap: ReactiveMap<T>
  effects: Set<EffectFunction>
  value: T
}

export type ReactiveType<T> =
  T extends Reactive<infer V> ? V : never

export type DependenciesType<T> =
  T extends [infer F, ...infer N]
  ? [ReactiveType<F>, ...DependenciesType<N>]
  : []

export type ComputedProp<T> = Getter<T> | Accessor<T>

export type Computed<T extends Getter<any> | Accessor<any>> =
  T extends Getter<infer V>
  ? ReadonlyReactive<V>
  : T extends Accessor<infer U>
  ? Reactive<U>
  : never
