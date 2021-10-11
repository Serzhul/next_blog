const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "seo_abel2",
        mongodb_password: "6x3E2V9RPjGjc9Qi",
        mongodb_clustername: "cluster0",
        mongodb_database: "next-blog-dev",
      },
    };
  }
  return {
    env: {
      mongodb_username: "seo_abel2",
      mongodb_password: "6x3E2V9RPjGjc9Qi",
      mongodb_clustername: "cluster0",
      mongodb_database: "next-blog",
    },
  };
};
