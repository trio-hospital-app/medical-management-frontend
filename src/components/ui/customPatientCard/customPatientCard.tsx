import { Avatar } from "flowbite-react";
interface TakeSpecimenProps {
  patientName: string;
  patientID: string;
  testName?: string;
  labID?: string;
  IdName?: string;
  gender: string;
  phoneNumber: string;
  religion: string;
  nationality: string;
  maritalStatus?: string;
  age: any;
  patientEmail?: string | number;
  imgSrc?: string;
  orderedBy?: string;
  orderedDate?: string;
  testNameBackgroundColor?: string;
  layout?: number;
  tests?: { testName: string; testNameBackgroundColor: string }[];
}

function customPatientCard({
  patientName,
  patientID,
  IdName,
  labID,
  gender,
  phoneNumber,
  religion,
  nationality,
  maritalStatus,
  age,
  patientEmail,
  imgSrc,
  orderedBy,
  orderedDate,
  tests = [],
  // testNameBackgroundColor,
  layout = 1,
}: TakeSpecimenProps) {
  return (
    <>
      {layout === 1 ? (
        <div className="Patients">
          <div className="bg-white px-10 py-4 border-b mb-5">
            <div className="flex md:flex-row flex-col md:items-center justify-between py-1 border-b">
              <div className="flex items-start justify-center flex-col">
                <span className="md:text-xl font-bold text-bold capitalize">
                  {patientName}
                </span>
                <div>
                  <label
                    htmlFor="labID"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Paitent ID:
                  </label>
                  <span id="labID" className="text-ha-primary1 pl-1">
                    {patientID}
                  </span>
                </div>
                <div>
                  <label
                    htmlFor="Email"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Email:
                  </label>
                  <span id="labID" className="text-ha-primary1 pl-1 capitalize">
                    {patientEmail}
                  </span>
                </div>
              </div>
              <div className="flex items-start justify-center flex-col pl-2">
                <div className="flex md:flex-row flex-col items-center justify-start gap-2 flex-wrap">
                  {tests.map((test, index) => (
                    <span
                      key={index}
                      className={`md:text-xl font-bold text-bold px-3 text-white rounded-[1rem] py-1 text-center my-1 capitalize ${
                        test.testNameBackgroundColor || "bg-pink-400"
                      }`}
                    >
                      {test.testName}
                    </span>
                  ))}
                </div>
                <div className="px-2">
                  <label
                    htmlFor="labID"
                    className="text-sm font-semibold text-gray-500 capitalize"
                  >
                    {IdName}
                  </label>
                  <span id="labID" className="text-ha-primary1 pl-1 capitalize">
                    {labID}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-start justify-between mt-5">
              <div>
                <Avatar
                  alt="User settings"
                  img={
                    imgSrc ||
                    "https://cdn-icons-png.flaticon.com/512/666/666201.png"
                  }
                  rounded
                  bordered
                  size="xl"
                />
              </div>
              <div className="flex items-start justify-center gap-2 flex-col ">
                <div className="flex items-start justify-center flex-col">
                  <span className="text-sm font-semibold text-gray-500">
                    Gender:
                  </span>
                  <span className="font-semibold capitalize">{gender}</span>
                </div>
                <div className="flex items-start justify-center flex-col">
                  <span className="text-sm font-semibold text-gray-500">
                    Phone Number:
                  </span>
                  <span className="font-semibold">{phoneNumber}</span>
                </div>
              </div>

              <div className="flex items-start justify-center gap-2 flex-col ">
                <div className="flex items-start justify-center flex-col">
                  <span className="text-sm font-semibold text-gray-500">
                    Religion:
                  </span>
                  <span className="font-semibold capitalize">{religion}</span>
                </div>
                <div className="flex items-start justify-center flex-col">
                  <span className="text-sm font-semibold text-gray-500">
                    Nationality:
                  </span>
                  <span className="font-semibold capitalize">
                    {nationality}
                  </span>
                </div>
              </div>

              <div className="flex items-start justify-center gap-2 flex-col pr-10">
                <div className="flex items-start justify-center flex-col">
                  <span className="text-sm font-semibold text-gray-500">
                    Marital Status:
                  </span>
                  <span className="font-semibold capitalize">
                    {maritalStatus}
                  </span>
                </div>
                <div className="flex items-start justify-center flex-col">
                  <span className="text-sm font-semibold text-gray-500">
                    Age
                  </span>
                  <span className="font-semibold">{age}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="px-10 py-1 shadow flex items-start justify-start gap-5 flex-col md:flex-row">
            <div className="flex items-start justify-center flex-col">
              <span className="text-sm font-semibold text-gray-500">
                Orderd By:
              </span>
              <span className="font-semibold capitalize">{orderedBy}</span>
            </div>
            <div className="flex items-start justify-center flex-col">
              <span className="text-sm font-semibold text-gray-500">
                Orderd Date:
              </span>
              <span className="font-semibold">{orderedDate}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="Patients">
          <div className="bg-white px-10 py-4 border-b mb-5">
            <div className="flex md:flex-row flex-col md:items-center justify-between py-1 border-b">
              <div className="flex items-start justify-center flex-col">
                <span className="md:text-xl font-bold text-bold capitalize">
                  {patientName}
                </span>
                <div>
                  <label
                    htmlFor="labID"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Paitent ID:
                  </label>
                  <span id="labID" className="text-ha-primary1 pl-1">
                    {patientID}
                  </span>
                </div>
                <div>
                  <label
                    htmlFor="Email"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Email:
                  </label>
                  <span id="labID" className="text-ha-primary1 pl-1 capitalize">
                    {patientEmail}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row  md:items-start justify-between mt-5">
              <div>
                <Avatar
                  alt="User settings"
                  img={
                    imgSrc ||
                    "https://cdn-icons-png.flaticon.com/512/666/666201.png"
                  }
                  rounded
                  bordered
                  size="xl"
                />
              </div>
              <div className="flex items-start justify-center gap-2 flex-col ">
                <div className="flex items-start justify-center flex-col">
                  <span className="text-sm font-semibold text-gray-500">
                    Gender:
                  </span>
                  <span className="font-semibold capitalize">{gender}</span>
                </div>
                <div className="flex items-start justify-center flex-col">
                  <span className="text-sm font-semibold text-gray-500">
                    Phone Number:
                  </span>
                  <span className="font-semibold">{phoneNumber}</span>
                </div>
              </div>

              <div className="flex items-start justify-center gap-2 flex-col ">
                <div className="flex items-start justify-center flex-col">
                  <span className="text-sm font-semibold text-gray-500">
                    Religion:
                  </span>
                  <span className="font-semibold capitalize">{religion}</span>
                </div>
                <div className="flex items-start justify-center flex-col">
                  <span className="text-sm font-semibold text-gray-500">
                    Nationality:
                  </span>
                  <span className="font-semibold capitalize">
                    {nationality}
                  </span>
                </div>
              </div>

              <div className="flex items-start justify-center gap-2 flex-col pr-10">
                <div className="flex items-start justify-center flex-col">
                  <span className="text-sm font-semibold text-gray-500">
                    Marital Status:
                  </span>
                  <span className="font-semibold capitalize">
                    {maritalStatus}
                  </span>
                </div>
                <div className="flex items-start justify-center flex-col">
                  <span className="text-sm font-semibold text-gray-500">
                    Age
                  </span>
                  <span className="font-semibold">{age}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default customPatientCard;
