<script>
    // Code come from https://layercake.graphics/example/Line
    import { LayerCake, Svg } from "layercake";

    import Line from "./_components/Line.svelte";
    import Area from "./_components/Area.svelte";
    import AxisX from "./_components/AxisX.svelte";
    import AxisY from "./_components/AxisY.svelte";

    import data from "./_data/points.csv";

    const xKey = "myX";
    const yKey = "myY";

    data.forEach((d) => {
        d[yKey] = +d[yKey];
    });
    console.log(data);
</script>

<div class="chart-container">
    <LayerCake
        padding={{ top: 8, right: 10, bottom: 20, left: 25 }}
        x={xKey}
        y={yKey}
        yNice={4}
        yDomain={[0, null]}
        data={data}
        debug={true}
    >
        <Svg>
            <AxisX />
            <AxisY ticks={4} />
            <Line />
            <Area />
        </Svg>
    </LayerCake>
</div>

<style>
    .chart-container {
        width: 100%;
        height: 500px;
    }
</style>
