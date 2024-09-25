import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  
  const [projectsData, setProjectsData] = useState({
    selectedPId: null,
    projects: [],
  });
  const [showForm, setShowForm] = useState(false);

  function createProjectFormHandler() {
    setShowForm(true);
  }

  function onCancelHandler() {
    setShowForm(false);
  }

  function addProjectHandler(newProjectData) {
    setProjectsData((prevData) => {
      const newProjUpdated = {
        ...newProjectData,
        id: Math.floor(Math.random() * 100),
      };

      return {
        ...prevData,
        projects: [...prevData.projects, newProjUpdated],
      };
    });
  }

  function handleSelectProject(project) {
    setProjectsData((prevData) => {
      return {
        ...prevData,
        selectedPId: project.id,
      };
    });
  }

  return (
    <main className="flex gap-4 h-screen bg-slate200">
      <Sidebar
        onClickAdd={createProjectFormHandler}
        projectsList={projectsData.projects}
        onSelectProject={handleSelectProject}
      />
      {projectsData.selectedPId === null && !showForm && (
        <NoProjectSelected onCreateProject={createProjectFormHandler} />
      )}
      {showForm && projectsData.selectedPId === null && (
        <NewProject
          onCancelProject={onCancelHandler}
          onAddProject={addProjectHandler}
        />
      )}
      {projectsData.selectedPId !== null && (
        <SelectedProject
          project={
            projectsData.projects.filter(
              (proj) => proj.id === projectsData.selectedPId
            )[0]
          }
          setProjectsData={setProjectsData}
        />
      )}
    </main>
  );
}

export default App;
