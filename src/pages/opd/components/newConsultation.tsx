import { useState } from "react";
import { useSearchPatient } from "../../../hooks/reactQuery/usePatients";
import Loader from "../../../components/ui/loader";
import SearchComponent from "../../../components/ui/SearchComponent";
import CustomPatientCard from "../../../components/ui/customPatientCard/customPatientCard";
import { useGetVisitDept } from "../../../hooks/reactQuery/useVisit";


function NewConsultation({ setPatientId, setScheme, setDept }) {
    const {
        data: visitData,
        isLoading: loadingVisit,
    } = useGetVisitDept();

    const [search, setSearch] = useState("");

    const {
        data: patientData,
        isLoading: loadingSearch,
        refetch,
        isError: errorSearch,
    } = useSearchPatient(search);


    console.log(visitData, 'visitData')


    // function to set the search patien text
    const handleChange = (event: any) => {
        setSearch(event.target.value);
    };

    //function to search patient
    const handleKeyDown = async (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (event.key === "Enter") {
            event.preventDefault();
            await refetch();
        }
    };

    // if patient is found render it true/ false
    const foundRecord = patientData?.status;

    //patient info to render
    const patient = patientData?.data[0];

    // lab drop down data
    const schemes = patient?.schemeId || [];
    //  const clinicPanels = clinicPanelData?.data || [];

    setPatientId(patient?.id);
    return (
        <div>
            {loadingSearch && <Loader />}
            {loadingVisit && <Loader />}
            <>
                <SearchComponent
                    Label=" Search Patient"
                    value={search}
                    placeholder="Search by Patient Name, ID, Email, Phone Number"
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
                {foundRecord && patient && (
                    <div>
                        <CustomPatientCard
                            key={patient.id}
                            patientName={`${patient?.salutation} ${patient?.firstName} ${patient?.middleName} ${patient?.lastName}`}
                            patientID={patient?.patientId}
                            patientEmail={patient.address.email}
                            imgSrc={patient?.address?.image}
                            gender={patient?.gender}
                            phoneNumber={patient?.phone}
                            religion={patient?.address.religion}
                            nationality={patient?.address.country}
                            maritalStatus={patient?.address.maritalStatus}
                            age={patient?.address.dob}
                            layout={2}
                        />
                    </div>
                )}

                {errorSearch && (
                    <div className="flex justify-center items-center">
                        <p className="text-red-600 font-bold mt-10">No Patient Found</p>
                    </div>
                )}

                <div className="grid px-4 gap-4">
                    <div className="grid">
                        <label className="text-sm font-semibold text-ha-primary1">
                            Scheme
                        </label>
                        <select onChange={(e) => setScheme(e.target.value)}>
                            <option>select Schemes</option>
                            {schemes?.length > 0 && schemes?.map((scheme) => (<option value={scheme?.id}>{scheme?.name}</option>))}
                        </select>
                    </div>
                    <div className="grid">
                        <label className="text-sm font-semibold text-ha-primary1">
                            Department
                        </label>
                        <select onChange={(e) => setDept(e.target.value)}>
                            <option>select Department</option>
                            {visitData?.data?.length > 0 && visitData?.data?.map((visit) => (<option value={visit?.id}>{visit?.name}</option>))}
                        </select>
                    </div>


                </div>
            </>
        </div>
    );
}

export default NewConsultation