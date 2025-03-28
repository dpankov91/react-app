import React, { FormEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const categories = ["Groceries", "Utilities", "Entertainment"] as const;

const schema = z.object({
  description: z.string().min(10, "Description must be at least 10 characters"),
  amount: z.number().min(1, "Amount must be at least 1"),
  category: z.enum(categories),
});

const Form = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          id="description"
          type="text"
          {...register("description")}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          id="amount"
          type="number"
          {...register("amount")}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label>Category</label>
        <select {...register("category")} className="form-control">
          <option value="">Select a category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
