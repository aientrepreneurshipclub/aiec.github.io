const { PrismaClient } = require('../prisma/generated/client');
const prisma = new PrismaClient();

async function createTeam(eventId, teamName, teamProposal, attendeeIds){
  try {
    const team = await prisma.team.create({
      data: {
        name: teamName,
        proposal:teamProposal,
        event: {
          connect: {
            id: eventId,
          },
        },
        attendee: {
          connect: attendeeIds.map((id) => ({id})),
        },
      },
    });
    return {success:{arabic:"تم إنشاء الفريق وتسجيله بنجاح",english:"Team created and registered successfully"}};
  } catch (error) {
    console.error('Error creating team:', error);
  } finally {
    await prisma.$disconnect();
  }
}
async function updateTeam(teamId, teamName, teamProposal, attendeeIds){
  try {
    const team = await prisma.team.update({
      where: {id: teamId},
      data:{
        name: teamName,
        proposal:teamProposal,
        attendee: {
          connect: attendeeIds.map((id) => ({id})),
        },
      }
    })
    return {success:{arabic:"تم التحديث بنجاح",english:"Team updated successfully"}};
  } catch (error) {
    console.error('Error creating team:', error);
  } finally {
    await prisma.$disconnect();
  }
}

module.exports = {
  createTeam,
  updateTeam,
};