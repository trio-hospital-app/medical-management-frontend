import {
  FaBed,
  FaMoneyBill,
  FaExclamationTriangle,
  FaBell,
  FaPrint,
  FaPen,
  FaTrash,
} from "react-icons/fa";
import { BiMale, BiFemale } from "react-icons/bi";

const PatientDetails = ({ data }) => {
  return (
    <div className="container-fluid p-5 m-auto">
      <div className="d-flex pl-5 p-3 pb-2 w-100 align-items-center justify-content-between flex-wrap">
        <div
          className="header-title pt-4 row d-flex justify-content-start"
          style={{ width: "50%" }}
        >
          <div
            className="d-flex col-2 align-items-center justify-content-center"
            style={{
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              backgroundColor: "black",
            }}
          >
            {data.gender === "Male" ? (
              <BiMale size={30} color="#fff" />
            ) : (
              <BiFemale size={30} color="#fff" />
            )}
          </div>
          <div className="header-title col-10 row">
            <h5
              className="col-12"
              style={{ fontWeight: 600, fontSize: "20px", color: "#333333" }}
            >
              {data.uhid}
            </h5>
            <div
              className="col-12"
              style={{ color: "#4f4f4f", fontWeight: 500, fontSize: "16px" }}
            >
              <span className="bot">Cardiology</span>
              <span className="bot">Neurology</span>
              <span className="bot">23-04-1990 (9:00 am UTC)</span>
            </div>
          </div>
        </div>

        <div className="w-50 d-flex align-items-center justify-content-around">
          <div className="d-flex icons align-items-center justify-content-center">
            <FaBed />
          </div>
          <div className="d-flex icons align-items-center justify-content-center">
            <FaMoneyBill />
          </div>
          <div className="d-flex icons align-items-center justify-content-center">
            <FaExclamationTriangle />
          </div>
          <div className="d-flex icons align-items-center justify-content-center">
            <FaBell />
          </div>
          <div className="d-flex icons align-items-center justify-content-center">
            <FaPrint />
          </div>
          <div className="d-flex icons align-items-center justify-content-center">
            <FaPen />
          </div>
          <div className="d-flex icons align-items-center justify-content-center bg-danger">
            <FaTrash />
          </div>
        </div>
      </div>

      {/* ... Rest of your component */}
      <div className="d-flex justify-content-center">
        <div className="w-75">
          <hr className="m-1" />
        </div>
      </div>

      <div className="row pl-5 d-flex w-100">
        <span className="row-title">PERSONAL INFORMATION</span>
        <div className="col-3 d-flex justify-content-center flex-column">
          <div className="content w-100 mb-3">
            <div
              className="w-100 mb-1"
              style={{ fontWeight: 500, fontSize: "12px", color: "#828282" }}
            >
              Gender:
            </div>
            <div
              style={{ fontWeight: 500, fontSize: "16px", color: "#333333" }}
            >
              {/* Display the gender information */}
              {data.gender}
            </div>
          </div>
          {/* Add more personal information content blocks as needed */}
        </div>
        {/* Add more columns for personal information */}
      </div>

      <div className="d-flex justify-content-center">
        <div className="w-75">
          <hr className="m-1" />
        </div>
      </div>

      <div className="row pl-5 d-flex w-100">
        <span className="row-title">DEMOGRAPHY</span>
        <div className="col-12 d-flex justify-content-center flex-column">
          <div className="content w-100 mb-3">
            <div
              className="w-100 mb-1"
              style={{ fontWeight: 500, fontSize: "12px", color: "#828282" }}
            >
              Address:
            </div>
            <div
              style={{ fontWeight: 500, fontSize: "16px", color: "#333333" }}
            >
              {/* Display the home address information */}
              {data?.home_address?.address}
            </div>
          </div>
          {/* Add more demography content blocks as needed */}
        </div>
        {/* Add more columns for demography */}
      </div>

      <div className="d-flex justify-content-center">
        <div className="w-75">
          <hr className="m-1" />
        </div>
      </div>

      <div className="row pl-5 d-flex w-100">
        <span className="row-title">NEXT OF KIN</span>
        {/* ... Next of Kin section */}
      </div>

      <div className="d-flex justify-content-center">
        <div className="w-75">
          <hr className="m-1" />
        </div>
      </div>

      <div className="row pl-5 d-flex w-100">
        <span className="row-title">PAYER INFORMATION</span>
        {/* ... Payer Information section */}
      </div>
    </div>
  );
};

export default PatientDetails;
