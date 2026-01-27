
(function () {
    // Ensure dependencies are loaded
    if (!window.React || !window.ReactDOM || !window.Recharts) {
        console.error("React, ReactDOM, or Recharts not loaded");
        return;
    }

    const { createElement: h, useState, useEffect } = React;
    const { createRoot } = ReactDOM;
    const { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } = Recharts;

    // Custom Tooltip Component
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            return h('div', { className: "bg-white dark:bg-slate-800 p-3 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700" },
                h('p', { className: "text-xs font-bold text-slate-500 dark:text-slate-400 mb-1" }, label),
                h('div', { className: "flex items-center gap-2" },
                    h('div', { className: "w-2 h-2 rounded-full", style: { backgroundColor: data.fillColor } }),
                    h('p', { className: "text-lg font-bold text-slate-800 dark:text-white leading-none" },
                        `${data.y}`,
                        h('span', { className: "text-xs text-slate-400 font-normal ml-1" }, "Points")
                    )
                )
            );
        }
        return null;
    };

    const CHCChart = () => {
        // Data with colors
        const data = [
            { name: 'Logic', y: 70, fillColor: '#6366f1', label: 'NORMAL' },    // Indigo
            { name: 'Verbal', y: 92, fillColor: '#d946ef', label: 'HIGH' },   // Fuchsia
            { name: 'Abstract', y: 65, fillColor: '#10b981', label: 'AVG' }  // Emerald
        ];

        // State for animation
        const [show, setShow] = useState(false);
        useEffect(() => {
            requestAnimationFrame(() => setShow(true));
        }, []);

        if (!show) return null;

        return h(ResponsiveContainer, { width: "100%", height: "100%", minHeight: 180 },
            h(BarChart, {
                data: data,
                margin: { top: 20, right: 0, left: 0, bottom: 0 },
                barSize: 40
            },
                h(CartesianGrid, {
                    strokeDasharray: "3 3",
                    vertical: false,
                    stroke: document.documentElement.classList.contains('dark') ? '#334155' : '#e2e8f0'
                }),
                h(XAxis, {
                    dataKey: "name",
                    axisLine: false,
                    tickLine: false,
                    tick: { fill: '#94a3b8', fontSize: 11, fontWeight: 600, fontFamily: 'Plus Jakarta Sans' },
                    dy: 10
                }),
                h(YAxis, { hide: true, domain: [0, 100] }),
                h(Tooltip, {
                    content: h(CustomTooltip),
                    cursor: { fill: 'transparent' }
                }),
                h(Bar, {
                    dataKey: "y",
                    radius: [8, 8, 8, 8],
                    animationDuration: 1500,
                    animationEasing: "ease-out"
                },
                    data.map((entry, index) => (
                        h(Cell, { key: `cell-${index}`, fill: entry.fillColor })
                    ))
                )
            )
        );
    };

    // Render Function exposed globally
    window.renderCHCChart = function (elementId) {
        const container = document.getElementById(elementId);
        if (!container) return;

        // Prevent duplicate roots if called multiple times (simple check)
        if (container._reactRoot) {
            container._reactRoot.render(h(CHCChart));
        } else {
            const root = createRoot(container);
            container._reactRoot = root; // Store root on element
            root.render(h(CHCChart));
        }
    };

})();
