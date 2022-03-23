import React,{Component} from "react";

class Main extends Component{
    save_data() {
        
        console.log('Click happened');
      }

    render(){
        return(
            <div className="trans-box">
                <div className="trans-box-text">
                    <p>English (Default)</p>
                    <p>Translate To →</p>
                    <p>Arabic (Choosen Language)</p>
                </div>
                <form className="eng-ara">
                    <textarea placeholder="Enter Text Here..." className="lang" id="w3review" name="w3review" rows="4" cols="50">
                    </textarea>
                    <div className="vertical-row"></div>
                    <textarea placeholder="Enter Text Here..." className="lang" id="w3review" name="w3review" rows="4" cols="50">
                    </textarea>
                    <button onClick={this.save_data} className="apply-btn1">Update</button>

                    
                </form>
                
            </div>
        )
    }
}

export default Main;