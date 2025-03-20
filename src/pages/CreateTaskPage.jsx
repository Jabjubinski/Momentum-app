import React, { useEffect, useMemo, useState } from "react";
import Container from "../components/Container";
import CustomSelect from "../components/inputs/Selects/CustomSelect";
import CustomInput from "../components/inputs/Selects/CustomInput";
import CustomTextArea from "../components/inputs/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { fetchStatuses } from "../redux/thunks/statusesThunk";
import { fetchPriorities } from "../redux/thunks/prioritiesThunk";
import { fetchDepartments } from "../redux/thunks/departmentsThunk";
import { fetchEmployees } from "../redux/thunks/employeesThunks";
import { fetchComments } from "../redux/thunks/commentsThunk";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import { postTasks } from "../redux/thunks/tasksThunk";

export default function CreateTaskPage() {
  const [isLoading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const { data: statusesData, status: statusesStatus } = useSelector(
    (state) => state.statuses
  );
  const { data: priorityData, status: priorityStatus } = useSelector(
    (state) => state.priorities
  );
  const { data: departmentsData, status: departmentStatus } = useSelector(
    (state) => state.departments
  );
  const { data: employeesData, status: employeesStatus } = useSelector(
    (state) => state.employees
  );

  const isStatusesLoading = useMemo(
    () => statusesStatus === "loading",
    [statusesStatus]
  );

  const isPriorityLoading = useMemo(
    () => priorityStatus === "loading",
    [priorityStatus]
  );

  const isDepartmentsLoading = useMemo(
    () => departmentStatus === "loading",
    [departmentStatus]
  );

  const isEmployeesLoading = useMemo(
    () => employeesStatus === "loading",
    [employeesStatus]
  );
  useEffect(() => {
    dispatch(fetchStatuses());
    dispatch(fetchPriorities());
    dispatch(fetchDepartments());
    dispatch(fetchEmployees());
  }, [dispatch]);

  const statusesOptions = statusesData.map((status) => ({
    value: status.id,
    label: status.name,
  }));

  const priorityOptions = priorityData.map((priority) => ({
    value: priority.id,
    label: priority.name,
    icon: priority.icon,
  }));

  const departmentsOptions = departmentsData.map((department) => ({
    value: department.id,
    label: department.name,
  }));

  // const employeeOptions = employeesData.map((employee) => ({
  //   value: employee.id,
  //   label: `${employee.name} ${employee.surname}`,
  //   icon: employee.avatar,
  // }));

  const { control, handleSubmit, watch, reset, setValue } = useForm({
    defaultValues: {
      name: "",
      description: "",
      due_date: "",
      status_id: null,
      employee_id: null,
      priority_id: null,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    setLoading(true);
    dispatch(postTasks({ data: data })).then((response) => {
      setLoading(false);
      if (response.meta.requestStatus === "fulfilled") {
        alert("წარმატებით შეიქმნა ტასკი");
        reset({
          name: "",
          description: "",
          due_date: "",
          status_id: null,
          employee_id: null,
          priority_id: null,
        });
      } else {
        alert("ტასკი ვერ შეიქმნა");
      }
    });
  };

  // const commentOptions = commentsData.map((comment) => {

  // })

  // console.log(statusesData, statusesStatus)

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
    if (priorityData) {
      setValue("priority_id", priorityData[1]?.id);
    }
  }, [priorityData]);
  useEffect(() => {
    if (selectedDepartments) {
      setValue("employee_id", 2);
    }
  }, [selectedDepartments]);

  return (
    <Container
      direction="col"
      title="შექმენი ახალი დავალება"
      customStyle="flex flex-col gap-[40px]"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-row gap-[10%]">
          {/* First column */}
          <div className="flex flex-col font-firago gap-[55px] w-[50%] justify-between">
            {/* Title select */}

            <CustomInput
              isDisable={false}
              placeholder="რედბერის ლენდინგის გვერდი"
              title="სათაური"
              required={true}
              min={3}
              max={255}
              name="name"
              control={control}
              watch={watch}
            />

            {/* Description textarea */}

            <CustomTextArea
              isDisable={false}
              title={"აღწერა"}
              required={true}
              name="description"
              min={3}
              max={255}
              control={control}
              watch={watch}
            />

            {/* Priority selects */}
            <div className="font-firago flex flex-row gap-4">
              <div className="flex flex-col w-[50%]">
                <label htmlFor="priority">პრიორიტეტი*</label>
                <CustomSelect
                  options={priorityOptions}
                  isSearchable={false}
                  className="w-full font-[300]"
                  classNamePrefix="custom-select"
                  placeholder=""
                  name="priority_id"
                  control={control}
                  isDisable={isPriorityLoading}
                />
              </div>
              <div className="flex flex-col w-[50%]">
                <label htmlFor="priority">სტატუსი*</label>
                <CustomSelect
                  id="status"
                  options={statusesOptions}
                  className="font-[300]"
                  placeholder="დასაწყები"
                  isDisable={isStatusesLoading}
                  control={control}
                  name="status_id"
                />
              </div>
            </div>
          </div>

          {/* Second column */}
          <div className="flex flex-col font-firago gap-[55px] w-[50%] justify-items-start">
            {/* Department select */}
            {/* <div className="flex flex-col">
            <label htmlFor="title" className="font-[400] text-[14px]">
              დეპარტამენტი*
            </label>
            <Select
              options={department}
              isSearchable={false}
              className="w-full font-[300] "
              classNamePrefix="custom-select"
              placeholder="დიზაინის დეპარტამენტი"
            />
          </div> */}
            <CustomSelect
              options={departmentsOptions}
              placeholder="დასაწყები"
              title="დეპარტამენტი"
              required={true}
              control={control}
              name="department_id"
              isDisable={isDepartmentsLoading}
            />

            {/* Employee select using react-select */}
            <CustomSelect
              options={employeeOptions}
              placeholder="დასაწყები"
              title="საპასუხისმგებლო თანამშრომელი"
              required={true}
              control={control}
              name="employee_id"
              isDisable={isEmployeesLoading || isDepartmentsLoading}
            />
            {/* Deadline input */}

            <Controller
              control={control}
              name="due_date"
              render={({ field: { onChange, value, ...rest } }) => (
                <div className="font-firago flex flex-col gap-4 h-[100%] justify-end">
                  <label htmlFor="deadline">დედლაინი</label>
                  <input
                    type="date"
                    id="deadline"
                    className="w-[50%] p-[14px] border border-gray-300 font-[300] leading-[100%] text-[#0D0F10] rounded-[5px]"
                    value={value ? value.split("T")[0] : ""}
                    onChange={(e) => {
                      const selectedDate = new Date(e.target.value);
                      const formattedDate = selectedDate.toISOString(); // Returns format "YYYY-MM-DDTHH:mm:ss.sssZ"
                      onChange(formattedDate);
                    }}
                    {...rest}
                  />
                </div>
              )}
            />
          </div>
        </div>
        <div className="w-full flex justify-end">
          <button
            type="submit"
            className="px-[20px] py-[10px] rounded-[5px] bg-[#8338EC] text-[18px] font-[400] text-white"
            disabled={isLoading}
          >
            დავალების შექმნა
          </button>
        </div>
      </form>
    </Container>
  );
}
