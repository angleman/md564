# md564

Base64 MD5 of strings and JSON, where JSON attributes are sorted before comparison for consistent results 

## Install :hammer:

```sh
npm install md564
```

## Usage :bulb:

```js
md564 = new require('md564')
console.log(MD564('hello'))        // 1TGK0fk4hfTgamcP4G5xMI
obj1  = {bar: 'grill', foo: 'man'}
obj2  = {foo: 'man', bar: 'grill'}
console.log(MD564(obj1, true))    // 3MEEOkTwl6NBNuzrYVpHeX
console.log(MD564(obj2))          // 0_8LeiEkKgp~Kwo5qV15E1
console.log(MD564(obj2, true))    // 3MEEOkTwl6NBNuzrYVpHeX
```

If param2 is ```true``` then the object attributes will be sorted prior to being made into a string and obtaining the MD5 value.

## Contributions :muscle:

:smile: Feedback, problem reports, enhancement requests are welcome.

:up: Example code are better.

:cool: Pull requests are best.

## License

### MIT
