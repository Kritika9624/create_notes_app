import { faClipboardList, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import styles from '../css/sidebar.module.css';

export default function Sidebar({ onClickAdd, projectsList, onSelectProject }) {
  return (
    <aside className="text-gray100 bg-secondary w-1/5 py-8 px-4 flex flex-col gap-y-8">
      <h3 className="text-2xl pl-4">Your projects</h3>
      <div
        className=" ml-4 bg-primary py-2.5 px-8 w-max text-center rounded text-secondary flex items-center mt-4 hover:bg-primaryDark cursor-pointer transition-colors font-semibold"
        onClick={onClickAdd}
      >
        <span className="mr-1 text-sm">
          <FontAwesomeIcon icon={faPlus} />
        </span>
        <span className="ml-1">Add project</span>
      </div>
      {projectsList && (
        <div className="border-t pt-6 border-gray800">
          {projectsList.map((proj) => (
            <div
              key={proj.id}
              className="flex items-center gap-x-4 text-gray400 hover:text-gray100 hover:bg-primary/20 px-4 py-2 hover:rounded hover:border-l-2 hover:border-primary cursor-pointer mb-2"
              onClick={() => onSelectProject(proj)}
            >
              <FontAwesomeIcon icon={faClipboardList} />
              <p>{proj.title}</p>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}
