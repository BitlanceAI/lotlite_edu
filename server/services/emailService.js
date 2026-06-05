const nodemailer = require('nodemailer');

const sendEmailAcknowledgement = async (leadData) => {
  const { fullName, email, programCategory, programSpecialization } = leadData;

  if (!email) {
    throw new Error('Email address is required for email acknowledgement.');
  }

  // Create a transporter using SMTP configuration from .env
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT || 587,
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const isInternship = programCategory === 'Career & Internship Co-Op';

  const mailOptions = {
    from: process.env.SMTP_FROM_EMAIL || '"Lotlite Edu" <no-reply@lotlite.edu>',
    to: email,
    subject: isInternship ? 'Internship Application Received - Lotlite Edu' : 'Application Received - Lotlite Edu',
    html: isInternship ? `
      <h3>Hello ${fullName || 'Applicant'}! 🎉</h3>
      <p>Thank you for applying for the <strong>Career & Internship Co-Op</strong>. We have received your qualifications: <strong>${programSpecialization || 'Not Specified'}</strong>.</p>
      <p>A Career Mentor will review your profile and reach out shortly to discuss the next steps.</p>
      <br>
      <p>Best regards,</p>
      <p><strong>The Lotlite Edu Team</strong></p>
    ` : `
      <h3>Hello ${fullName || 'Applicant'}! 🎉</h3>
      <p>Thank you for starting your application for the <strong>${programCategory || 'Program'}</strong> program in <strong>${programSpecialization || 'Specialization'}</strong>. We have successfully received your details.</p>
      <p>A program lead will review your application and reach out to you within 24 hours.</p>
      <br>
      <p>Best regards,</p>
      <p><strong>The Lotlite Edu Team</strong></p>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('[Email Service] Error sending acknowledgement:', error);
    throw error;
  }
};

module.exports = {
  sendEmailAcknowledgement
};
