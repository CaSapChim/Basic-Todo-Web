import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ModalCard } from './Modals/ModalCard';
import { TodoFormObj } from '../interface/interface';

interface TodoFormProps {
    jobs: TodoFormObj[];
}

export const TodoForm: React.FC<TodoFormProps> = ({ jobs }) => {
    const [showModal, setShowModal] = React.useState(false);
    const [selectedJob, setSelectedJob] = React.useState<TodoFormObj | null>();
    const [completeJob, setCompleteJob] = React.useState<boolean[]>([]);
    const [deleteJob, setDeleteJob] = React.useState<boolean[]>([]);
    const [confirmationModal, setConfirmationModal] = React.useState<boolean>(false);
    const [deleteIndex, setDeleteIndex] = React.useState<number | null>(null);

    const handleComplete = (index: number) => {
        setCompleteJob((prevCompleteJob) => {
            const updatedCompleteJob = [...prevCompleteJob];
            updatedCompleteJob[index] = !prevCompleteJob[index];
            return updatedCompleteJob;
        });
        jobs[index].isCompleted = !jobs[index].isCompleted;
    };

    const handleDeleteJob = (index: number) => {
        setDeleteIndex(index);
        setConfirmationModal(true);
    };

    const confirmDelete = () => {
        if (deleteIndex !== null) {
            setDeleteJob((prevDeleteJob) => {
                const updatedDeleteJob = [...prevDeleteJob];
                updatedDeleteJob[deleteIndex] = true; 
                return updatedDeleteJob;
            });
            setConfirmationModal(false);
            setDeleteIndex(null);
        }
    };

    const cancelDelete = () => {
        setConfirmationModal(false);
        setDeleteIndex(null);
    };

    const title: string = "Chi tiết công việc của bạn";

    const handleShowModal = (job: TodoFormObj) => {
        setShowModal(!showModal);
        setSelectedJob(job);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedJob(null);
    };

    return (
        <div className="mt-3 flex w-full justify-center">
            <ul className="w-1/2">
                {jobs.map((job: TodoFormObj, index: number) => (
                    deleteJob[index] ? null : (
                        <li
                            key={index}
                            className={`rounded-3xl p-2 my-2 text-xl font-mono font-medium flex items-center justify-between ${index % 2 === 0 ? 'bg-white' : 'bg-slate-200'} ${completeJob[index] ? `line-through` : ``}`}
                        >
                            <span
                                className="flex items-center"
                            >
                                <h3>
                                    <input
                                        type="checkbox"
                                        onClick={() => handleComplete(index)}
                                        className='border-gray-300 rounded h-5 w-5 translate-y-1 ml-2'
                                    />
                                </h3>
                                <span className='text-center opacity-100 ml-2'>{job.name}</span>
                            </span>
                            <span className='flex gap-3 mr-3'>
                                <h3>
                                    <FontAwesomeIcon
                                        icon="trash"
                                        size="sm"
                                        className="dark:text-white text-red-600 cursor-pointer transition-all duration-300"
                                        onClick={() => handleDeleteJob(index)}
                                    />
                                </h3>
                                <h3>
                                    <FontAwesomeIcon
                                        icon="ellipsis"
                                        size="sm"
                                        className={`dark:text-white text-green-600 cursor-pointer transition-all duration-300`}
                                        onClick={() => handleShowModal(job)}
                                    />
                                </h3>
                            </span>
                        </li>
                    )
                ))}
                <ModalCard visible={showModal} close={handleCloseModal} title={title} note={selectedJob?.note} date={`${selectedJob?.date}`} />
                {confirmationModal && (
                    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white p-4 rounded-md shadow-md animate-popupModal">
                            <p>Bạn có muốn xóa công việc này không?</p>
                            <div className="flex justify-end mt-4">
                                <button className="mr-3 text-blue-500" onClick={confirmDelete}>Có</button>
                                <button className="text-red-500" onClick={cancelDelete}>Không</button>
                            </div>
                        </div>
                    </div>
                )}
            </ul>
        </div>
    );
};
