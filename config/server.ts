export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: ['Xp+ElfcJwpjSBI6rizSPPQ==', '9dh5Pi9Zqrs/jDTMPY7z6g=='],
  },
});
