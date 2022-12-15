import React from 'react'

const Jacopino = ({ open, onClose }) => {
  if (!open) return null;
  console.log('clicked')
  return (
        <div class = "modal-bg"  id = 'jacopino'>
            <div class = "modal">
                <h2>Digital Restoration of Early Renaissance Paintings</h2>
                <video width = "800" height = "600" controls>
                    <source src = "./images/Restored.mov"/>
                </video>

                <h3>Context and Problem</h3>
                <p>
                    Wood panels on which paintings are created such as those from 
                    Medieval and Early Renaissance Europe deteriorate over time due to moisture and temperature changes, 
                    making the paintings acquire cracks. Pigments used in the paintings also lose their vibrant colors over time.
                    However, restoring a painting is often an invasive process that can damage it, 
                    especially if restorers accidentally remove original pigment layers while cleaning it or 
                    use pigments with wrong colors. Virtual art restoration can address these issues 
                    by creating a 3D model showing what a painting would have looked like when it was created 
                    without having to restore the original painting itself.    
                </p>
                <br></br>
                <h3>3D Model of a Restored Wood Panel</h3>
                <p>
                    Collaborating with other members in Prof. Ingrid Daubechies’ 
                    virtual art restoration team and art restorers at the North Carolina Museum of Art (NCMA), 
                    I made 3D models of restored 14th century Italian panel paintings displayed at the NCMA. 
                    The model above is one of such models, and its original painting can be found 
                    <a href = "https://ncartmuseum.org/object/panel-of-an-alterpiece-st-john-the-evangelist-and-the-poisoned-chalice/">here</a>. 
                    In the restoration process, we used digital tools such as GIMP (image editing software), Python programs, 
                    and MATLAB applications to recolor aged segments and fill in cracks in those segments. 
                    To recreate the gilded background the paintings would have had centuries ago and other metal layers, 
                    I used Blender (3D modeling software). The 3D models of restored paintings 
                    shed light on lost details of their original paintings 
                    such as the silver armor of the soldier figure in the model above, which was originally thought to be 
                    brown paint due to tarnishing.  
                </p>
                    <br></br>
                <h3>Applications for Virtual Art Restoration</h3>
                <video width = "800" height = "600" controls>
                    <source src = "./images/Recoloring_App_Demo.mov"/>
                </video>
                <p>
                    To make art restorers’ virtual restoration process more intuitive, 
                    my team members and I also developed digital tools such as 
                    the recoloring software whose demo video is shown above. 
                    Using a metaphor to artists' paint mixing process, 
                    the application has slots where restorers can choose a pigment and their
                    corresponding sliders that the restorers can use to adjust the proportion 
                    of a pigment in a particular segment. Restorers at the NCMA used this application to 
                    virtually restore several paintings. 
                    <br></br>
                </p>
                <h3>Digital Art Restoration as a Learning Tool</h3>
                <p>
                    With a skill set in digital art restoration I acquired through interdisciplinary projects in 
                    art history and computer science, including this project, 
                    I led a group of six Duke undergraduate students, 
                    to whom I taught concepts in linear algebra, Python and MATLAB programming, 3D modeling,
                    and image processing through tutorials describing different parts of the virtual
                    restoration process. You can find the tutorials 
                    <a href = "https://drive.google.com/drive/folders/1DNuMIFTEACBPhfoe0w8CxxfeVK-ODIkS?usp=sharing">here</a>. 
                    You can also view a video about my team <a href = "https://www.youtube.com/watch?v=cjMSmewNuYg">here</a>.
                    <br></br>
                </p>
                <h3>Conclusion</h3>
                <p>
                    Originally, I was planning to major only in art history at Duke. 
                    Through this project, I found it meaningful that products I made benefit their users 
                    in their work processes and shed light on hidden stories behind paintings. 
                    Inspiring me to double major in computer science and art history, 
                    the project marked a turning point in my career as an undergraduate student at Duke.   
                </p>
                <span class = "modal-close" data-modal = 'jacopino'> X </span>
            </div>
        </div>
  );
};

export default Jacopino;