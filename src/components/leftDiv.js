/* eslint-disable react/prop-types */
import React,{Component} from 'react';
class SideDiv extends Component {
    render(){

    return (
        <div>
            <div className="p_opacity">
                <div className="opacity">
                    <div>
                        <img alt="image is down" className="bar_image" src="https://miro.medium.com/max/3840/1*DzO3TZuiRe2Xp2AA7qVTKg.jpeg" width="35" height="36"/>
                    </div>
                    <div className="opacity_text">
                        <p>sinha.prashant134</p>
                        <button className="opacity_button">Follow</button>
                    </div>
                </div>
            </div>
            <div id="side_panel">
                <div id="image_and_name_div">
                    <div id="image_div">
                        <img id="image" alt="image is down" src="https://avatars3.githubusercontent.com/u/7427552?s=460&v=4" width="260" height="260"/>
                    </div>
                </div>
                <div id="bio_data_div">
                    <div id="name">prashant_sinha</div>
                    <div id="user_name">sinha.prashant134</div>
                </div>
                <div id="btn_div">
                    <button id="follow_btn">Follow</button>
                </div>
                <span id="bio">
                    {
                    this.props.info.bio
                }</span>
                <span id="company">
                    <i className="fas fa-users"></i>&#128101; {
                    this.props.info.company
                } </span>
                <span id="location">
                    &nbsp;&#9830;&nbsp;&nbsp;&nbsp;{
                    this.props.info.location
                } </span>
                <span id="email">
                &#x2709;&nbsp;&nbsp;&nbsp;{this.props.info.login}@gmail.com
                </span>
            </div>
        </div>
    );
}
}
export default SideDiv;
