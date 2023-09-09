const { PrismaClient } = require('../prisma/generated/client');
const prisma = new PrismaClient();
async function createMember(attendeeId, position, community) {
    try {
      const createdMember = await prisma.member.create({
        data: {
          position,
          community,
          attendee: {
            connect: { id: attendeeId }, 
            },
        },
      });
      return createdMember;
    } catch (error) {
      throw new Error(`Failed to create Member: ${error.message}`);
    } finally {
      await prisma.$disconnect(); 
    }
}
async function getAllMembers() {
    try {
        const members = await prisma.member.findMany({
        include: {
          attendee: true,
        },
      });
      return members;
    } catch (error) {
      throw new Error(`Failed to retrieve members: ${error.message}`);
    } finally {
      await prisma.$disconnect();
    }
  }
module.exports = {
  createMember,
  getAllMembers,
};