# Horizontal-scroll-react-native-web

This repository is based, inspired on this [gist](https://gist.github.com/nandorojo/92e7301a49a8b9575bb24b3b1ddc19bf) 

`ScrollView`s with `react-native-web` let mobile devices drag to scroll, and let you use your mac trackpad on desktop.

But we need to support the most perfect pointer, the mouse.

['Official answer to the horizontal scroll on the react-native-web. :('](https://github.com/necolas/react-native-web/issues/2122)

For horizontal scrollable content, such as carousels, I often find myself wanting to just wheel scroll with my mouse. 

This gist provides a simple hook that makes your `ScrollView` **`horizontal Wheelable without press "shift".`**  

It hasn't been tested with `pagingEnabled` on `FlatList`s, but it should work for normal a `FlatList` on web.

## Warning

This won't work with `react@17` because it uses `findNodeHandle`. Maybe try it without that and see if it still works? I haven't tried yet.


## How to Make hook

[Check this code](https://github.com/bhyoo99/Horizontal-scroll-react-native-web/blob/main/use-draggable-scroll.ts)


## How to Use hook

[Check this code](https://github.com/bhyoo99/Horizontal-scroll-react-native-web/blob/main/HorizontalScrollView.tsx)

