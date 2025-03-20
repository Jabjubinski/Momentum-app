import { Controller, useForm } from "react-hook-form";
import Container from "../components/Container";
import Input from "../components/inputs/Selects/CustomInput";
import TextArea from "../components/inputs/TextArea";
import CustomSelect from "../components/inputs/Selects/CustomSelect";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { fetchEmployees } from "../redux/thunks/employeesThunks";
import { fetchStatuses } from "../redux/thunks/statusesThunk";
import { fetchPriorities } from "../redux/thunks/prioritiesThunk";
import { fetchDepartments } from "../redux/thunks/departmentsThunk";
import { postTasks } from "../redux/thunks/tasksThunk";
import DateInput from "../components/inputs/calendar/DateInput"

import { useNavigate } from "react-router-dom";
import useEmployeeModal from "../hooks/useEmployeeModal";
import toast from "react-hot-toast";

export default function CreateTaskPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { onOpen: openEmployeeModal } = useEmployeeModal();
  const [isLoading, setLoading] = useState(false);

  const { data: employeesData, status: employeesStatus } = useSelector(
    (state) => state.employees
  );
  const { data: statusesData, status: statusesStatus } = useSelector(
    (state) => state.statuses
  );
  const { data: prioritiesData, status: prioritiesStatus } = useSelector(
    (state) => state.priorities
  );
  const { data: departmentsData, status: departmentsStatus } = useSelector(
    (state) => state.departments
  );

  const isEmployeesLoading = useMemo(
    () => employeesStatus === "loading",
    [employeesStatus]
  );
  const isStatusesLoading = useMemo(
    () => statusesStatus === "loading",
    [statusesStatus]
  );
  const isPrioritiesLoading = useMemo(
    () => prioritiesStatus === "loading",
    [prioritiesStatus]
  );
  const isDepartmentsLoading = useMemo(
    () => departmentsStatus === "loading",
    [departmentsStatus]
  );

  useEffect(() => {
    dispatch(fetchEmployees());
    dispatch(fetchStatuses());
    dispatch(fetchPriorities());
    dispatch(fetchDepartments());
  }, [dispatch]);

  const departmentsOptions = departmentsData.map((department) => ({
    value: department.id,
    label: department.name,
  }));

  const statusesOptions = statusesData.map((status) => ({
    value: status.id,
    label: status.name,
  }));

  const prioritiesOptions = prioritiesData.map((priority) => ({
    value: priority.id,
    label: priority.name,
    icon: priority.icon,
  }));

  const currentDate = new Date();
  const { control, handleSubmit, watch, reset, setValue } = useForm({
    defaultValues: {
      name: "",
      description: "",
      department_id: departmentsOptions[0]
        ? departmentsOptions[0]?.value
        : null,
      priority_id: prioritiesOptions[0] ? prioritiesOptions[0]?.value : null,
      status_id: statusesOptions[0] ? statusesOptions[0]?.value : null,
      employee_id: null,
      due_date: `${currentDate.getFullYear()}-${String(
        currentDate.getMonth() + 1
      ).padStart(2, "0")}-${String(currentDate.getDate()).padStart(2, "0")}`,
    },
  });

  const onSubmit = (data) => {
    setLoading(true);
    dispatch(postTasks({ data: data })).then((response) => {
      setLoading(false);
      if (response.meta.requestStatus == "fulfilled") {
        toast.success("დავალება წარმატებით დაემატა!");
        navigate("/");
        reset({
          name: "",
          description: "",
          department_id: null,
          priority_id: prioritiesOptions[1]?.value,
          status_id: null,
          employee_id: null,
          due_date: `${currentDate.getFullYear()}-${String(
            currentDate.getMonth() + 1
          ).padStart(2, "0")}-${String(currentDate.getDate()).padStart(
            2,
            "0"
          )}`,
        });
      } else {
        toast.error("დაფიქსირდა შეცდომა!");
      }
    });
  };

  const selectedDepartments = watch("department_id");

  const filteredEmployees = useMemo(() => {
    return employeesData.filter((employee) => {
      return employee?.department?.id === selectedDepartments;
    });
  }, [employeesData, selectedDepartments]);

  const employeeOptions = filteredEmployees
    .map((employee) => ({
      value: employee.id,
      label: `${employee.name} ${employee.surname}`,
      icon: employee.avatar,
    }))
    .reverse();

  useEffect(() => {
    setValue("priority_id", prioritiesOptions[1]?.value);
  }, [prioritiesOptions, setValue]);

  return (
    <Container
      direction="col"
      title="შექმენი ახალი დავალება"
      customStyle="flex flex-col gap-[40px]"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-[0.3px] grid grid-cols-1 md:grid-cols-2 gap-x-[60px] gap-y-[40px] border-[#DDD2FF] rounded-[4px] bg-[#FBF9FFA6] px-[44px] py-[60px]"
      >
        <Input
          watch={watch}
          name="name"
          placeholder=""
          min={3}
          required={"ჩაწერეთ სახელი"}
          max={255}
          title="სათაური"
          control={control}
        />
        <CustomSelect
          options={departmentsOptions}
          control={control}
          required={"აირჩიეთ დეპარტამენტი"}
          disabled={isDepartmentsLoading}
          name="department_id"
          title="დეპარტამენტი"
        />
        <TextArea
          watch={watch}
          name="description"
          placeholder=""
          min={4}
          required={"ჩაწერეთ აღწერა"}
          max={255}
          title="აღწერა"
          control={control}
        />
        <CustomSelect
          options={employeeOptions}
          control={control}
          disabled={isEmployeesLoading || !selectedDepartments}
          name="employee_id"
          customButton={openEmployeeModal}
          title="პასუხისმგებელი თანამშრომელი"
          required={"აირჩიეთ პასუხისმგებელი თანამშრომელი"}
        />
        <div className="flex gap-[15px]">
          <CustomSelect
            options={prioritiesOptions}
            disabled={isPrioritiesLoading}
            control={control}
            name="priority_id"
            title="პრიორიტეტი"
            required={"აირჩიეთ პრიორიტეტი"}
          />
          <CustomSelect
            options={statusesOptions}
            disabled={isStatusesLoading}
            control={control}
            name="status_id"
            title="სტატუსი"
            required={"აირჩიეთ სტატუსი"}
          />
        </div>
        <div className="flex flex-col gap-[10px]">
          <label className="text-firago font-[400] text-[16px] leading-[100%]">
            დასრულების თარიღი
          </label>
          <Controller
            control={control}
            name="due_date"
            rules={{ required: "აირჩიეთ თარიღი " }}
            render={({ field }) => (
              <DateInput
                onChange={(date) => {
                  if (date) {
                    field.onChange(
                      `${date.getFullYear()}-${String(
                        date.getMonth() + 1
                      ).padStart(2, "0")}-${String(date.getDate()).padStart(
                        2,
                        "0"
                      )}`
                    );
                  } else {
                    field.onChange(null);
                  }
                }}
                value={field.value}
              />
            )}
          />
        </div>
        <div className="col-span-full flex justify-end items-center">
          <button
            type="submit"
            disabled={isLoading}
            className="rounded-[5px] cursor-pointer px-[20px] py-[10px] font-firago font-[400] text-[18px] text-[#FFFFFF] leading-[100%] bg-[#8338EC]"
          >
            დავალების შექმნა
          </button>
        </div>
      </form>
    </Container>
  );
}
