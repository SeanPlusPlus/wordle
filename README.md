# WORDLE

Use this tool to filter the possible words you can play with [wordle](https://www.powerlanguage.co.uk/wordle/).

The example data structures used in this script are based on this game from January 18, 2022:

![wordle](https://i.imgur.com/vDY05YK.jpg)

### How to

If we know a character _is not_ present, add it to this variable:

```javascript
var not_present = [
    'b',
    'l',
    'a',
    's',
    't',
  ];
```

And this array is used to track if a character is present _and_ whether or not we know it's position:


```javascript
 var present = [
    {
      char: 'p',
      pos: true,
    },
    {
      char: 'o',
      pos: false,
    },
    {
      char: '',
      pos: null,
    },
    {
      char: '',
      pos: null,
    },
    {
      char: '',
      pos: null,
    },
  ];
```

### Example Output

```
$ node index.js
[
  'pekoe', 'pengo', 'peony',
  'phone', 'phony', 'pinko',
  'primo', 'prior', 'proem',
  'promo', 'prone', 'prong',
  'proof', 'proud', 'prove',
  'proxy'
] 16
```


