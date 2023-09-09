const { PrismaClient } = require("../prisma/generated/client");
const prisma = new PrismaClient();

async function createAttendee(attendeeData) {
  const emailCheck = await prisma.attendee.findUnique({
    where: {
      email: attendeeData.email,
    },
  });
  if (emailCheck)
    return {
      error: {
        english: "This account already exists",
        arabic: "هذا الحساب موجود بالفعل",
      },
    };
  const phoneCheck = await prisma.attendee.findUnique({
    where: {
      phone: attendeeData.phone,
    },
  });
  if (phoneCheck)
    return {
      error: {
        english: "This phone already exists",
        arabic: "هذاالرقم موجود بالفعل",
      },
    };

  const attendee=await prisma.attendee.create({
    data: {...attendeeData,image:attendeeData.image.secure_url},
  });
  return {
    success: {
      english: "An activation link has been sent to your account",
      arabic: "تم ارسال رابط التفعيل الى حسابك",
    },
    attendee
  };
}
async function activateAttendee(id) {
  const check = await prisma.attendee.findUnique({where: {id}});
  if (!check)
    return {
      error: {
        english: "The activation link is invalid",
        arabic: "رابط تفعيل الحساب غير صالح",
      },
    };
  const attendee = await prisma.attendee.update({
    where: { id },
    data: { activation: true },
  })
  return {
    attendee,
    success: {
      english: "The account has been activated successfully",
      arabic: "تم تفعيل الحساب بنجاح",
    },
  };
}
async function getAttendeeById(attendeeId) {
  const attendee = await prisma.attendee.findUnique({
    where: {
      id: attendeeId,
    },
  });
  return attendee;
}
async function getAttendee(email, password) {
  const emailCheck = await prisma.attendee.findUnique({
    where: {email},
  });
  if (!emailCheck)
    return {
      error: {
        english: "This account does not exist",
        arabic: "هذا الحساب غير موجود ",
      },
    };
  const attendee = await prisma.attendee.findFirst({
    where: {
      email: email,
      password: password,
    },
  });
  if (!attendee)
    return {
      error: {
        english: "The password is incorrect",
        arabic: "كلمة السر غير صحيحة",
      },
    };
  const success= {
    english: "Logged in successfully",
    arabic: "تم تسجيل الدخول بنجاح",
  }
  return {success, attendee};
}
async function getEmails() {
  const emails = await prisma.attendee.findMany({select: {email: true}})
  return emails;
}
async function getAttendeeIdsByEmails(emails) {
  try {
    const attendees = await prisma.attendee.findMany({
      where: {
        email: {
          in: emails
        }
      },
      select: {
        id: true
      }
    });
    const attendeeIds = attendees.map(attendee => attendee.id);
    return attendeeIds;
  } catch (error) {
    console.error('Error:', error);
    return [];
  } finally {
    await prisma.$disconnect(); // Disconnect from the Prisma client
  }
}
//
async function getAttendees() {
  const attendees = await prisma.attendee.findMany();
  return attendees;
}
async function updateAttendee(attendeeId, attendeeData) {
  const updatedAttendee = await prisma.attendee.update({
    where: {
      id: attendeeId,
    },
    data: attendeeData,
  });
  return updatedAttendee;
}
async function deleteAttendee(attendeeId) {
  const deletedAttendee = await prisma.attendee.delete({
    where: {
      id: attendeeId,
    },
  });
  return deletedAttendee;
}
async function addAttendeeToEvent(eventId, attendeeId) {
  const eventAttendee = await prisma.eventAttendee.create({
    data: {
      eventId: eventId,
      attendeeId: attendeeId,
    },
  });
  return eventAttendee;
}
async function removeAttendeeFromEvent(eventId, attendeeId) {
  const deletedEventAttendee = await prisma.eventAttendee.delete({
    where: {
      eventId_attendeeId: {
        eventId: eventId,
        attendeeId: attendeeId,
      },
    },
  });
  return deletedEventAttendee;
}
async function cleanup() {
  await prisma.$disconnect();
}

module.exports = {
  createAttendee,
  activateAttendee,
  getAttendees,
  getAttendee,
  getAttendeeById,
  getEmails,
  getAttendeeIdsByEmails,
  updateAttendee,
  deleteAttendee,
  addAttendeeToEvent,
  removeAttendeeFromEvent,
  cleanup,
};
