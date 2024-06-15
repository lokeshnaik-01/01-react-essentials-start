export default function TabButton({ children, onSelect, isSelected }) {
  {
    /* we can pass props as well*/
  }
  function handleClick() {
    console.log("Hello world");
  }
  return (
    <li>
      {/*
        to react with DOM we don't write functions.
        we use prop the prop should prop to a function
        just name should be passed 
      */}
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
