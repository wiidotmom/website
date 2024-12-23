// @ts-nocheck

import { Suspense } from 'react';

import Age from './(age)/Age';
import CodeDetailed, { CodeDetailedLoading } from './(code)/CodeDetailed';
import GamesDetailed, { GamesDetailedLoading } from './(games)/GamesDetailed';
import MusicDetailed, { MusicDetailedLoading } from './(music)/MusicDetailed';

export const revalidate = 21600;

export default function Data() {
	return (
		<>
			<p>
				This page is a summary of the data I've collected about my life since
				2020.
			</p>
			{/* <Age /> */}
			{/* <p>
				During that time,{' '}
				<Suspense fallback={<CodeSummaryLoading />}>
					<CodeSummary />
				</Suspense>
				,{' '}
				<Suspense fallback={<MusicSummaryLoading />}>
					<MusicSummary />
				</Suspense>
				,{' '}
				<Suspense fallback={<GamesSummaryLoading />}>
					<GamesSummary />
				</Suspense>
			</p> */}
			<p>
				<Suspense fallback={<CodeDetailedLoading />}>
					<CodeDetailed />
				</Suspense>
			</p>
			<p>
				<Suspense fallback={<MusicDetailedLoading />}>
					<MusicDetailed />
				</Suspense>
			</p>
			<p>
				<GamesDetailedLoading />
				{/* <Suspense fallback={<GamesDetailedLoading />}>
					<GamesDetailed />
				</Suspense> */}
			</p>
		</>
	);
}
