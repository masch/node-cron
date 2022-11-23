import cron from 'node-cron';

cron.schedule(`0 */1 * * *`, async () => {
  console.log(`running your task...`);
});
