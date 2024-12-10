import { Resend } from 'resend';
import { EmailTemplate } from '../../components/EmailTemplate';

const resend = new Resend("re_ReBcd33H_Ka4XHjX5mycTar4pckgfYGc4");

export async function POST(req) {
  try {
    const body = await req.json(); // Parse the request body
    const { email, name } = body; // Extract necessary fields from the request

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: 'LoanDhekho <info@loandhekho.com>',
      to: ['manavsharma7dec@gmail.com'],
      subject: 'Welcome to LoanDekho.com',
      react: EmailTemplate({ firstName: name }),
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
// 'manavsharma7dec@gmail.com'
