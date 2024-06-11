import "./styles/projects_page.css";

function ProjectsPage() {
    return (
        <div className="projects_page">
            <h1>
                Projects
            </h1>
            <div className="projects_type_list">
                <div className="list_item">
                    Game Dev Projects
                </div>
                <div className="list_item">
                    Coding Projects
                </div>
                <div className="list_item">
                    UI Designing Projects
                </div>
            </div>
        </div>
    )
}

export default ProjectsPage;
