<script>
	import { LayerCake, Svg } from 'layercake';
	import Line from './_components/Line.svelte';
	import Area from './_components/Area.svelte';
	import AxisX from './_components/AxisX.svelte';
	import AxisY from './_components/AxisY.svelte';
	import points from './_data/points.csv';
	import tippy from 'svelte-tippy';
  import 'tippy.js/animations/perspective-subtle.css';
	import 'tippy.js/dist/tippy.css'; // optional

	const xKey = 'myX';
	const yKey = 'myY';

	points.forEach(row => {
		row[yKey] = +row[yKey];
	});

</script>

<style lang="postcss">
	.chart-container {
		width: 50%;
		height: 50vh;
		margin: auto;
		margin-top: 100px 
	}
  :global(.tippy-box[data-theme='test']) {
    @apply inline-block py-1 px-2.5 text-sm font-medium rounded-lg shadow-sm;
    @apply text-white bg-gray-900;
  }
</style>
<div> 
	<div class="bg-zinc-900 px-6 py-24 sm:py-32 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-4xl font-bold tracking-tight text-neutral-50 sm:text-6xl">Swarm Dashboard</h2>
			<p class="mt-6 text-lg leading-8 text-neutral-50">An overview of network storage and redistributions stats.</p>
		</div>
	</div>

	<div class="mx-32 mt-16">
		<h3 class="text-lg font-semibold leading-6 text-gray-900">24 hours</h3>
		<dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
			<div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
				<dt class="truncate text-sm font-medium text-gray-500">BZZ Price</dt>
				<dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">$0.28</dd>
			</div>
			<div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
				<div>
					<dt class="inline-block truncate text-sm font-medium text-gray-500">
						Redundancy
					</dt>
					<img 
					
					class="inline-block ml-1 absolute w-3" 
					alt="" 
					src="info.png" 
					use:tippy={{
						content: 'Redundancy is a value which reflects how many copies of a chunk are stored on Swarm',
						arrow: true,
						placement: 'top',
						theme: 'test',
						animation: 'perspective-subtle'
					}}
					/>
					
				</div>
				
				<dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">58.16%</dd>
			</div>
			<div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
				<dt class="truncate text-sm font-medium text-gray-500">Avg. Return Rate</dt>
				<dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">10.57% APY</dd>
			</div>
		</dl>
	</div>
	
	
	<div class="chart-container">
		<LayerCake
			padding={{ right: 10, bottom: 20, left: 25, top: 20 }}
			x={xKey}
			y={yKey}
			yDomain={[0, null]}
			data={points}
			debug={true}
		>
			<Svg>
				<AxisX/>
				<AxisY/>
				<Line/>
				<Area/>
			</Svg>
		</LayerCake>
	</div>
	
</div>
