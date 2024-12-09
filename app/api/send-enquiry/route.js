import { Resend } from "resend";

const resend = new Resend("re_ReBcd33H_Ka4XHjX5mycTar4pckgfYGc4");

export async function POST(req) {
  const { name, email, phone, enquiry, queryType } = await req.json();

  try {
    const emailContent = `
      New Enquiry:
      - Query Type: ${queryType}
      - Name: ${name}
      - Email: ${email}
      - Phone: ${phone}
      - Enquiry: ${enquiry}
    `;

    const data = await resend.emails.send({
      from: 'LoanDekho <info@loandhekho.com>',
      to: 'aniketsingh1602@gmail.com',
      subject: `New Enquiry: ${queryType}`,
      html: `
        <h3>${queryType} Enquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Enquiry:</strong> ${enquiry}</p>
      `,
    });

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
