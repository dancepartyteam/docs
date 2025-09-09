module.exports = {
  apps: [
    {
      name: "dp-docs",
      script: "npm",
      args: "run serve -- --port 5004",
      watch: false,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
