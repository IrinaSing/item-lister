# Notes

## console.dir()

The Console method dir() displays an interactive list of the properties of the specified JavaScript object. The output is presented as a hierarchical listing with disclosure triangles that let you see the contents of child objects.

In other words, console.dir() is the way to see all the properties of a specified JavaScript object in console by which the developer can easily get the properties of the object.

## Difference between

```js
headerTitle.textContent = 'Hello';
and
headerTitle.innerText = 'Goodbye';
```

## styles

Styles accessible via DOM do not have the same writing as in CSS, it will be in camelCase:

```js
document.getElementById("demo").style.fontWeight = "900";
//css: font-weight
```

It is not possible to apply the style parameter via DOM to all items of this class, you have to use for-loop.
