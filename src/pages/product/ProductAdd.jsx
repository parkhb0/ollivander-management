import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductAdd() {
  const { farm_id } = useParams();
  const navigate = useNavigate();
  return <div>ProductAdd</div>;
}
