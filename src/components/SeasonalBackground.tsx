import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { type ISourceOptions } from "@tsparticles/engine";
import { useTheme } from "../contexts/ThemeContext";

const SeasonalBackground = () => {
    const [init, setInit] = useState(false);
    const { theme } = useTheme();

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const getSeason = () => {
        const month = new Date().getMonth();
        if (month >= 2 && month <= 4) return "spring";
        if (month >= 5 && month <= 7) return "summer";
        if (month >= 8 && month <= 10) return "autumn";
        return "winter";
    };

    const getOptions = (season: string, isDark: boolean): ISourceOptions => {
        const baseOptions: ISourceOptions = {
            fullScreen: {
                enable: true,
                zIndex: -1
            },
            background: {
                color: isDark ? "#030712" : "#ffffff", // gray-950 or white
            },
            detectRetina: true,
            interactivity: {
                events: {
                    onClick: { enable: true, mode: "push" },
                    onHover: { enable: true, mode: "repulse" },
                },
                modes: {
                    push: { quantity: 4 },
                    repulse: { distance: 100, duration: 0.4 },
                },
            },
        };

        const colors = isDark
            ? { snow: "#ffffff", sakura: "#ffb7b2", sun: "#fbbf24", leaf: "#ea580c" }
            : { snow: "#94a3b8", sakura: "#ffb7b2", sun: "#fbbf24", leaf: "#ea580c" }; // Darker snow for light mode visibility

        switch (season) {
            case "winter":
                return {
                    ...baseOptions,
                    particles: {
                        color: { value: colors.snow },
                        move: {
                            enable: true,
                            speed: 2,
                            direction: "bottom",
                            random: false,
                            straight: false,
                            outModes: "out",
                        },
                        number: { density: { enable: true }, value: 80 },
                        opacity: { value: 0.5 },
                        shape: { type: "circle" },
                        size: { value: { min: 1, max: 4 } },
                        wobble: { enable: true, distance: 10, speed: 10 },
                    },
                };
            case "spring":
                return {
                    ...baseOptions,
                    particles: {
                        color: { value: colors.sakura },
                        move: {
                            enable: true,
                            speed: 2, // Slower for floating effect
                            direction: "bottom-right",
                            random: true,
                            straight: false,
                            outModes: "out",
                        },
                        number: { density: { enable: true }, value: 50 },
                        opacity: { value: { min: 0.3, max: 0.7 } },
                        shape: { type: "circle" }, // Could use custom shape for petals if available, circle is safe
                        size: { value: { min: 2, max: 5 } },
                        rotate: {
                            value: { min: 0, max: 360 },
                            animation: { enable: true, speed: 5, sync: false }
                        }
                    },
                };
            case "summer":
                return {
                    ...baseOptions,
                    particles: {
                        color: { value: colors.sun },
                        move: {
                            enable: true,
                            speed: 1,
                            direction: "none",
                            random: true,
                            straight: false,
                            outModes: "out",
                        },
                        number: { density: { enable: true }, value: 40 },
                        opacity: {
                            value: { min: 0.1, max: 0.8 },
                            animation: { enable: true, speed: 1, sync: false }
                        },
                        shape: { type: "circle" },
                        size: { value: { min: 1, max: 3 } },
                    },
                };
            case "autumn":
                return {
                    ...baseOptions,
                    particles: {
                        color: { value: [colors.leaf, "#ca8a04", "#7c2d12"] },
                        move: {
                            enable: true,
                            speed: 3,
                            direction: "bottom",
                            random: true,
                            straight: false,
                            outModes: "out",
                        },
                        number: { density: { enable: true }, value: 40 },
                        opacity: { value: 0.8 },
                        shape: { type: "circle" }, // Use circles as abstract leaves
                        size: { value: { min: 3, max: 6 } },
                        rotate: {
                            value: { min: 0, max: 360 },
                            animation: { enable: true, speed: 10, sync: false }
                        }
                    },
                };
            default:
                return baseOptions;
        }
    };

    if (!init) return null;

    const season = getSeason();

    // Debug mode: Override season here to test different ones
    // const season = "winter"; 

    return (
        <Particles
            id="tsparticles"
            options={getOptions(season, theme === 'dark')}
            className="absolute inset-0 -z-10"
        />
    );
};

export default SeasonalBackground;
