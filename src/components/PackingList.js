import { useState } from "react";
import Items from "./Items";

export default function PackingList({
  items,
  onDeleteItems,
  handelToogleItem,
  handelClearItems,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((itms) => (
          <Items
            items={itms}
            key={itms.id}
            onDeleteItems={onDeleteItems}
            handelToogleItem={handelToogleItem}
          />
        ))}
      </ul>
      <div>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort items by input</option>
          <option value="description">Sort items by description</option>
          <option value="packed">Sort items by packed</option>
        </select>
        <button onClick={() => handelClearItems()}>Clear list</button>
      </div>
    </div>
  );
}
