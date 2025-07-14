const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();
  console.log("Connected to db Successfully...");
}
main().catch((err) => {
  console.error("Failed to connect to db:", err);
  process.exit(1);
});

module.exports = main;
