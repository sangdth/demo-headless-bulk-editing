import { FixedSizeList as List } from "react-window";

import { ItemFactory } from "./lib";
import "./styles.css";

const Row = ({ index, style }: any) => (
  <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
    <input type="checkbox" /> Row {index + 1}
  </div>
);

export default function App() {
  const items = ItemFactory.buildList(100);
  console.log("items: ", items);

  return (
    <>
      <List
        className="List"
        height={250}
        itemCount={items.length}
        itemSize={35}
        width={300}
      >
        {Row}
      </List>
      <button>Edit</button>
    </>
  );
}
