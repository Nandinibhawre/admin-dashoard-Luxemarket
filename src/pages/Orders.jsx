import { useEffect, useState } from "react";
import api from "../services/Api.js";
import OrderTable from "../components/OrderTable";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get("/orders").then((res) => setOrders(res.data));
  }, []);

  const approve = async (id) => {
    await api.put(`/orders/${id}/approve`);
    alert("Approved");
  };

  return <OrderTable orders={orders} approve={approve} />;
}