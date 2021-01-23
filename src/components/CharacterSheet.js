import React from 'react';
//import Button from './Button'; // Import a component from another file
import { Button } from 'react-bootstrap'
import $ from 'jquery';
import HealthBarRow from 'components/HealthBarRow.js';
import StatRow from 'components/StatRow.js';
import canvas from "images/canvas.jpg";


class CharacterSheet extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            select: '',
            input: '',
            inputField: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.getStatIfInJson = this.getStatIfInJson.bind(this);
    }

    // componentDidMount() {
    //   //this.setState({currPower: '---'});
    // }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    getStatIfInJson() {
        const fieldName = this.state.inputField;
        const stats = this.props.characterJson.stats;

        return stats[fieldName];
    }

    render() {
        return (
            // <div className='col-6 m-2 p-2'> style={{background: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj48ZGVmcz48cGF0dGVybiBpZD0icGF0dGVybiIgd2lkdGg9Ijg2LjYiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgNjkuMjgyMDMyMzAyNzU1MSw4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDApICI+PHJlY3QgaWQ9InBhdHRlcm4tYmFja2dyb3VuZCIgd2lkdGg9IjQwMCUiIGhlaWdodD0iNDAwJSIgZmlsbD0icmdiYSg3NCwgODUsIDEwNCwxKSI+PC9yZWN0PiA8cGF0aCBmaWxsPSJyZ2JhKDE2MCwgMTc0LCAxOTIsMSkiIGQ9Ik04Ni42IDcwIEw2OS4yOCA4MCBMNTEuOTYgNzAgTDUxLjk2IDUwIEw2OS4yOCA0MCBMODYuNiA1MCBMODYuNiA3MCA4NS43MyA1MC41IEw2OS4yOCA0MSBMNTIuODMgNTAuNSBMNTIuODMgNjkuNSBMNjkuMjggNzkgTDg1LjczIDY5LjUgTDg1LjczIDUwLjUgeiIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciI+PC9wYXRoPjxwYXRoIGZpbGw9InJnYmEoMTYwLCAxNzQsIDE5MiwxKSIgZD0iTTUxLjk2IDkwIEwzNC42NCAxMDAgTDE3LjMyIDkwIEwxNy4zMiA3MCBMMzQuNjQgNjAgTDUxLjk2IDcwIEw1MS45NiA5MCA1MS4wOSA3MC41IEwzNC42NCA2MSBMMTguMTkgNzAuNSBMMTguMTkgODkuNSBMMzQuNjQgOTkgTDUxLjA5IDg5LjUgTDUxLjA5IDcwLjUgeiIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciI+PC9wYXRoPjxwYXRoIGZpbGw9InJnYmEoMTYwLCAxNzQsIDE5MiwxKSIgZD0iTTE3LjMyIDcwIEwwIDgwIEwtMTcuMzIgNzAgTC0xNy4zMiA1MCBMMCA0MCBMMTcuMzIgNTAgTDE3LjMyIDcwIDE2LjQ1IDUwLjUgTDAgNDEgTC0xNi40NSA1MC41IEwtMTYuNDUgNjkuNSBMMCA3OSBMMTYuNDUgNjkuNSBMMTYuNDUgNTAuNSB6IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIj48L3BhdGg+PHBhdGggZmlsbD0icmdiYSgxNjAsIDE3NCwgMTkyLDEpIiBkPSJNMTcuMzIgMzAgTDAgNDAgTC0xNy4zMiAzMCBMLTE3LjMyIDEwIEwwIDAgTDE3LjMyIDEwIEwxNy4zMiAzMCAxNi40NSAxMC41IEwwIDEgTC0xNi40NSAxMC41IEwtMTYuNDUgMjkuNSBMMCAzOSBMMTYuNDUgMjkuNSBMMTYuNDUgMTAuNSB6IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIj48L3BhdGg+PHBhdGggZmlsbD0icmdiYSgxNjAsIDE3NCwgMTkyLDEpIiBkPSJNNTEuOTYgMTAgTDM0LjY0IDIwIEwxNy4zMiAxMCBMMTcuMzIgLTEwIEwzNC42NCAtMjAgTDUxLjk2IC0xMCBMNTEuOTYgMTAgNTEuMDkgLTkuNSBMMzQuNjQgLTE5IEwxOC4xOSAtOS41IEwxOC4xOSA5LjUgTDM0LjY0IDE5IEw1MS4wOSA5LjUgTDUxLjA5IC05LjUgeiIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciI+PC9wYXRoPjxwYXRoIGZpbGw9InJnYmEoMTYwLCAxNzQsIDE5MiwxKSIgZD0iTTg2LjYgMzAgTDY5LjI4IDQwIEw1MS45NiAzMCBMNTEuOTYgMTAgTDY5LjI4IDAgTDg2LjYgMTAgTDg2LjYgMzAgODUuNzMgMTAuNSBMNjkuMjggMSBMNTIuODMgMTAuNSBMNTIuODMgMjkuNSBMNjkuMjggMzkgTDg1LjczIDI5LjUgTDg1LjczIDEwLjUgeiIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciI+PC9wYXRoPjxwYXRoIGZpbGw9InJnYmEoMjAzLCAyMTMsIDIyNCwxKSIgZD0iTTM1LjUxIDQwLjUgTDM1LjUxIDQxLjUgTDM0LjY0IDQxIEwzMy43NyA0MS41IEwzMy43NyA0MC41IEwzMi45MSA0MCBMMzMuNzcgMzkuNSBMMzMuNzcgMzguNSBMMzQuNjQgMzkgTDM1LjUxIDM4LjUgTDM1LjUxIDM5LjUgTDM2LjM3IDQwIEwzNS41MSA0MC41IDM1LjE0IDM5LjEzIEwzNC42NCA3OC4yNyBMMzQuMTQgMzkuMTMgTDY3Ljc4IDU5LjEzIEwzMy42NCA0MCBMNjcuNzggMjAuODcgTDM0LjE0IDQwLjg3IEwzNC42NCAxLjczIEwzNS4xNCA0MC44NyBMMS41IDIwLjg3IEwzNS42NCA0MCBMMS41IDU5LjEzIEwzNS4xNCAzOS4xMyB6IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIj48L3BhdGg+PC9wYXR0ZXJuPiAgPC9kZWZzPiA8cmVjdCBmaWxsPSJ1cmwoI3BhdHRlcm4pIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIj48L3JlY3Q+PC9zdmc+")'}}>
            <div className='col-6 m-2 p-2 border border-dark' style={{ backgroundImage: `url(${canvas}` }}>
                <h1 className='text-center'>{this.props.characterJson.name}</h1>
                <HealthBarRow maxHp={this.props.characterJson.stats.maxHp} />

                <div className='d-flex flex-column my-4'>
                    <StatRow name='Nimble' statValue={this.props.characterJson.stats.nimble} />
                    <StatRow name='Mind' statValue={this.props.characterJson.stats.mind} />
                    <StatRow name='Brawn' statValue={this.props.characterJson.stats.brawn} />
                </div>

                <div className='d-flex flex-row'>
                    <div className='text-right'>{'actions: '}</div>
                </div>

                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary" role="progressbar" style={{ width: '33%' }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <input name='inputField' type="text" value={this.state.inputField} onChange={this.handleInputChange} />
                <div>{this.getStatIfInJson()}</div>

                <select name='select' type='text' value={this.state.select} onChange={this.handleInputChange}>
                    <option value=''></option>
                    <option value='strike'>strike</option>
                    <option value='projectile'>projectile</option>
                    <option value='hinder'>hinder</option>
                    <option value='help'>help</option>
                    <option value='study'>study</option>
                </select>
                <div>{this.state.select}</div>
            </div>
        );
    }
}

export default CharacterSheet;