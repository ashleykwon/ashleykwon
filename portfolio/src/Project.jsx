import "./Project.css"


export default function Project({item}){
    
    return(
        <div class = "project-card">
            <div class = "row project-card-content">
                <div class = "col-6 d-flex justify-content-center project-image">
                    <img src = {item.image} alt = {item.name}/>
                </div>
                <div class = "col-6 justify-content-start project-content">
                    <div class = "project-description">
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                    </div>
                    <a href = {item.projectPage}><button>View Project</button></a>
                </div>  
            </div>
        </div>
    )
}

