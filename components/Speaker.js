import React, { Component, PropTypes } from 'react';

import Display from './parts/Display';
import JoinSpeaker from './parts/JoinSpeaker';
import Attendance from './parts/Attendance';

class Speaker extends Component {
	render() {
		return (
			<Display if={this.props.status === 'connected'}>
				<Display if={this.props.member.name &&
					this.props.member.type === 'speaker'}>
					<p>Questions</p>
					<Attendance audience={this.props.audience} />
				</Display>

				<Display if={!this.props.member.name}>
					<h2>Start the presentation</h2>
					<JoinSpeaker emit={this.props.emit} />
				</Display>
			</Display>
			);
	}
};

Speaker.propTypes = {
	status: PropTypes.string,
	emit: PropTypes.func,
	member: PropTypes.object,
};

export default Speaker;