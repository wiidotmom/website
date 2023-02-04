import {
	getLastFmTopAlbums,
	getLastFmTopArtists,
	getLastFmTopTracks,
	getLastFmTrackInfo,
	lastFmTopTracks,
} from '@/lib/data/music';
import { formatSeconds } from '@/lib/utils';
import TopAlbums from './TopAlbums';
import TopArtists from './TopArtists';
import TopTracks from './TopTracks';

export default async function MusicDetailed() {
	if (lastFmTopTracks.length == 0) await getLastFmTopTracks();
	const topAlbums = await getLastFmTopAlbums();
	const topArtists = await getLastFmTopArtists();
	let topTrackInfo = [];
	for (let i = 0; i < 5; i++) {
		topTrackInfo[i] = (
			await getLastFmTrackInfo(
				lastFmTopTracks.slice(0, 5)[i].name,
				lastFmTopTracks.slice(0, 5)[i].artist.name
			)
		).track;
	}

	let total = 0;
	lastFmTopTracks.forEach(track => {
		total += +track.duration * +track.playcount;
	});

	return (
		<div>
			<p>
				<span style={{ color: '#ab48ab' }}>
					{formatSeconds(total, { compact: true })}
				</span>{' '}
				listening to music (<span style={{ color: '#ab48ab' }}>---</span> daily
				average) <br />
				Most active day was <strong>---</strong> (
				<span style={{ color: '#ab48ab' }}>---</span>)
			</p>
			<TopAlbums albums={topAlbums.topalbums.album} />
			<TopTracks tracks={lastFmTopTracks.slice(0, 5)} info={topTrackInfo} />
			<TopArtists artists={topArtists.topartists.artist} />
		</div>
	);
}

export function MusicDetailedLoading() {
	return <span style={{ color: '#ab48ab' }}>(loading LastFM data)</span>;
}
