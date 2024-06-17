export default defineNuxtPlugin(() => {
  return {
    provide: {
      formatName: (name) => {
        return `Hello ${name}`;
      },
    },
  };
});
