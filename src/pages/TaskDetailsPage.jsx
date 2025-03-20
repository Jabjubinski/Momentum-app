import { useParams } from "react-router-dom";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import {
  fetchTaskDetails,
  putTaskStatus,
} from "../redux/thunks/taskDetailsThunk";
import Department from "../components/Task/Department";
import PriorityCard from "../components/Task/PriorityCard";
import Page404 from "./Page404";

import Placeholder from "../assets/images/placeholder.png";
import EmployeeIcon from "../assets/icons/employee.png";
import CalendarIcon from "../assets/icons/small-calendar.png";
import ChartIcon from "../assets/icons/pie-chart.png";
import CustomSelect from "../components/inputs/Selects/CustomSelect";
import { fetchStatuses } from "../redux/thunks/statusesThunk";
import { useForm } from "react-hook-form";

import CommentBoard from "../components/Task/details/CommentBoard";
import toast from "react-hot-toast";

export default function TaskDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data: statusesData, status: statusesStatus } = useSelector(
    (state) => state.statuses
  );

  const { data, status } = useSelector((state) => state.taskDetails);

  const isLoading = useMemo(() => status === "loading", [status]);
  const isStatusesLoading = useMemo(
    () => statusesStatus === "loading",
    [statusesStatus]
  );

  useEffect(() => {
    dispatch(fetchTaskDetails({ id: id }));
    dispatch(fetchStatuses());
  }, [id, dispatch]);

  const statusesOptions = statusesData
    .map((status) => ({
      value: status.id,
      label: status.name,
    }))
    .reverse();

  const { control, setValue } = useForm({
    defaultValues: {
      status_id: statusesOptions[0] ? statusesOptions[0]?.value : null,
    },
  });

  useEffect(() => {
    if (data) {
      setValue("status_id", data?.status?.id);
    }
  }, [data, setValue]);

  const onStatusChange = (status_id) => {
    dispatch(putTaskStatus({ id: id, status_id: status_id })).then(
      (response) => {
        if (response.meta.requestStatus == "fulfilled") {
          toast.success("სტატუსი წარმატებით შეიცვალა!");
        } else {
          toast.error("დაფიქსირდა შეცდომა!");
          if (data) {
            setValue("status_id", data?.status?.id);
          }
        }
      }
    );
  };

  if (isLoading)
    return (
      <Container direction="col" title="მიმდინარეობს მონაცემების ჩატვირთვა...">
        <div className="w-full h-[70dvh] flex justify-center items-center"></div>
      </Container>
    );

  if (!data) {
    return (
      <Container
        direction="col"
        customStyle="gap-[30px]"
        title="ვერ მოიძებნა მსგავსი დავალება !"
      >
        <Page404 />
      </Container>
    );
  }

  const formatDate = (date) => {
    const parsedDate = new Date(date);
    const day = parsedDate.getDate();
    const year = parsedDate.getFullYear();

    const monthNames = [
      "იან",
      "თებ",
      "მარ",
      "აპრ",
      "მაი",
      "ივნ",
      "ივლ",
      "აგვ",
      "სექ",
      "ოქტ",
      "ნოე",
      "დეკ",
    ];

    const month = monthNames[parsedDate.getMonth()];

    return ` ${month} - ${day}/${parsedDate.getMonth()}/${year}`;
  };

  const formattedDate = formatDate(data?.due_date);

  return (
    <Container direction="col" customStyle="gap-[12px] py-[40px]">
      <div className="flex gap-[18px]">
        <PriorityCard
          name={data?.priority?.name}
          icon={data?.priority?.icon}
          id={data?.priority?.id}
        />
        <Department id={data?.department?.id} name={data?.department?.name} />
      </div>
      <div className="flex w-full justify-between">
        <div className="flex flex-col gap-[26px] max-w-[715px]">
          <h2 className="font-inter font-[600] text-[34px] leading-[100%] text-[#212529]">
            {data?.name}
          </h2>
          <p className="font-firago text-[18px] text-ellipsis break-words text-[#000000] leading-[150%] font-[400]">
            {data?.description}
          </p>
          <div className="mt-[26px] flex flex-col w-[493px] gap-[18px]">
            <h2 className="font-firago font-[500] text-[24px] leading-[100%]">
              დავალების დეტაილები
            </h2>
            <div className="w-full flex flex-col">
              <div className="w-full flex items-center py-[12px] justify-between">
                <div className="flex w-2/4 items-center gap-[6px]">
                  <img
                    src={ChartIcon}
                    alt="emp"
                    width={24}
                    height={24}
                    className="w-[24px] h-[24px] object-cover"
                  />
                  <h2 className="font-firago font-[400] text-[16px] leading-[150%] text-[#474747]">
                    სტატუსი
                  </h2>
                </div>
                <div className="flex w-2/4 gap-[12px] items-center">
                  <CustomSelect
                    options={statusesOptions}
                    disabled={isStatusesLoading}
                    control={control}
                    customOnChange={onStatusChange}
                    name="status_id"
                    required
                  />
                </div>
              </div>
              <div className="w-full flex items-center py-[12px] justify-between">
                <div className="flex w-2/4 items-center gap-[6px]">
                  <img
                    src={EmployeeIcon}
                    alt="emp"
                    width={24}
                    height={24}
                    className="w-[24px] h-[24px] object-cover"
                  />
                  <h2 className="font-firago font-[400] text-[16px] leading-[150%] text-[#474747]">
                    თანამშრომელი
                  </h2>
                </div>
                <div className="flex w-2/4 gap-[12px] items-center">
                  <img
                    className="w-[32px] h-[32px] rounded-full object-cover"
                    width={32}
                    height={32}
                    src={data?.employee?.avatar || Placeholder}
                    alt="avatar"
                  />
                  <div className="flex flex-col">
                    <p className="font-firago text-[11px] leading-[100%] font-[300] text-[#474747]">
                      {data?.employee?.department?.name}
                    </p>
                    <h2 className="font-firago font-[400] mb-[14px] text-[14px] leading-[150%] text-[#0D0F10]">
                      {data?.employee?.name} {data?.employee?.surname}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="w-full flex items-center py-[12px] justify-between">
                <div className="flex w-2/4 items-center  gap-[6px]">
                  <img
                    src={CalendarIcon}
                    alt="emp"
                    width={24}
                    height={24}
                    className="w-[24px] h-[24px] object-cover"
                  />
                  <h2 className="font-firago font-[400] text-[16px] leading-[150%] text-[#474747]">
                    დავალების ვადა
                  </h2>
                </div>
                <h2 className="font-firago w-2/4 font-[400] text-[14px] leading-[150%] text-[#0D0F10]">
                  {formattedDate}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <CommentBoard taskId={id} />
      </div>
    </Container>
  );
}
