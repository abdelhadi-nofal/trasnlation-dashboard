import React ,{Component} from "react";
import Select from "react-select";
import makeAnimated from 'react-select/animated';


const languages_options = [
    { value: 'Arabic', label: 'Ara' },
    { value: 'French', label: 'Fra' },
    { value: 'English', label: 'Eng' }
  ]

const translation_domain= [
    { value: 'Default', label: 'Default' },
    { value: 'Qatar', label: 'Qatar' },
    { value: 'University', label: 'University' },
    { value: 'Training', label: 'Training' },
    { value: 'Lebanon', label: 'Lebanon' }
  ]

const schools= [
    { value: '1', label: 'مدارس 1' },
    { value: '2', label: 'مدارس 2' },
    { value: '3', label: 'مدارس 3' },
    { value: '4', label: 'مدارس 4' },
    { value: '5', label: 'مدارس 5' }
  ]

function TranslationsOptions(props,isMulti) {
    
        return(
            <div className="options-line">
                <div className="options">
                    <div className="options-title">
                        <p>Languages <span>*</span></p>
                        <Select options={languages_options}/> 
                    </div>
   
                </div>
                
                <div className="options">
                    <p>Translation Domain <span>*</span></p>
                    <Select placeholder={<div>Select Some Options</div>} isMulti={isMulti} options={translation_domain}/>    
                </div>
                <div className="options">
                    <p>School Group</p>
                    <Select placeholder={<div>Choose School...</div>} options={schools}/>    
                </div>
                <div className="options">
                    <p>School</p>
                    <Select placeholder={<div>Choose School...</div>} options={schools}/>    
                </div>
                <button className="apply-btn">✓   Apply</button>
                
            </div>

            

        )
}



export default TranslationsOptions;