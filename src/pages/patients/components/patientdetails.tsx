const PatientDetails = ({ data }) => {
  console.log(data);
  return (
    <div className="container-fluid p-5 m-auto">
      <div className="row pl-5 d-flex w-100">
        <span className="row-title">PERSONAL INFORMATION</span>
        <div className="grid grid-cols-3">
          <div className="content w-100 mb-3">
            <div
              className="w-100 mb-1"
              style={{ fontWeight: 500, fontSize: "12px", color: "#828282" }}
            >
              Patien ID:
            </div>
            <div
              style={{ fontWeight: 500, fontSize: "16px", color: "#333333" }}
            >
              {data.patientId}
            </div>
          </div>
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
              {data.gender}
            </div>
          </div>
          <div className="content w-100 mb-3">
            <div
              className="w-100 mb-1"
              style={{ fontWeight: 500, fontSize: "12px", color: "#828282" }}
            >
              FullName:
            </div>
            <div
              style={{ fontWeight: 500, fontSize: "16px", color: "#333333" }}
            >
              {data?.salutation} {data?.firstName} {data?.lastName}
            </div>
          </div>
          <div className="content w-100 mb-3">
            <div
              className="w-100 mb-1"
              style={{ fontWeight: 500, fontSize: "12px", color: "#828282" }}
            >
              Phone Number:
            </div>
            <div
              style={{ fontWeight: 500, fontSize: "16px", color: "#333333" }}
            >
              {data?.phone}
            </div>
          </div>
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
              {data?.gender}
            </div>
          </div>
          <div className="content w-100 mb-3">
            <div
              className="w-100 mb-1"
              style={{ fontWeight: 500, fontSize: "12px", color: "#828282" }}
            >
              Date Of Birth:
            </div>
            <div
              style={{ fontWeight: 500, fontSize: "16px", color: "#333333" }}
            >
              {data?.address?.dob}
            </div>
          </div>
          <div className="content w-100 mb-3">
            <div
              className="w-100 mb-1"
              style={{ fontWeight: 500, fontSize: "12px", color: "#828282" }}
            >
              Email:
            </div>
            <div
              style={{ fontWeight: 500, fontSize: "16px", color: "#333333" }}
            >
              {data?.address?.email}
            </div>
          </div>
          <div className="content w-100 mb-3">
            <div
              className="w-100 mb-1"
              style={{ fontWeight: 500, fontSize: "12px", color: "#828282" }}
            >
              ID:
            </div>
            <div
              style={{ fontWeight: 500, fontSize: "16px", color: "#333333" }}
            >
              {data?.address?.identificationNumber}
            </div>
          </div>
          <div className="content w-100 mb-3">
            <div
              className="w-100 mb-1"
              style={{ fontWeight: 500, fontSize: "12px", color: "#828282" }}
            >
              ID Type:
            </div>
            <div
              style={{ fontWeight: 500, fontSize: "16px", color: "#333333" }}
            >
              {data?.address?.identificationType}
            </div>
          </div>

          <div className="content w-100 mb-3">
            <div
              className="w-100 mb-1"
              style={{ fontWeight: 500, fontSize: "12px", color: "#828282" }}
            >
              Marital Status:
            </div>
            <div
              style={{ fontWeight: 500, fontSize: "16px", color: "#333333" }}
            >
              {data?.address?.maritalStatus}
            </div>
          </div>

          <div className="content w-100 mb-3">
            <div
              className="w-100 mb-1"
              style={{ fontWeight: 500, fontSize: "12px", color: "#828282" }}
            >
              Occupation:
            </div>
            <div
              style={{ fontWeight: 500, fontSize: "16px", color: "#333333" }}
            >
              {data?.occupation}
            </div>
          </div>

          <div className="content w-100 mb-3">
            <div
              className="w-100 mb-1"
              style={{ fontWeight: 500, fontSize: "12px", color: "#828282" }}
            >
              Last Appointment:
            </div>
            <div
              style={{ fontWeight: 500, fontSize: "16px", color: "#333333" }}
            >
              {data?.lastAppointment}
            </div>
          </div>

          <div className="content w-100 mb-3">
            <div
              className="w-100 mb-1"
              style={{ fontWeight: 500, fontSize: "12px", color: "#828282" }}
            >
              Next Appointment:
            </div>
            <div
              style={{ fontWeight: 500, fontSize: "16px", color: "#333333" }}
            >
              {data?.address?.nextAppointment || "Null"}
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div className="w-75">
          <hr className="m-1" />
        </div>
      </div>

      <div className="row pl-5 d-flex w-100">
        <span className="row-title">DEMOGRAPHY</span>

        <div className="grid grid-cols-3">
          <div className="content w-100 mb-3">
            <div
              className="w-100 mb-1"
              style={{ fontWeight: 500, fontSize: "12px", color: "#828282" }}
            >
              Address:
            </div>
            <div
              className="capitalize"
              style={{ fontWeight: 500, fontSize: "16px", color: "#333333" }}
            >
              {data?.address?.address}
            </div>
          </div>
          <div className="content w-100 mb-3">
            <div
              className="w-100 mb-1"
              style={{ fontWeight: 500, fontSize: "12px", color: "#828282" }}
            >
              City:
            </div>
            <div
              className="capitalize"
              style={{ fontWeight: 500, fontSize: "16px", color: "#333333" }}
            >
              {data?.address?.city}
            </div>
          </div>
          <div className="content w-100 mb-3">
            <div
              className="w-100 mb-1"
              style={{ fontWeight: 500, fontSize: "12px", color: "#828282" }}
            >
              Country:
            </div>
            <div
              className="capitalize"
              style={{ fontWeight: 500, fontSize: "16px", color: "#333333" }}
            >
              {data?.address?.country}
            </div>
          </div>
          <div className="content w-100 mb-3">
            <div
              className="w-100 mb-1"
              style={{ fontWeight: 500, fontSize: "12px", color: "#828282" }}
            >
              State:
            </div>
            <div
              className="capitalize"
              style={{ fontWeight: 500, fontSize: "16px", color: "#333333" }}
            >
              {data?.address?.state}
            </div>
          </div>
          <div className="content w-100 mb-3">
            <div
              className="w-100 mb-1"
              style={{ fontWeight: 500, fontSize: "12px", color: "#828282" }}
            >
              LGA:
            </div>
            <div
              className="capitalize"
              style={{ fontWeight: 500, fontSize: "16px", color: "#333333" }}
            >
              {data?.address?.lga}
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div className="w-75">
          <hr className="m-1" />
        </div>
      </div>

      <div className="row pl-5 d-flex w-100">
        <span className="row-title">NEXT OF KIN</span>
        {/* ... Next of Kin section */}
        <div className="grid grid-cols-3">
          <div className="content w-100 mb-3">
            <div
              className="w-100 mb-1"
              style={{ fontWeight: 500, fontSize: "12px", color: "#828282" }}
            >
              Name:
            </div>
            <div
              className="capitalize"
              style={{ fontWeight: 500, fontSize: "16px", color: "#333333" }}
            >
              {data?.address?.nok.name}
            </div>
          </div>

          <div className="grid grid-cols-3">
            <div className="content w-100 mb-3">
              <div
                className="w-100 mb-1"
                style={{ fontWeight: 500, fontSize: "12px", color: "#828282" }}
              >
                Phone Number:
              </div>
              <div
                className="capitalize"
                style={{ fontWeight: 500, fontSize: "16px", color: "#333333" }}
              >
                {data?.address?.nok.phoneNumber}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3">
            <div className="content w-100 mb-3">
              <div
                className="w-100 mb-1"
                style={{ fontWeight: 500, fontSize: "12px", color: "#828282" }}
              >
                Relationship:
              </div>
              <div
                className="capitalize"
                style={{ fontWeight: 500, fontSize: "16px", color: "#333333" }}
              >
                {data?.address?.nok.relationship}
              </div>
            </div>
          </div>
          <div className="content w-100 mb-3">
            <div
              className="w-100 mb-1"
              style={{ fontWeight: 500, fontSize: "12px", color: "#828282" }}
            >
              State:
            </div>
            <div
              className="capitalize"
              style={{ fontWeight: 500, fontSize: "16px", color: "#333333" }}
            >
              {data?.address?.nok.state}
            </div>
          </div>
          <div className="content w-100 mb-3">
            <div
              className="w-100 mb-1"
              style={{ fontWeight: 500, fontSize: "12px", color: "#828282" }}
            >
              LGA:
            </div>
            <div
              className="capitalize"
              style={{ fontWeight: 500, fontSize: "16px", color: "#333333" }}
            >
              {data?.address?.nok.lga}
            </div>
          </div>
          <div className="content w-100 mb-3">
            <div
              className="w-100 mb-1"
              style={{ fontWeight: 500, fontSize: "12px", color: "#828282" }}
            >
              City:
            </div>
            <div
              className="capitalize"
              style={{ fontWeight: 500, fontSize: "16px", color: "#333333" }}
            >
              {data?.address?.nok?.city}
            </div>
          </div>
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
    </div>
  );
};

export default PatientDetails;
