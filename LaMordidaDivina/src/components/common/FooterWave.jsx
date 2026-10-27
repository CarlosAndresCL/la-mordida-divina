export default function FooterWave({ fillClassName = "fill-teal-dark", height = 40 }) {
    const path = `M0,${height * 0.35}
        C180,${height * 1.1} 300,${height * 1.1} 480,${height * 0.5}
        C660,${height * -0.1} 900,${height * -0.1} 1020,${height * 0.3}
        C1140,${height * 0.5} 1200,${height * 0.55} 1200,${height * 0.4}
        L1200,${height} L0,${height} Z`;

    return (
        <div
            className="absolute left-0 w-full z-30 leading-none pointer-events-none"
            style={{ top: -(height - 1) }}
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
