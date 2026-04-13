import { useEffect, useState } from "react";
import api from "../services/api";
import CategoryForm from "../components/CategoryForm";
import CategoryTable from "../components/CategoryTable";

export default function Categories() {
  const [categories, setCategories] = useState([]); 
 const [editingCategory, setEditingCategory] = useState();

 const fetchCategories = () => {
  api.get("/categories")
    .then((res) => {
      console.log(res.data); // 👈 check this
      setCategories(res.data);
    })
    .catch((err) => console.error(err));
};
  useEffect(() => {
    fetchCategories();
  }, []);

  const deleteCategory = async (id) => {
    await api.delete(`/categories/${id}`);
    fetchCategories();
  };

  return (
    <div>
   <CategoryForm
  refresh={fetchCategories}
  editingCategory={editingCategory}
  setEditingCategory={setEditingCategory}
/>
<CategoryTable
  categories={categories}
  deleteCategory={deleteCategory}
  setEditingCategory={setEditingCategory}
/>
     
    </div>
  );
}