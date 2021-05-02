import React, { Fragment } from 'react';

import Main from './pages/Main';
import CovidState from './context/CovidState';
const App = () => {
	return (
		<Fragment>
			<CovidState>
				<Main />
			</CovidState>
		</Fragment>
	);
};

export default App;
