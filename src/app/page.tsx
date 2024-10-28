import { Suspense } from 'react';

import GenericLoading from './GenericLoading';
import OnlineStatus from './OnlineStatus';
import Pronouns from './Pronouns';

export default function Home() {
	return (
		<>
			<p>
				Hi, I'm <strong>Mallory</strong>{' '}
				<Suspense fallback={<GenericLoading />}>
					{/* @ts-ignore */}
					<Pronouns />
				</Suspense>
			</p>
			<p>
				I make computers do stuff sometimes
				<br />
				I'm a big fan of Minecraft, the indie web, and the Nintendo Wii
			</p>
			<p>
				This site is due to be replaced soon, but you can still look around!
			</p>
			<p>
				You can find me at{' '}
				<a href="https://github.com/wiidotmom" target="_blank">
					wiidotmom
				</a>{' '}
				on GitHub,{' '}
				<a href="https://bsky.app/profile/wii.mom" target="_blank">
					@wii.mom
				</a>{' '}
				on Bluesky, @igalaxy on Discord, and{' '}
				<a href="https://farlands.cafe/@igalaxy" target="_blank" rel="me">
					@igalaxy@farlands.cafe
				</a>{' '}
				on the fediverse.
			</p>
			<OnlineStatus />
		</>
	);
}
