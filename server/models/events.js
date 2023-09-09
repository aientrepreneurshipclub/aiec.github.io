const { PrismaClient } = require('../prisma/generated/client');

const prisma = new PrismaClient();

async function createEvent(eventData) {
  const event = await prisma.event.create({
    data: eventData,
  });
  return event;
}
async function createHearAboutUs(attendeeId,evevntId,answer) {
  await prisma.hearAboutUs.create({
    data: {attendeeId,evevntId,answer},
  });
}
async function getEvents() {
  const events = await prisma.event.findMany();
  return events;
}
async function getEvent(eventId) {
  const event = await prisma.event.findUnique({
    where: {
      id: eventId,
    },
  });
  return event;
}
async function getUpcomingEvents(upcoming) {
  const event = await prisma.event.findMany({
    where: {upcoming},
    include:{teams: true}
  });
  return event;
}
async function addAttendeeToEvent(eventId, attendeeId) {
  try {
    const event = await prisma.event.findUnique({
      where: { id: eventId },
      include: { attendees: true },
    });

    if (!event) {
      console.error(`Event with ID ${eventId} not found.`);
      return {error:{arabic:"فعالية غير موجودة",english:"Event Not Found"}};
    }
    const attendeeAlreadyExists = event.attendees.some((attendee) => attendee.id === attendeeId);
    if (attendeeAlreadyExists) {
      return {message:{arabic:"مسجل بالفعل",english:"Already Registered"}};
    }

    const updatedEvent = await prisma.event.update({
      where: { id: eventId },
      data: {
        attendees: {
          connect: [{ id: attendeeId }],
        },
      },
    });
    return {message: {arabic:" تم التسجيل بنجاح",english:"Successfully Registered"}};
  } catch (error) {
    console.error("Error adding attendee to event:", error);
  }
}
//
async function updateEvent(eventId, eventData) {
  const updatedEvent = await prisma.event.update({
    where: {
      id: eventId,
    },
    data: eventData,
  });
  return updatedEvent;
}
async function updateSpeakers(eventId, speakers) {
  const event = await prisma.event.update({
    where: { id: eventId },
    data: {
      speakers: {
        set: speakers,
      },
    },
    include: {
      speakers: true,
    },
  });
  return event;
}
async function deleteEvent(eventId) {
  const deletedEvent = await prisma.event.delete({
    where: {
      id: eventId,
    },
  });
  return deletedEvent;
}

async function cleanup() {
  await prisma.$disconnect();
}

module.exports = {
  createEvent,
  getEvents,
  getEvent,
  getUpcomingEvents,
  addAttendeeToEvent,
  updateEvent,
  updateSpeakers,
  deleteEvent,
  createHearAboutUs,
  cleanup,
};
