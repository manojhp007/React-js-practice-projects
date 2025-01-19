export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start Adding some items to Your List 🚀</em>
      </p>
    );

  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / totalItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You Got Everything! Ready to go ✈️"
          : `You Have ${totalItems} Items on your list. And You Have Already packed${" "}
        ${packedItems} items (${percentage}%)`}
      </em>
    </footer>
  );
}
