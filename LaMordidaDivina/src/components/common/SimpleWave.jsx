export default function SimpleWave({
    fillClassName = "fill-cream",
    height = 80,
    position = "bottom",
    flip = false,
}) {
    const path = `M0,${height * 0.5} C300,${height * 1.4} 900,${-height * 0.4} 1200,${height * 0.5} L1200,${height} L0,${height} Z`;
    const posClasses =
        position === "top"
            ? "absolute top-0 left-0 w-full z-30"
            : "absolute bottom-0 left-0 w-full z-30";

    return (
        <div
            className={`${posClasses} ${flip ? "rotate-180" : ""} leading-none pointer-events-none`}
        >
            <svg
                viewBox={`0 0 1200 ${height}`}
                preserveAspectRatio="none"
                className="w-full block"
                style={{ height }}
            >
                <path d={path} className={fillClassName} />
            </svg>
        </div>
    );
}
