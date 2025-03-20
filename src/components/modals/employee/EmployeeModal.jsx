import { useForm } from "react-hook-form";
import useEmployeeModal from "../../../hooks/useEmployeeModal";
import Modal from "../Modal";
import CustomInput from "../../inputs/Selects/CustomInput";
import CustomSelect from "../../inputs/Selects/CustomSelect";
import UploadAvatar from "../../inputs/avatar/UploadAvatar";
import { useEffect, useMemo } from "react";
import { fetchDepartments } from "../../../redux/thunks/departmentsThunk";

import { useDispatch, useSelector } from "react-redux";
import { postEmployee } from "../../../redux/thunks/employeesThunks";
import toast from "react-hot-toast";

export default function EmployeeModal() {
  const { onClose, isOpen } = useEmployeeModal();

  const dispatch = useDispatch();

  const { data: departmentsData, status: departmentsStatus } = useSelector(
    (state) => state.departments
  );
  const isDepartmentsLoading = useMemo(
    () => departmentsStatus === "loading",
    [departmentsStatus]
  );

  useEffect(() => {
    dispatch(fetchDepartments());
  }, [dispatch]);

  const departmentsOptions = departmentsData.map((department) => ({
    value: department.id,
    label: department.name,
  }));

  const { control, handleSubmit, watch, reset } = useForm({
    defaultValues: {
      name: "",
      surname: "",
      avatar: null,
      department_id: departmentsOptions ? departmentsOptions[0]?.value : null,
    },
  });

  const onSubmit = (data) => {
    if (!data.department_id || !data.avatar || !data.name || !data.surname)
      return toast.error("გთხოვთ შეავსოთ ყველა ველი!");

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("surname", data.surname);
    formData.append("department_id", data.department_id.toString());
    if (data.avatar) formData.append("avatar", data.avatar[0]);

    dispatch(postEmployee({ formData: formData })).then((response) => {
      if (response.meta.requestStatus == "fulfilled") {
        toast.success("თანამშრომლი წარმატებით დაემატა!");
        reset({
          name: "",
          surname: "",
          avatar: null,
          department_id: departmentsOptions
            ? departmentsOptions[0].value
            : null,
        });
        onClose();
      } else {
        toast.error("დაფიქსირდა შეცდომა!");
      }
    });
  };

  const handleCancel = () => {
    reset({
      name: "",
      surname: "",
      avatar: null,
      department_id: departmentsOptions ? departmentsOptions[0].value : null,
    });
    onClose();
  };

  const bodyContent = (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 md:grid-cols-2 gap-x-[60px] gap-y-[40px] rounded-[4px] px-[44px] py-[60px]"
    >
      <CustomInput
        watch={watch}
        name="name"
        placeholder=""
        min={2}
        required
        max={255}
        title="სახელი"
        control={control}
      />
      <CustomInput
        watch={watch}
        name="surname"
        placeholder=""
        min={2}
        required
        max={255}
        title="გვარი"
        control={control}
      />
      <div className="col-span-full">
        <UploadAvatar
          title="ავატარი"
          required
          name="avatar"
          control={control}
        />
      </div>
      <CustomSelect
        options={departmentsOptions}
        control={control}
        disabled={isDepartmentsLoading}
        name="department_id"
        title="დეპარტამენტი"
        required
      />
      <div className="col-span-full flex gap-[22px] justify-end items-center">
        <button
          type="button"
          onClick={handleCancel}
          className="rounded-[5px] cursor-pointer px-[16px] py-[10px] border-[1px] border-[#8338EC] text-[#343A40] bg-white font-firago font-[400] text-[16px] leading-[100%] text-center"
        >
          გაუქმება
        </button>
        <button className="rounded-[5px] px-[16px] py-[10px] border-[1px] cursor-pointer border-[#8338EC] text-white bg-[#8338EC] font-firago font-[400] text-[16px] leading-[100%] text-center">
          დაამატე თანამშრომელი
        </button>
      </div>
    </form>
  );

  return (
    <Modal
      title="თანამშრომლის დამატება"
      onClose={onClose}
      isOpen={isOpen}
      body={bodyContent}
    />
  );
}
