<script>
    // Code come from https://layercake.graphics/example/Line
    import { LayerCake, Svg } from "layercake";
    import { timeParse, timeFormat } from "d3-time-format";

    import Column from "./_components/Column.svelte";
    import AxisX from "./_components/AxisX.svelte";
    import AxisY from "./_components/AxisY.svelte";
    import { scaleBand } from "d3";

    import data from "./_data/points.csv";
    console.log(data);

    const xKey = "day";
    const yKey = "duration";

    data.forEach((d) => {
        d["day"] =
            timeFormat("%a")(timeParse("%Y-%m-%d")(d["date"])) +
            "\n" +
            timeFormat("%e")(timeParse("%Y-%m-%d")(d["date"]));
    });
</script>

<div class="chart-container">
    <LayerCake
        padding={{ top: 8, right: 10, bottom: 20, left: 25 }}
        x={xKey}
        y={yKey}
        yDomain={[0, 10]}
        xScale={scaleBand().paddingInner(0.1).round(true)}
        data={data}
        debug={true}
    >
        <Svg>
            <Column showLabels={true} />
            <AxisX baseline={true} gridlines={false} tickMarks={false} />
            <AxisY />
        </Svg>
    </LayerCake>
</div>

<style>
    .chart-container {
        margin: 4rem;
        width: 300px;
        height: 250px;
    }
</style>
