import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Tabs from './Tabs';
import Menu from './Menu';
import Login from './pages/Login';
import Register from './pages/Register';
import urls from './urls';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {
	return (
		<IonApp>
			<IonReactRouter>
				<Menu />
				<IonSplitPane contentId="main">
					<IonRouterOutlet id="main">
						<Route path={urls.LOGIN} component={Login} exact={true} />
						<Route path={urls.SIGNUP} component={Register} exact={true} />
						<Route
							exact
							path="/"
							render={() => <Redirect to={urls.APP_HOME} />}
						/>
					</IonRouterOutlet>

					<Route path="/app" component={Tabs} />
				</IonSplitPane>
			</IonReactRouter>
		</IonApp>
	);
};

export default App;
