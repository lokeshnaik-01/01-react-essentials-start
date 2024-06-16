# This is a documentation of react topics i've learnt.
# React 
- root component will have many components which will create a hierarchy
- custom components should start with uppercase letter as all html components are small case like div, image, etc
- we use {} to output value dynamically we can also store path in a variable and output

## Props
- we can set props("custom attributes") on components to then extract and use them in the receiving component
- we use props to send values to a functions and these values are sent as a key value pair
- if we want to create multiple components with same component structure this can be used

## Components
- We can use styling for a particular component and can import that into the jsx file check `Header.css` in components
- By default, react components execute only once
- when some content changes in a component we need to tell react it needs to be executed again

## State
- tells react data changed and react updates UI.
- useState needs to be imported
- only call Hooks inside of Component Functions
- Only call Hooks on top level
## Important notes
- JSX should return one signal element we can't return two sibling elements like two tags p, menu. because we can only return 1 value.
- we can wrap those both inside a div tag but in inspect a new div tag shows.
- we can use `Fragment` to avoid this extra div or we can also return empty tag as well like `<>JSX</>`.
