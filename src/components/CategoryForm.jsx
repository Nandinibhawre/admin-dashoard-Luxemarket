import { useEffect, useState } from "react";
import api from "../services/api";

export default function CategoryForm({ refresh, editingCategory, setEditingCategory }) {
  const [category, setCategory] = useState({ name: "", description: "" });

  useEffect(() => {
    if (editingCategory) {
      setCategory(editingCategory);
    }
  }, [editingCategory]);

  const handleSubmit = async () => {
 if (editingCategory) {
  await api.put(`/categories/${editingCategory.id || editingCategory._id}`, category);

      alert("Category Updated");
    } else {
      // ➕ ADD
      await api.post("/categories", category);
      alert("Category Added");
    }

    setCategory({ name: "", description: "" });
    setEditingCategory(null);
    refresh();
  };

  return (
    <div className="bg-white p-4 shadow rounded mb-4">
      <h2 className="font-bold mb-2">
        {editingCategory ? "Update Category" : "Add Category"}
      </h2>

      <input
        className="border p-2 w-full mb-2"
        value={category.name}
        placeholder="Name"
        onChange={(e) => setCategory({ ...category, name: e.target.value })}
      />

      <input
        className="border p-2 w-full mb-2"
        value={category.description}
        placeholder="Description"
        onChange={(e) => setCategory({ ...category, description: e.target.value })}
      />

      <button
        className="bg-blue-500 text-white px-4 py-2"
        onClick={handleSubmit}
      >
        {editingCategory ? "Update" : "Add"}
      </button>
    </div>
  );
}