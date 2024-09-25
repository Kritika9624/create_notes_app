import { forwardRef } from "react";

const ConfirmDeleteModal = forwardRef(function ConfirmDeleteModal({onYes}, ref) {
    return <dialog ref={ref} className="backdrop:bg-secondary/75 p-4 px-5 w-fit rounded-lg">
        <h3 className="text-lg font-bold text-secondary mb-3">Confirm delete</h3>
        <p className="mb-10 text-gray500">Are you sure you want to delete this project?</p>
        <div className="flex items-center justify-end gap-x-6">
            <form method="dialog"><button className="cursor-pointer">Cancel</button></form>
            <button onClick={onYes} className="py-2 px-6 rounded text-sm bg-secondary text-white cursor-pointer">Yes</button>
        </div>
    </dialog>
});
export default ConfirmDeleteModal;