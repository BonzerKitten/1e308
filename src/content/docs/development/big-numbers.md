---
title: Handling big numbers
description: Why regular numbers stop at about 1e308, and the libraries incremental games use to go further.
sidebar:
  order: 2
---

Sooner or later, most incremental games produce numbers too large for the computer to store. This page explains where that limit comes from and how other developers get past it.

## Where the limit comes from

Most languages store decimal numbers as 64-bit floating-point values, called `double` in C# and `float` in GDScript. In JavaScript, every regular number works this way.

The largest value this format can hold is about 1.8 × 10<sup>308</sup>, written as `1e308`. Go past it and the number becomes `Infinity`, which usually breaks the game.

:::caution
If your engine uses 32-bit floats, the limit is much lower: about 3.4 × 10<sup>38</sup>. Check which type your numbers actually use before assuming you have up to `1e308` to work with.
:::

## How big-number libraries work

Big-number libraries store a number in two parts, much like scientific notation: a mantissa (for example, `1.5`) and an exponent (for example, `400`), giving `1.5e400`. The exponent can grow far beyond 308, so the number can too.

The trade-off is precision. These libraries keep only a handful of significant digits, which is perfectly fine for incremental games, where nobody notices the 17th digit of a number with 400 of them.

## Libraries

**[break_infinity.js](https://github.com/Patashu/break_infinity.js)** handles numbers up to 1e(9e15), meaning a 1 followed by nine quadrillion zeros. It prioritizes speed over accuracy, which suits games that update many numbers every frame. Start here if you're working in JavaScript and your numbers stay below that limit.

**[break_eternity.js](https://github.com/Patashu/break_eternity.js)** is its successor, built for games that need to go even further. It reaches 10^^1e308, where `^^` is tetration: a tower of exponents, so `10^^3` means 10<sup>10<sup>10</sup></sup>.

### Ports to other languages

- **C#:** [BreakInfinity.cs](https://github.com/Razenpok/BreakInfinity.cs), for Unity and other C# projects
- **Rust:** [break-eternity](https://github.com/cozyGalvinism/break-eternity)
- **Go:** [breaketernity.go](https://github.com/aapedro/breaketernity.go)
- **Dart:** [break_eternity](https://pub.dev/packages/break_eternity)
- **Java:** [BreakInfinity.java](https://github.com/MeMyselfMirai/BreakInfinity.java)
