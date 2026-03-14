export default defineAppConfig({
  ui: {
    navigationMenu: {
      slots: {
        label: 'text-xl',
      },
    },
    error: {
      slots: {
        statusCode: 'text-blue-800',
      },
    },
    pageHero: {
      slots: {
        headline: 'text-blue-300 dark:text-slate-300',
      },
    },
  },
});
