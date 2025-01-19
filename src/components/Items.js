export default function Items({ items, onDeleteItems, handelToogleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={items.packed}
        onChange={() => handelToogleItem(items.id)}
      ></input>
      <span style={items.packed ? { textDecoration: "line-through" } : {}}>
        {items.description} ({items.quantity})
      </span>
      <button onClick={() => onDeleteItems(items.id)}>❌</button>
    </li>
  );
}
