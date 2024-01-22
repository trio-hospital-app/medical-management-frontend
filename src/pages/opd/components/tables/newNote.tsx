import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useWriteNotes } from "../../../../hooks/reactQuery/useVisit";
import Loader from "../../../../components/ui/loader";
import { toast } from "react-toastify";
import { IoArrowBackOutline } from "react-icons/io5";


function NewNote({ refetch, cid, initialData, recommendation, onClose }) {
    const [formData, setFormData] = useState({
        notes: initialData? initialData : [{ question: '', answer: '' }],
        recommendation: recommendation,
    });

    const {
        data,
        isLoading,
        mutate
    } = useWriteNotes()

    if (isLoading) {
        return <Loader />

    }

    if (data?.status) {
        toast.success('Successfully Added Note')
        mutate(null)
        onClose();
        refetch()
    }


    const handleInputChange = (index, field, value) => {
        const updatedNotes = [...formData.notes];
        updatedNotes[index][field] = value;

        setFormData({
            ...formData,
            notes: updatedNotes
        });
    };
    const handleAddNote = () => {
        setFormData({
            ...formData,
            notes: [...formData.notes, { question: '', answer: '' }]
        });
    };

    const handleRemoveNote = (index) => {
        const updatedNotes = formData.notes.filter((_, i) => i !== index);

        setFormData({
            ...formData,
            notes: updatedNotes
        });
    };

    const handleRecommendationChange = (value) => {
        setFormData({
            ...formData,
            recommendation: value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Handle form submission logic here
            console.log(formData);

            await mutate({ id: cid, data: formData })
        } catch (error) {
            console.log(error)
        }

    };

    const handleBack =()=> {
        onClose()
    }
    return (
        <div className="shadow m-2 p-3 rounded w-full">
            <form className="grid" onSubmit={handleSubmit}>

                <div className="grid">
                <div className="flex items-center justify-start w-full gap-3 cursor-pointer" onClick={handleBack}> <IoArrowBackOutline className='text-ha-primary1' />
                        <label className="font-bold text-lg text-ha-primary1">Doctor's Notes:</label></div>
                    {formData.notes.map((note, index) => (
                        <div key={index} className="flex items-center w-full gap-3 bg-blue-50 p-5 rounded-lg my-2">
                            <div className="grid gap-2 w-full">
                                <input
                                    type="text"
                                    required
                                    placeholder="Question"
                                    value={note.question}
                                    onChange={(e) => handleInputChange(index, 'question', e.target.value)}
                                />
                                <textarea
                                    className="border rounded p-1"
                                    required
                                    placeholder="Answer"
                                    rows={5}
                                    value={note.answer}
                                    onChange={(e) => handleInputChange(index, 'answer', e.target.value)}
                                />
                            </div>

                            <button type="button" onClick={() => handleRemoveNote(index)} className="text-white flex items-center justify-center gap-2 p-3 hover:bg-gray-500 rounded bg-red-500">
                                <AiOutlineDelete className='font-bold' /> <span>Remove</span>
                            </button>
                        </div>
                    ))}
                    <div className="flex items-center justify-start">
                        <button type="button" onClick={handleAddNote} className="underline my-2 p-2 rounded text-lg text-ha-primary1 w-[auto]">
                            Add New Row
                        </button>
                    </div>

                </div>
                <div className="grid my-5">
                    <label className="text-lg font-bold">Recommendations:</label>
                    <textarea
                        required
                        className="border rounded p-1"
                        rows={5}
                        value={formData.recommendation}
                        onChange={(e) => handleRecommendationChange(e.target.value)}
                    />
                </div>

                <button type="submit" className="bg-blue-600 my-2 p-3 rounded font-bold text-lg text-white hover:bg-gray-500">Submit</button>
            </form>
        </div>
    )
}

export default NewNote