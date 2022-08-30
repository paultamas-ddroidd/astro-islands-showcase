import { FC, SyntheticEvent, ComponentPropsWithoutRef, useState } from 'react';

import './Counter.scss';

export type CounterProps = ComponentPropsWithoutRef<any> & {
	counter: number;
}

const Counter:FC<CounterProps> = ({ counter = 0 }:CounterProps):JSX.Element => {
	const [count, setCount] = useState<number>(counter);
	return (
		<div className="counter">
			<p>Dynamic Counter (Astro Island = JSX): {count}</p>
			<button onClick={(e: SyntheticEvent) => {setCount(count + 1)}}>+ 1</button>
		</div>
	);
}

export default Counter;