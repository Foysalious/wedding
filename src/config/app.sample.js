export const baseConfig = {
  weddingDay: "Friday",
  weddingTime: "19.00 - 23.00",
  weddingDate: "Feb 24, 2023",
  showBuiltWithInfo: true,
  showQrCode: false,
  calendarInfo: {
    timeStartISO: "2023-02-24T19:00:00+06:00",
    timeEndISO: "2023-02-24T21:00:00+06:00"
  },
  coupleInfo: {
    brideName: "Shefa",
    groomName: "Foysal",
    coupleNameFormat: "GROOM_FIRST"
  },
  venue: {
    name: "RAOWA CONVENTION HALL 1 Helmet, Level 2",
    addressLine1: "RAOWA Convention Hall, বীর উত্তম জিয়াউর রহমান সড়ক, ঢাকা 1205",
    city: "Dhaka",
    country: "Bangladesh",
    mapUrl: "https://goo.gl/maps/hAUonaZ8SeHiHa2X9"
  },
  logo: {
    headerLogo: "/assets/images/ring-svg.png",
    footerLogo: "/assets/video/aw-ring-logo-ticker.mp4",
    footerLogoType: "mp4"
  },
  ogTags: {
    logo: "/assets/images/aw-ring-logo.png",
    siteName: "wedding.wzulfikar.com",
    publishedTime: "2020-01-25"
  }
};

export const lang = {
  id: {
    weddingDay: "Sabtu",
    weddingDate: "22 Februari 2020",
    venue: {
      ...baseConfig.venue,
      name: "Hotel Oval",
      addressLine2: "Surabaya, Jawa Timur, 60241,",
    }
  }
};

export default {
  ...baseConfig,
  lang
};
