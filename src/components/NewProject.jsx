import { useRef, useState } from "react";
import Input from "./Input";

export default function NewProject({ onCancelProject, onAddProject }) {
  const titleRef = useRef();
  const descRef = useRef();
  const dateRef = useRef();
  const [errorMessage, setErrorMessage] = useState();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDesc = descRef.current.value;
    const enteredDueDate = dateRef.current.value;

    if (enteredTitle === "" || enteredDesc === "" || enteredDueDate === "") {
      setErrorMessage("All fields are required.");
      console.log("error");
    } else {
      onAddProject({
        title: enteredTitle,
        description: enteredDesc,
        dueDate: enteredDueDate,
      });
      onCancelProject();
    }
  }

  return (
    <div className="bg-white m-4 ml-0 rounded p-8 w-4/5 text-secondary">
      <h1 className="mb-12 text-3xl">Start a new project</h1>
      <div className="mb-8">
        <Input
          type="text"
          ref={titleRef}
          label="Title"
          placeholder="Title here"
          error={errorMessage}
        />
        <Input
          ref={descRef}
          label="Description"
          placeholder="Description here"
          textarea
          error={errorMessage}
        />
        <Input
          type="date"
          ref={dateRef}
          label="Due date"
          placeholder="Due date"
          error={errorMessage}
        />
      </div>
      <menu className="flex w-full flex items-center justify-between">
        {errorMessage ? <p className="bg-bgError text-errorText text-sm py-2 px-3 w-1/3">{errorMessage}</p> : <p></p>}
        <ul className="flex">
          <li
            className="mr-3 bg-slate200 py-3 px-7 rounded cursor-pointer text-sm"
            onClick={onCancelProject}
          >
            <button>Cancel</button>
          </li>
          <li
            className="ml-3 bg-secondary py-3 px-8 rounded text-gray100 cursor-pointer text-sm"
            onClick={handleSave}
          >
            <button>Save</button>
          </li>
        </ul>
      </menu>
    </div>
  );
}
