"use client";

import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import {
  validateFullName,
  validateEmail,
  validatePhone,
  validateMessage,
  VALIDATION_MESSAGES,
} from "../../utils/validations";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const [submitSuccess, setSubmitSuccess] = React.useState(false);

  const onSubmit = async (data: FormData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      reset();
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 3000);
      console.log("Form submitted:", data);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[#09060E] w-150 max-[640px]:w-full border border-[#533692] rounded-xl p-5 flex flex-col gap-4"
    >
      {submitSuccess && (
        <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-3 text-green-400 text-responsive-small">
          ✓ Message sent successfully! We'll get back to you soon.
        </div>
      )}

      <div className="grid grid-cols-2 max-[640px]:grid-cols-1 gap-4">
        {/* Full Name */}
        <div className="flex flex-col">
          <label className="text-responsive-small text-[#EDEDED] mb-1 block">
            Full Name
          </label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center z-10">
              <Image src="/nameIcon.png" alt="user" width={16} height={16} />
            </div>
            <input
              type="text"
              {...register("fullName", {
                required: VALIDATION_MESSAGES.fullName.required,
                validate: (value) =>
                  validateFullName(value) ||
                  VALIDATION_MESSAGES.fullName.invalid,
              })}
              className={`input-field pl-10 ${
                errors.fullName ? "border-red-500" : ""
              }`}
              placeholder="Enter your full name"
            />
          </div>
          {errors.fullName && (
            <span className="text-red-400 text-[10px] mt-1">
              {errors.fullName.message}
            </span>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-responsive-small text-[#EDEDED] mb-1 block">
            Email
          </label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center z-10">
              <Image src="/gmailIcon.png" alt="email" width={16} height={16} />
            </div>
            <input
              type="email"
              {...register("email", {
                required: VALIDATION_MESSAGES.email.required,
                validate: (value) =>
                  validateEmail(value) || VALIDATION_MESSAGES.email.invalid,
              })}
              className={`input-field pl-10 ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="Enter your email address"
            />
          </div>
          {errors.email && (
            <span className="text-red-400 text-[10px] mt-1">
              {errors.email.message}
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 max-[640px]:grid-cols-1 gap-4">
        {/* Phone */}
        <div className="flex flex-col">
          <label className="text-responsive-small text-[#EDEDED] mb-1 block">
            Phone
          </label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center z-10">
              <Image src="/phoneIcon.png" alt="phone" width={19} height={19} />
            </div>
            <input
              type="tel"
              {...register("phone", {
                required: VALIDATION_MESSAGES.phone.required,
                validate: (value) =>
                  validatePhone(value) || VALIDATION_MESSAGES.phone.invalid,
              })}
              className={`input-field pl-10 ${
                errors.phone ? "border-red-500" : ""
              }`}
              placeholder="Enter your phone number"
            />
          </div>
          {errors.phone && (
            <span className="text-red-400 text-[10px] mt-1">
              {errors.phone.message}
            </span>
          )}
        </div>

        {/* Select Service */}
        <div className="flex flex-col">
          <label className="text-responsive-small text-[#EDEDED] mb-1 block">
            Select Service
          </label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center z-10 pointer-events-none">
              <Image
                src="/serviceIcon.png"
                alt="service"
                width={16}
                height={16}
              />
            </div>
            <select
              {...register("service", {
                required: VALIDATION_MESSAGES.service.required,
              })}
              className={`input-field pl-10 appearance-none cursor-pointer text-[#A2A2A2] ${
                errors.service ? "border-red-500" : ""
              }`}
            >
              <option className="text-[#A2A2A2]" value="">
                Choose a service
              </option>
              <option value="Web Development">Web Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Mobile Development">Mobile Development</option>
              <option value="Branding">Branding</option>
              <option value="SEO & Marketing">SEO & Marketing</option>
              <option value="AI Solutions">AI Solutions</option>
            </select>
          </div>
          {errors.service && (
            <span className="text-red-400 text-[10px] mt-1">
              {errors.service.message}
            </span>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col">
        <label className="text-responsive-small text-[#EDEDED] mb-1 block">
          Message
        </label>
        <div className="relative">
          <div className="absolute left-3 top-3 flex items-center justify-start z-10">
            <Image
              src="/messageIcon.png"
              alt="message"
              width={16}
              height={16}
            />
          </div>
          <textarea
            {...register("message", {
              required: VALIDATION_MESSAGES.message.required,
              validate: (value) =>
                validateMessage(value) || VALIDATION_MESSAGES.message.invalid,
            })}
            className={`input-field pl-10 resize-none ${
              errors.message ? "border-red-500" : ""
            }`}
            rows={4}
            placeholder="Enter your message"
          />
        </div>
        {errors.message && (
          <span className="text-red-400 text-[10px] mt-1">
            {errors.message.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="gradient-btn w-70 max-[640px]:w-full text-white font-medium py-3 rounded-lg text-responsive-small hover:shadow-xl hover:shadow-[rgba(80,0,255,0.35)] transition-shadow self-start cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}
