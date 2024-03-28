interface EmailTemplateProps {
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
  message
}) => (
  <div>
    <h1>New customer alert</h1>
    <li>
        <ul>Customer email: {email}</ul>
        <ul>Customer message: {message}</ul>
    </li>
  </div>
);
