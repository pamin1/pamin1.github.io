export const siteConfig = {
  name: "Prachit Amin",
  title: "Computer Engineering Student at Georgia Tech",
  description: "Portfolio website of Prachit Amin",
  accentColor: "#1d4ed8",
  social: {
    email: "pamin31@gatech.edu",
    linkedin: "https://linkedin.com/in/prachitamin",
    github: "https://github.com/pamin1",
  },
  aboutMe:
    "I am a driven third year computer engineering student with a strong foundation in software development, robotics, and high-performance computing. I thrive on solving challenging problems at the intersection of autonomy, embedded systems, and real-time control. I work primarily with C++ and modern frameworks to build robust and efficient systems, I’m now seeking early-career opportunities where I can contribute to mission-critical software and learn from experienced teams.",
  skills: ["C++", "Python", "CUDA", "ROS2", "AWS"],
  projects: [
    {
      name: "CUDA ResNet",
      description:
        "CUDA implementation of the ResNet18 Architecture using PyTorch weights. Benchmarked against PyTorch's GPU accelerated and CPU implementations.",
      link: "https://github.com/pamin1/CUDAResNet",
      skills: ["C++", "CUDA"],
    },
    {
      name: "WatchNX",
      description:
        "Tinder style movie recommender, pairing with users' Letterboxd history.",
      link: "https://www.watchnx.com",
      skills: ["Python", "PostgreSQL", "React", "AWS"],
    },
    {
      name: "Drift",
      description:
        "Lightweight UAV/Drone with C++ backend and Python wrapping. Runtime configurable classes for various UAV types and parameters.",
      link: "https://github.com/pamin1/drift",
      skills: ["C++", "Python"],
    },
    {
      name: "Game of Life",
      description:
        "Conway's Game of Life using Sequential, Threaded, and OpenMP implementations. Benchmarked variation runtimes.",
      link: "https://github.com/pamin1/GameOfLife",
      skills: ["C++", "SFML", "OpenMP"]
    }
  ],
  experience: [
    {
      company: "Intelligent Vision and Automation Lab",
      title: "Undergraduate Research Assistant",
      dateRange: "August 2025 - Present",
      bullets: [
        "Led software bring-up for Unitree Go2, integrating robot and sensor SDKs, and configuring a reproducible robot learning and development environment adopted by GaTech IRIM research teams.",
        "Built a custom ROS2 PointCloud to LaserScan package that filters 3D LiDAR data by height and azimuth, largely removing quantization errors from the standard ROS2 conversion node and improving mapping fidelity.",
      ],
    },
    {
      company: "Dynamics and Control Systems Lab",
      title: "Undergraduate Research Assistant",
      dateRange: "September 2024 - August 2025",
      bullets: [
        "Integrated GPU-accelerated MPPI controller into a ROS2 stack using JAX, enabling 10K trajectory rollouts at 50Hz.",
        "Implemented Control Barrier Function (CBF) soft penalties to enforce collision avoidance in MPPI rollouts.",
        "Coupled DBSCAN-based LiDAR clustering with CBFs to generate dynamic obstacle avoidance constraints in racing scenarios.",
        "Constructed a vehicle model tuning pipeline using the equations of motion for a dynamic bicycle model.",
      ],
    },
    {
      company: "John Bean Technology",
      title: "Software Engineering Intern",
      dateRange: "May 2024 - August 2024",
      bullets: [
        "Implemented CI/CD pipeline for 100K+ line codebase",
        "Designed motion planning integration test suite by containerizing vehicle simulator and creating 50 test scenarios.",
      ],
    },
  ],
  education: [
    {
      school: "Georgia Institute of Technology",
      degree: "B.S Computer Engineering, Minor in Robotics",
      dateRange: "August 2024 - December 2026",
      achievements: [],
    },
    {
      school: "Penn State University",
      degree: "B.S Computer Engineering",
      dateRange: "August 2023 - May 2024",
      achievements: [
        "Degree incomplete; transferred to Georgia Institute of Technology."
      ],
    },
  ],
};
