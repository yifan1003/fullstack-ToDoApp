import React, {Component} from 'react';
// Class Component
export default class FirsComponent extends Component {
    render() {
        return (
            <div className="firstcomponent">
                ~FirstComponent~
            </div>
        )
    }
}

export class SecondComponent extends Component {
    render() {
        return (
            <div className="secondcomponent">
                --secondComponent--
            </div>
        )
    }
}
