export default defineNuxtPlugin(() => {
  return {
    provide: {
      getName: (name) => {
        return `test ${name}`;
      },
    },
  };
});
