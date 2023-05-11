export default {
  methods: {
    getImageFromPublic(imagePath) {
      if (process.env.NODE_ENV == "production") {
        return process.env.BASE_URL + imagePath;
      } else {
        return imagePath;
      }
    },
  },
};
