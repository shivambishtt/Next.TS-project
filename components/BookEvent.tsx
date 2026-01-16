"use client";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  email: string;
};

function BookEvent() {
  const [email, setEmail] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (formVal) => console.log(formVal);

  return (
    <div>
      <h2>Book your form now</h2>
      {submitted ? (
        <p>Thankyou for signing up.</p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">Email</label>
          <input {...register("email")} />
        </form>
      )}
    </div>
  );
}

export default BookEvent;
