import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handelItemAddOn(item) {
    setItems((items) => [...items, item]);
  }

  function handelItemDelete(id) {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id)); // filter out the item with the id
  }

  function handelToogleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handelClearItems() {
    const confirmed = window.confirm("Are you Sure want to delete all items?");
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handelItemAddOn} />
      <PackingList
        items={items}
        onDeleteItems={handelItemDelete}
        handelToogleItem={handelToogleItem}
        handelClearItems={handelClearItems}
      />
      <Stats items={items} />
    </div>
  );
}
