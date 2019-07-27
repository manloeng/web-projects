import { h } from 'preact';
import style from './style';

const Home = ({ data }) => (
	<div class={style.home}>
		<h1>Welcome To NC News</h1>
		<p>This is the Home page.</p>
		{data &&
			Object.keys(data.routes).map((key) => (
				<div>
					<p>{key}</p>
					<p>{data.routes[key].description}</p>
					<p>{JSON.stringify(data.routes[key]).exampleResponse}</p>
					{/* feels very nested */}
					{/* {console.log(data.routes[key].exampleResponse)} */}
					{/* {data.routes[key].exampleResponse && <p>{JSON.stringify(data.routes[key].exampleResponse.topic)}</p>} */}
					}
				</div>
			))}
	</div>
);

export default Home;
