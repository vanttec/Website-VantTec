import { usvVision, usvMissions, usvMechanics, usvElectronics } from "../assets";

export const usvSlides = [
  {
    title: "VISION",
    image: usvVision,
    bullets: [
      "We migrated our perception stack to YOLOv11, optimized for real-time inference on NVIDIA Jetson.",
      "Custom training pipelines are being developed for buoy detection, obstacle recognition, and dynamic elements.",
      "NVIDIA DeepStream is used to maximize real-time processing efficiency.",
      "The vision system is tightly integrated with navigation for autonomous decision-making.",
      "Our goal is robust detection under challenging marine lighting and reflection conditions.",
    ]
  },
  {
    title: "MISSIONS & CONTROLS",
    image: usvMissions,
    bullets: [
      "Our navigation system is based on a Model Predictive Control (MPC) framework implemented in ROS2.",
      "The mpc_node generates optimal trajectories while considering the USV’s dynamic constraints.",
      "Autonomous mission planning is aligned with official RoboBoat 2026 competition challenges.",
      "The system enables trajectory tracking, obstacle avoidance, and precise speed and heading control.",
      "Ongoing optimization ensures stability and reliability during real-world water testing.",
    ]
  },
  {
    title: "MECHANICS",
    image: usvMechanics,
    bullets: [
      "For the 2026 platform, the pontoon assemblies were mechanically updated to improve structural retention and handling. Integrated latch mechanisms were introduced to provide secure fastening while enabling faster, tool-free transport and assembly during deployment and maintenance operations.",
      "The electronics enclosure was also fully reorganized with a new internal layout architecture. This redesign establishes defined routing paths and separation zones for power and signal lines, resulting in cleaner cable management, improved serviceability, and enhanced electrical safety when accessing onboard systems.",
    ]
  },
  {
    title: "ELECTRONICS",
    image: usvElectronics,
    bullets: [
      "For the 2026 distribution, we designed a new PCB with the intent of acting as an LED controller to relay information back to the crew monitoring on the dock as well as lay the groundwork for future expansion of the platform.",
      "Rapid knowledge of the state of specific operations through visual confirmation will help us to ensure safety and effective responses to various situations, the PCB is currently in a testing stage and will be implemented at a later date. We also updated the firmware of the main Mechanisms PCB and prepared it for connection with the LED controller to ensure accurate and responsive operation of the vessel.",
    ]
  },
];
