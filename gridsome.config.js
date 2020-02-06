// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "sobatrp",
  plugins: [
    {
      use: "gridsome-source-storyblok",
      options: {
        client: {
          accessToken: "0D8o2iqjb60Xv3V2z7uimwtt"
        },
        version: 'public',
        typeName: "StoryblokEntry"
      }
    }
  ]
};
