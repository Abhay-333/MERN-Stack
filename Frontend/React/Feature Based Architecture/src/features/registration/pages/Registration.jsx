import React from "react";
import { Card } from "../../../shared/components/Card";
import Input from "../../../shared/components/Input";
import { Select } from "../../../shared/components/Select";
import { useForm } from "react-hook-form";
import { useRHF } from "../../../shared/hooks/useRHF";

const Registration = () => {
  const { register, handleSubmit, reset } = useRHF();

  const handleFormSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Main / Form*/}
      <form
        onSubmit={() => handleSubmit(handleFormSubmit)}
        className="flex-1 p-8 flex flex-col gap-6"
      >
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Register New Employee</h1>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow">
            Register Employee
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* LEFT SECTION */}
          <div className="col-span-2 flex flex-col gap-6">
            {/* Personal Info */}
            <Card
              title="Personal Information"
              subtitle="Foundational data for the employee record."
            >
              <Input
                register={register}
                label="Full Name"
                placeholder="e.g. Jonathan R. Doe"
              />

              <div className="grid grid-cols-2 gap-4">
                <Input
                  register={register}
                  label="Email"
                  placeholder="j.doe@email.com"
                />
                <Input
                  register={register}
                  label="Phone"
                  placeholder="+91 9876543210"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Input register={register} label="Date of Birth" type="date" />
                <Select label="Nationality" />
              </div>
            </Card>

            {/* Professional */}
            <Card
              title="Professional Details"
              subtitle="Assign employee to organization tier."
            >
              <div className="grid grid-cols-2 gap-4">
                <Select label="Department" />
                <Input
                  register={register}
                  label="Role / Designation"
                  placeholder="Senior Architect"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Input
                  register={register}
                  label="Employee ID"
                  placeholder="EDT-2042"
                />
                <Input register={register} label="Joining Date" type="date" />
              </div>
            </Card>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex flex-col gap-6">
            {/* Security */}
            <Card title="Security" subtitle="">
              <Input
                register={register}
                label="Initial Password"
                type="password"
              />

              <div className="flex items-center gap-2 mt-2">
                <input type="checkbox" />
                <span className="text-sm">Enable 2FA Enforcement</span>
              </div>
            </Card>

            {/* Upload */}
            <Card title="Upload Photo" subtitle="">
              <div className="border-2 border-dashed border-gray-300 p-6 text-center rounded-lg">
                <p className="text-sm text-gray-500 mb-2">
                  Upload employee photo
                </p>
                <button className="text-blue-600 font-medium">
                  Select File
                </button>
              </div>
            </Card>

            {/* Capacity */}
            <div className="bg-gray-800 text-white p-5 rounded-xl">
              <p className="text-sm mb-2">Design Team Capacity</p>
              <div className="w-full bg-gray-600 h-2 rounded-full">
                <div className="bg-white h-2 rounded-full w-[84%]"></div>
              </div>
              <p className="text-xs mt-2 opacity-70">84%</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-4 mt-4">
          <button className="text-gray-500">Discard</button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow">
            Complete Registration
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
