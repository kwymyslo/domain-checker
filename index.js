const whois = require("whois-json");
const { createTransport } = require("nodemailer");

require("dotenv").config({ quiet: true });
const { DOMAIN, EMAIL_TO, SMTP_HOST, SMTP_USER, SMTP_PASS, DELAY_MINUTES } = process.env;

const transporter = createTransport({
  host: SMTP_HOST,
  port: 587,
  secure: false,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

async function checkDomain() {
  try {
    const data = await whois(DOMAIN);

    if (!data.domainName) {
      console.log(`✅ Domena ${DOMAIN} może być wolna! Wysyłam maila...`);
      await sendEmail();
      process.exit(0);
    } else {
      console.log(
        `❌ Domena ${DOMAIN} jest zajęta. Sprawdzam ponownie za określony czas...`
      );
    }
  } catch (error) {
    console.error("⚠️ Wystąpił błąd podczas sprawdzania domeny:\n\n", error);
  }
}

async function sendEmail() {
  try {
    await transporter.sendMail({
      from: SMTP_USER,
      to: EMAIL_TO,
      subject: `Domena ${DOMAIN} jest dostępna!`,
      text: `Hej! Wygląda na to, że domena ${DOMAIN} jest dostępna do zakupu.\n\nWysłano za pomocą skryptu domain-checker`,
    });
    console.log("📧 E-mail został wysłany!");
  } catch (error) {
    console.error("⚠️ Wystąpił błąd podczas wysyłania maila:\n\n", error);
  }
}

setInterval(checkDomain, DELAY_MINUTES * 60 * 1000);
checkDomain();
console.log("🔗 domain-checker 1.0 | Skrypt został uruchomiony!");