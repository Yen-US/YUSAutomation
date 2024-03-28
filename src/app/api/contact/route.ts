
import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';
export const runtime = "edge";

export async function POST(req: Request) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { email, message } = await req.json();

    try {
        const data = await resend.emails.send({
            from: '⭐ YUS Automation <yusautomation@resend.dev>',
            to: [email],
            subject: 'New customer alert',
            react: EmailTemplate({ email: email, message: message}),
            text: 'New customer alert' 
        });

        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}
