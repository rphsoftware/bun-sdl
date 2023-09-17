declare abstract class _Unique<T, UniqueName extends string> extends T { #hidden?: UniqueName; }
export type Unique<T, UniqueName extends string> = T & _Unique<T, UniqueName>;