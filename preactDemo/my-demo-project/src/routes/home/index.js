import style from './style';

const Home = ({ initialData }) =>
	initialData && (
		<div class={style.home}>
			<h1>Welcome To NC News</h1>
			<p>This is the Home page.</p>
			{Object.keys(initialData.routes).map((key) => (
				<div>
					<p>{key}</p>
					<p>{initialData.routes[key].description}</p>
					<p>{JSON.stringify(initialData.routes[key]).exampleResponse}</p>
					{/* feels very nested */}
					{/* {console.log(data.routes[key].exampleResponse)} */}
					{/* {data.routes[key].exampleResponse && <p>{JSON.stringify(data.routes[key].exampleResponse.topic)}</p>} */}
					}
				</div>
			))}
		</div>
	);

export default Home;
