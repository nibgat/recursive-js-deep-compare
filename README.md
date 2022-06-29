# JS Deep Compare

string || number || array || object

Yukarıda belirtilen tipler için derin kıyaslama yapan bir fonksiyondur.

Example:

```
import recursiveJSDeepCompare from 'recursiveJSDeepCompare';

const var1 = [
    {
        "a": 0,
        "b": [
            {
                "c": "d"
            }
        ]
    }
];

const var2 = [
    {
        "a": 0,
        "b": [
            {
                "c": "e"
            }
        ]
    }
];

console.log(recursiveJSDeepCompare(var1, var2)); // Sonuç: false
```

False gelme sebebi var1["b"][0]["c"] ile var2["b"][0]["c"] eşleşmedi.
2 veriyi recursive olarak derinlemesine gezen ve 1-1 kıyaslama yapan fonksiyon.