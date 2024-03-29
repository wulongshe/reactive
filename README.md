# REACTIVE

## 简介

> 基于 `Function` 和 `Proxy` 的响应式核心

## 安装

```bash
# npm
npm i @micro-cube/reactive
# or yarn
yarn i @micro-cube/reactive
# or pnpm
pnpm i @micro-cube/reactive
```

## 案例

```ts
import { useReactive, useEffect } from '@micro-cube/reactive'

// 创建响应式对象
const data = useReactive(1)
let double = NaN

useEffect(() => {
  // 读取data, 不加参数为读取操作
  double = data() * 2
})

console.log(double) // 2

// data写入3，加参数为写入操作
data(3)
console.log(double) // 6
```

## 测试

> [测试用例](https://github.com/Yuki-0505/reactive/tree/master/tests)

- [effect](https://github.com/Yuki-0505/reactive/blob/master/tests/effect.spec.ts)
- [signal](https://github.com/Yuki-0505/reactive/blob/master/tests/signal.spec.ts)
- [reactive](https://github.com/Yuki-0505/reactive/blob/master/tests/reactive.spec.ts)
- [computed](https://github.com/Yuki-0505/reactive/blob/master/tests/computed.spec.ts)
- [watch](https://github.com/Yuki-0505/reactive/blob/master/tests/watch.spec.ts)
