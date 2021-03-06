import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css"

class Nav extends Component {
    constructor() {
        super();

        this.state = {
            showNav: false,
            showLeftNav: false
        }
    }


    showNavFn = () => {
        this.setState({
             showLeftNav: false, 
             showNav: !this.state.showNav
                     })
    }

    showLeftNavFn = () => {
        this.setState({ 
            showNav: false, 
            showLeftNav: !this.state.showLeftNav 
                     })
    }




    render() {
        return (
            // <div className="Navleft">

            <div className="PhoneNav">
                <img className="EpicGames" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAB0CAMAAABE6mf9AAAB7FBMVEVMaXH////////n5+dwcHD///////////97e3v////////////////8/Pz+/v7///////+xsbH////////+/v7+/v7+/v729vbS0tLOzs7e3t6wsLD///8YGBjPz8/9/f3////7+/v////////8/Pzf39/4+Phubm7+/v7///85OTmSkpLLy8v////+/v7////Z2dn////6+vr39/fU1NT+/v6enp6lpaX9/f3////+/v719fX39/f8/Pz////////AwMD9/f3////9/f38/Pzb29v4+Pj39/f///////+3t7f8/Pze3t77+/uTk5P8/Pz4+Pjx8fH+/v7c3Nz5+fni4uL6+vr////5+fn///+qqqr09PT9/f3+/v7e3t7////8/Pz6+vr9/f3////7+/vn5+f6+vr+/v65ubn29vbMzMyhoaHb29vr6+vExMS2trb8/Pz7+/v7+/u2tra7u7vm5ub+/v6enp77+/v////////5+fn7+/v5+fmpqana2trZ2dnOzs76+vrLy8vl5eXW1tbJycnS0tL5+fn7+/vn5+f19fW9vb3Hx8f5+fn4+PjNzc3+/v7AwMDZ2dm1tbX5+fm2trb29vbe3t7p6em9vb3y8vLKysrT09Pc3Nz09PTh4eHIyMjm5ub///+stlOlAAAAo3RSTlMA9vsEAf3l/gL5UvDtEgnz7wP0wqWEijAcGiUJgAQUJNzOq+jrKOQIG64JUlTsmuKN3+AZDdkGFpbV4ToQIVC7Cg3SY3AgHgfEsh4VZcgOlAondSO7LCqo17YwNY6gj2hLRX/N0i/mWpnvElQ6Qj4+VnzpaBJP5UTCgcqqvIs6Fh5krSyESEZZ3dp3tzR68qOAh1CHS4VBS0pacG8hhHZdoqdl1QdEjAAACP1JREFUeF7tmvtf08gaxpNJ0iEkJb0BKEhDs0B7zmlrLRQoLZS0tmAFaFlABeQu53CABQQFkEXA+3W97eqq657tP3pmUjSUSitCPZ+zy/NTMszkyzvvO88kAwRBRUfqZTKRG5Gyo8lNEZT/lawjYY4gkNQ1FJoJd6ETJHIp4HQQIzJI5FYMRzh0iZyLaGC/AYSF3wCSSPyJIMeQYwjg+N0SALY49Z4jmR3jY5WOH50VsrxmRzwJs0CA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"
                    alt="EpicGamesLogo" onClick={this.showLeftNavFn}/>
                <img className="UnrealLogo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfMAAAB4CAMAAADR0evWAAAAkFBMVEVMaXH///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+X6JXfAAAAL3RSTlMAAaII9Bj76xB05cUg/iTbBFIOG/jhFPFprgs7lou3Wyx/1DVC3iJjqb7MS51vORSQyKoAAApYSURBVHhe7MAxAQAAAMIg+6e2xS5YBAAAAAAAAAAAAAAAAAAAAAAAAACA83KmjWrqQBgm7CJLZFUEBQXF7fT//7t7UcJIAqaxLe+n1hyYZJ7J4iQRpf5LKUZsoeJ3Up6F2Dff5OORl5Ei9HrcHFVrbmgPwasn1FYBBA9NF4N9PyWFHP1OLaCd46ahnClCSmrGsaYFnTRNi2PTVzCaqLS4Lb4jJcnfr1/au1iilVbnV+G5Stv3BefFm9YF/YS/J0XPlynH9WJc/5tbVYWt9Sywu1581vpHYQgV8NBjSxUP7O99iS9o4LQeVdq3E0yntN9uj67SRwVYxkFxOy/K7C5vXmpk+Z7l5WN1tOMeu1J1zz5uqSRui+9ISbKXxkuHVSrR0rL6VVjncfu+49V4U3Q/UUEX7KzuZbfWvr/2jAlZlhV5y2x/6uJWuR2Mz/IWJkMoi6Aysk33ALBv7QI+cGjgqMAR0E7y9iOm/EYq5q19MiQFt3J3iCzDSNR3JYlhWN4lr7TuHWbpkRZpkrgtviMlyfV+vWTtR5jL6qswyVr7eBv9epNjLeKhn+2l3r1s1TI3F8avD3L0JNrcXl1dWVm/PssoaebKzXPgZRFTf7CvL20+cGjghMARbTtBjpHZaNxvRheoKP3JPCN0pjwRJoe8GzXjPHl9qG4CSdwW35HfMAfpMDYIMQc56qVSvmSOgrv6Vh7uXDQzc4g3CP5x5kq1S8aBA8z7CXGYg63ZmYPCyxFzmPOUyDb6jnm6qp3BqLP252cOwf+JOS426hRygLn2GeZcW/Mzd5K7i/+MueNV+Cvm6NSoVAAWeH7mEPwfmJsLaxo5DFQ24jEHW/Mzh85Vaug3mOvqQKH+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"
                    alt="UnrealEngineLogo.png" />
                <img className="hamburger" src="" alt="hamburger.png"
                    onClick={this.showNavFn} />

                    <div className={"leftLinks " + (this.state.showLeftNav ? "leftDropDown" : "leftHidden")}>
                        <ul>
                            <li><p>EPIC GAMES</p></li>
                            <li><p>UNREAL ENGINE</p></li>
                            <li><p>ROBO RECALL</p></li>
                            <li><p>UNREAL TOURNAMENT</p></li>
                            <li><p>FORTNITE</p></li>
                            <li><p>SPYJINX</p></li>
                            <li><p>SHADOW COMPLEX</p></li>
                            <li><p>BATTLE BREAKERS</p></li>
                            <li><p>INFINITY BLADE</p></li>
                        </ul>
                    </div>

                <div className={"links " + (this.state.showNav ? "dropDown" : "hidden")}>

                    <ul onClick={this.showNavFn}>
                        <li><Link to='/'><p className="Overview">ABOUT</p></Link></li>
                        <li><p className="Resources">RESOURCES</p></li>
                        <li><Link to='/forum'><p className="Forum">COMMUNITY</p></Link></li>
                        <li><Link to='/account'><p className="Account">ACCOUNT</p></Link></li>
                    </ul>

                </div>

            </div>

        )
    }
}
export default Nav;