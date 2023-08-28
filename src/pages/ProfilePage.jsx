import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import avatar1 from '../assets/icons/avatar.svg';
import logoutbtn from '../assets/icons/logout.svg';
import { TbCameraPlus } from 'react-icons/tb';
import { GrClose } from "react-icons/gr";

const ProfilePage = () => {
  const history = useNavigate();
  const [isClosed, setIsClosed] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [pic, setPic] = useState(null);
  
  const patientData = localStorage.getItem('patient')
  const patient = JSON.parse(patientData);
  const handleFileChange = (event) => setAvatar(event.target.files[0]); 

  // useEffect( () => {
  //   setIsLoading(true);
  //   fetch(`https://hospital-management-backend.onrender.com/patient/${patient.id}/get-image`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPic(data);
  //       setIsLoading(false);
  //       console.log(pic);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setIsLoading(false)
  //     });
  // }, []);

  const handleExit = () => setIsClosed(true);  

  const handleUpload = async() => {
      setIsUploading(true);
      try {
          console.log(avatar);
          const formData = new FormData();
          formData.append('image', avatar )
          const response = await fetch(`https://hospital-management-backend.onrender.com/patient/${patient.id}/upload-picture`, {
              method: 'POST',
              body: formData,
          })
          const data = await response.json();
          if(response.ok){
              console.log(data);
              setIsUploading(false);
              setIsClosed(true);
              setPic(URL.createObjectURL(avatar));
          }else{
              console.log('Image upload failed',data);
              setIsUploading(false);
          }
      } catch(err){
          console.log('Error uploading image:', err);
          setIsUploading(false);
      }
  }
  
// const handleClick = async(doctor_id) => {

//     setIsPending(true);
//     try {
//         const response = await fetch(url, {
//             method: 'PATCH',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//             Status:'Offline'
//             })
//         })  
//         const data = await response.json();
//         if(response.ok){
//             setIsPending(false)
//             localStorage.removeItem('patient');
//             history('/');
//         } else {
//             setIsPending(false)
//         }
//     } catch(err) {
//         console.log(err);
//     } 
// }

  return ( 
    <div className="wrapper ProfPageWrap">
      <div className="profileWrap">
        {avatar && !isClosed && (
          <div className='av__upload'>
            <div className="sideNav">
            <div className="closeIcon"><GrClose onClick={handleExit} className='closeIcon__icon ' /></div>
                <div className="sideNavProf">
                  <img src={URL.createObjectURL(avatar)} alt="Selected" />
                  {!isUploading && <button onClick={handleUpload} >Update</button>}
                  {isUploading && <button>Updating Display pic...</button>}
                </div>
            </div>
          </div>
        )}
        <div className="profilePic">
          <img className="PiC" src={pic === null ? avatar1 : pic } alt='Profile picture' />
          <div className="ndPic">
            <input
              onChange={handleFileChange}  
              type="file" 
              accept="image/png,/image/jpeg,/image/jpg" 
              id="upload" 
            />
            <label htmlFor="upload">{ <TbCameraPlus className="cam" />}</label> 
          </div>
        </div>
        <div className="profileHead">
          <h2>Profile</h2>
        </div>
        <div className="profDetails">
          <p><span id="light">Profile Name: </span> {`${patient.firstname} ${patient.lastname}`}</p>
          <p><span id="light">ID:</span> {patient.id}</p>
          <p><span id="light">Email:</span> {patient.email} </p>
          <p><span id="light">Gender:</span> {patient.gender} </p>
          <p><span id="light">Date of Birth:</span> {patient.dob} </p>
          <p><span id="light">NHIS:</span> {!patient.nhis ? 'null' : patient.nhis} </p>
          {/* {!isPending && <button onClick={() =>handleClick(patient._id)} > <img src={logoutbtn} alt="" />Logout</button>}
          {isPending && <button disabled>Logging Out...</button>} */}
        </div>
      </div>
    </div> 
  );
}
 
export default ProfilePage;