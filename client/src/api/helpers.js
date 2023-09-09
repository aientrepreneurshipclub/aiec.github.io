export function getTime(isoDateString, language) {
  language = language?.slice(0, 2);
  const isoDate = new Date(isoDateString);

  const optionsDate = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const optionsTime = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };

  let userDate, userTime;

  if (language === "ar") {
    userDate = isoDate.toLocaleDateString("ar", optionsDate);
    userTime = isoDate.toLocaleTimeString("ar", optionsTime);
  } else {
    userDate = isoDate.toLocaleDateString("en", optionsDate);
    userTime = isoDate.toLocaleTimeString("en", optionsTime);
  }

  return {
    date: userDate,
    time: userTime,
  };
}
export async function prepare(event) {
  event.preventDefault();
  const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const phoneRegExp = /^01[0-9]{9}$/;
  const form = event.target.elements;
  const data = {};
  for (let element of form) {
    if (element.name == "gender") {
      data[element.id] = element.checked;
    }
    if (element.id == "image") {
      data[element.id] = element.files[0];
    } else data[element.id] = element.value;
  }
  const {
    birthday,
    phone,
    male,
    confirmPassword,
    education,
    fname,
    email,
    governorate,
    lname,
    password,
    image,
  } = data;
  if (password !== confirmPassword)
    return {
      error: {
        english: "Password and confirm password does not match",
        arabic: "كلمة المرور وتأكيد كلمة المرور غير متطابقين",
      },
    };
  if (!emailRegExp.test(email))
    return {
      error: {
        english: "Email is invalid",
        arabic: "البريد الإلكتروني غير صالح",
      },
    };
  if (!phoneRegExp.test(phone))
    return {
      error: { english: "Phone is invalid", arabic: "رقم الهاتف غير صالح" },
    };
  if (!image)
    return {
      error: { english: "The image is required", arabic: "الصورة مطلوبة" },
    };
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", "ilbga3ms");
  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${
      import.meta.env.VITE_CLOUDINARY_NAME
    }/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  const uploadInfo = await response.json();
  const { secure_url, public_id } = uploadInfo;
  const body = {
    name: {
      frist: fname,
      last: lname,
    },
    email,
    password,
    phone,
    education,
    governorate,
    birthday: new Date(birthday),
    gender: male ? "male" : "female",
    image: { secure_url, public_id},
  };
  return body;
}
export function intersection(arr1, arr2) {
  const set = new Set(arr1);
  let team=arr2.map(({id})=>id)
  let id =false;
  for (const element of team) 
    if (set.has(element)) {
      id=element;
      break;
    }
  if(id)
    return arr2.find((team)=> team.id==id) 
  return false; 
}
