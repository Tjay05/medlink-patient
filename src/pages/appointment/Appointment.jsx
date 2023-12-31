import generalDoc from '../../assets/icons/genDoc.svg';
import pediatric from '../../assets/icons/pediatrics.svg';
import gynaecologist from '../../assets/icons/gynecology.svg';
import orthopaedics from '../../assets/icons/orthopaedics.svg';
import gastro from '../../assets/icons/gastro.svg';
import urologist from '../../assets/icons/urology.svg';
import physical_therapy from '../../assets/icons/physical_therapy.svg';
import endocrinologist from '../../assets/icons/endocrinology.svg';
import oncology from '../../assets/icons/oncology.svg';
import pulmonologist from '../../assets/icons/pulmonary.svg';
import dentist from '../../assets/icons/dentist.svg';
import opthalmology from '../../assets/icons/opthalmology.svg';
import cardiolody from '../../assets/icons/heartDoc.svg';
import nephrology from '../../assets/icons/nephrology.svg';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../layout/AppWrap';

const Appointment = () => {
  const { setSpecialistType } = useContext(AppContext);

  const history = useNavigate();
  const handleClick = (type) => {
    setSpecialistType(type)
    history('PickDate');
  }

  return ( 
    <div className="appBodyWrapper">
      <div
       onClick={() => handleClick('General-Practitioner')} 
       className='specialist'
      >
        <img src={generalDoc} alt="General Doctor" />
        <p>General Practitioner</p>
      </div>
      <div 
        onClick={() => handleClick('Pediatrician')} 
        className='specialist'
      >
        <img src={pediatric} alt="Pediatrician" />
        <p>Pediatrics</p>
      </div>
      <div 
        onClick={() => handleClick('Gynaecologist')} 
        className='specialist'
      >
        <img src={gynaecologist} alt="Gynaecologist" />
        <p>Gynaecologist</p>
      </div>
      <div 
        onClick={() => handleClick('Orthopaedist')} 
        className='specialist'
      >
        <img src={orthopaedics} alt="Orthopaedician" />
        <p>Orthopaedics</p>
      </div>
      <div 
        onClick={() => handleClick('Gastroenterologist')} 
        className='specialist'
      >
        <img src={gastro} alt="Gastroentologist" />
        <p>Gastroentologist</p>
      </div>
      <div 
        onClick={() => handleClick('Urologist')} 
        className='specialist'
      >
        <img src={urologist} alt="Urologist" />
        <p>Urologist</p>
      </div>
      <div 
        onClick={() => handleClick('Oncologist')} 
        className='specialist'
      >
        <img src={oncology} alt="Oncologist" />
        <p>Oncologist</p>
      </div>
      <div 
        onClick={() => handleClick('Pulmonologist')} 
        className='specialist'
      >
        <img src={pulmonologist} alt="Pulmonologist" />
        <p>Pulmonologist</p>
      </div>
      <div 
        onClick={() => handleClick('Physical Therapist')} 
        className='specialist'
      >
        <img src={physical_therapy} alt="Physical Therapist" />
        <p>Psychiatrist</p>
      </div>
      <div 
        onClick={() => handleClick('Endocrinologist')} 
        className='specialist'
      >
        <img src={endocrinologist} alt="Endocrinologist" />
        <p>Endocrinologist</p>
      </div>
      <div 
        onClick={() => handleClick('Dentist')} 
        className='specialist'
      >
        <img src={dentist} alt="Dentist" />
        <p>Dentist</p>
      </div>
      <div 
        onClick={() => handleClick('Ophthalmologist')} 
        className='specialist'
      >
        <img src={opthalmology} alt="Opthalmologist" />
        <p>Opthalmologist</p>
      </div>
      <div 
        onClick={() => handleClick('Cardiologist')} 
        className='specialist'
      >
        <img src={cardiolody} alt="Cardiologist" />
        <p>Cardiologist</p>
      </div>
      <div 
        onClick={() => handleClick('Nephrologist')} 
        className='specialist'
      >
        <img src={nephrology} alt="Nephrologist" />
        <p>Nephrologist</p>
      </div>
    </div>
   );
}
 
export default Appointment;