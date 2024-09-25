import NoProjects from '../assets/create-project.png'

export default function NoProjectSelected({onCreateProject}) {
  return (
    <div className="bg-white m-4 ml-0 rounded p-8 w-4/5 text-gray600 text-center">
      <div className="mx-auto mt-28 flex flex-col items-center">
        <img src={NoProjects} className='w-32 mb-4'/>
        <h3 className="text-xl font-bold mb-2.5">No project selected</h3>
        <p className="text-gray500 text-base mb-4">Select a project or get started with a new one</p>
        <div className="bg-primary py-2.5 px-6 w-max text-center rounded text-secondary flex items-center mt-4 hover:bg-primaryDark cursor-pointer transition-colors" onClick={onCreateProject}>
          <span className="font-semibold">Create new project</span>
        </div>
      </div>
    </div>
  );
}
