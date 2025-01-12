import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { Container } from "postcss";

export const ParticleBackground = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
      await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(
      async (container: Container | undefined) => {
        await console.log(Container);
      },
      []
    );
  
    return (
      // <Particles
      //   id="tsparticles"
      //   init={particlesInit}
      //   className="absolute inset-0 -z-10"
      //   options={{
      //     fullScreen: false,
      //     background: {
      //       color: {
      //         value: "#000000", // Sets the background to black
      //       },
      //     },
      //     fpsLimit: 120,
      //     particles: {
      //       color: {
      //         value: ["#FF69B4", "#4B0082", "#9400D3", "#4169E1"],
      //       },
      //       links: {
      //         color: "#8892B0",
      //         // distance: 150,
      //         // enable: true,
      //         // opacity: 0.4,
      //         // width: 1,
      //         // color: "#ffffff",
      //                 distance: 120,
      //                 enable: true,
      //                 opacity: 1.5,
      //                 width: 1,
      //       },
      //       collisions: {
      //         enable: true,
      //       },
      //       move: {
      //         direction: "none",
      //         enable: true,
      //         outModes: {
      //           default: "out",
      //         },
      //         random: true,
      //         speed: 2,
      //         straight: false,
      //       },
      //       number: {
      //         density: {
      //           enable: true,
      //           area: 800,
      //         },
      //         value: 100,
      //       },
      //       opacity: {
      //         value: {
      //           min: 0.3,
      //           max: 0.8,
      //         },
      //         animation: {
      //           enable: true,
      //           speed: 1,
      //           minimumValue: 0.1,
      //         },
      //       },
      //       shape: {
      //         type: "circle",
      //       },
      //       size: {
      //         value: { min: 1, max: 3 },
      //         animation: {
      //           enable: true,
      //           speed: 2,
      //           minimumValue: 0.1,
      //         },
      //       },
      //       twinkle: {
      //         particles: {
      //           enable: true,
      //           frequency: 0.05,
      //           opacity: 1,
      //         },
      //       },
      //     },
      //     interactivity: {
      //       events: {
      //         onClick: {
      //           enable: true,
      //           mode: "push",
      //         },
      //         onHover: {
      //           enable: true,
      //           mode: "repulse",
      //           parallax: {
      //             enable: true,
      //             force: 60,
      //             smooth: 10,
      //           },
      //         },
      //         resize: true,
      //       },
      //       modes: {
      //         push: {
      //           quantity: 4,
      //         },
      //         repulse: {
      //           distance: 200,
      //           duration: 0.4,
      //         },
      //       },
      //     },
      //     detectRetina: true,
      //   }}
      // />
      <Particles
      className="w-full h-full"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#000000", // Sets the background to black
          },
        },
        fpsLimit: 60,
        fullScreen: false,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
                   value: ["#FF69B4", "#4B0082", "#9400D3", "#4169E1"],
          },
          links: {
                    value: ["#FF69B4", "#4B0082", "#9400D3", "#4169E1"],
            distance: 120,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 90,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
    );
  };
  