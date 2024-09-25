import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import { useRef } from "react";

export default function SelectedProject({ project, setProjectsData }) {
    const modalRef = useRef();

    function handleDeleteProject() {
        setProjectsData((prevData) => {
          return {
            ...prevData,
            selectedPId: null,
            projects: prevData.projects.filter(
              (proj) => proj.id !== prevData.selectedPId
            ),
          };
        });
        modalRef.current.close();
      }

  const formattedDate = new Date(project.dueDate).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  
  return (
    <div className="bg-white m-4 ml-0 rounded p-8 w-4/5 text-secondary">
      <div className="bg-primary/15 p-8 w-1/2 rounded-lg">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-3xl">{project.title}</h1>
          <div className="text-gray400">
            <span className="hover:bg-gray400/15 hover:text-gray500 p-4 rounded-full text-center cursor-pointer">
              <FontAwesomeIcon icon={faEdit} />
            </span>
            <span
              className="hover:bg-bgError hover:text-errorText p-4 rounded-full text-center cursor-pointer"
              onClick={() => modalRef.current.showModal()}
            >
              <FontAwesomeIcon icon={faTrash} />
            </span>
          </div>
        </div>
        <p className="text-gray500">{project.description}</p>
        <p className="mt-8 text-gray500 bg-gray400/15 py-1 px-2 text-sm rounded w-max">{`Due on: ${formattedDate}`}</p>
      </div>
      <ConfirmDeleteModal ref={modalRef} onYes={handleDeleteProject} />
    </div>
  );
}
