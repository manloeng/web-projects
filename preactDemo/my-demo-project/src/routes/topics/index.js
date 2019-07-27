import { h } from 'preact';

const Topics = ({ data }) => (
	<div>
		<h1>Topics Page</h1>;
		{data.topics.map((topic) => (
			<div>
				<h1>{topic.slug}</h1>
				<p>{topic.description}</p>
			</div>
		))}
	</div>
);

export default Topics;
