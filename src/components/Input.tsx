import React from "react";
import { TodoForm } from "./TodoForm";
import { TodoFormObj } from "../interface/interface";


const Input: React.FC = () => {
    const [job, setJob] = React.useState<string>("");
    const [jobs, setJobs] = React.useState<TodoFormObj[]>([]);

    const handleAddJob = () => {
        if (job.length == 0) return;
        setJobs(prev => [...prev, 
            {   
                name: job, 
                isCompleted: false, 
                note: "Không có", 
                date: `${new Date().getHours()} giờ ${new Date().getMinutes()} phút - 
                (${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()})`
            } 
        ]);
        setJob("");
    }
    
    return (
        <>
            <div className="flex items-center justify-center mt-7">
                <input 
                    type="text" 
                    placeholder="Công việc cần làm"
                    className="p-2 w-2/6 border-2 border-solid border-white mr-2 rounded-lg outline-none shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.4)]"
                    value={job} onChange={e => setJob(e.target.value)}
                    onKeyDown={(e) => {
                    if (e.key == "Enter")
                        handleAddJob();
                    }}
                />
                <button 
                    type="button"
                    className="px-4 py-[10px] text-white rounded-lg bg-blue-950 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.4)] active:shadow-none active:scale-95 duration-200" 
                    onClick={handleAddJob}
                >
                    Thêm
                </button>
            </div>
            <TodoForm jobs={jobs}/>
        </>
    )
  }
  
  export default Input;