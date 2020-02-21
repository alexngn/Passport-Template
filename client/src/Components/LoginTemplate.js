import React from "react";

const LoginTemplate = (props) => {
	return (
		<div className='container-fluid p-0 m-0 '>
			<div className='row h-100 p-0 m-0'>
				{props.photo()}
				<div className='col pt-5 mt-5'>
					<div className='form pl-5 mw-75 pr-5'>
						<p className='display-3'>Passport Template</p>
						<div className='w-100 mt-4'>
							{props.form()}
							{props.socialMedia ? props.socialMedia() : null}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginTemplate;