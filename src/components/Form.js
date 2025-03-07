import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handelSumbit(e) {
    e.preventDefault();

    if (!description) return;
    const newData = { description, quantity, packed: false, id: Date.now() };
    console.log(newData);

    onAddItems(newData);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handelSumbit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(q) => setQuantity(Number(q.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items.."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
