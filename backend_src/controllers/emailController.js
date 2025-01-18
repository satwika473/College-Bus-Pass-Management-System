const nodemailer = require('nodemailer');
const { insertPass } = require('../models/emailModel');

// Function to issue a pass and send an email
const issuePass = async (req, res) => {
  const passDetails = req.body;

  try {
    // Insert pass details into the database
    await insertPass(passDetails);

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your app-specific password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: passDetails.email,
      subject: 'Your Bus Pass Details',
      html: `
        <h3>Bus Pass Issued Successfully</h3>
        <p>Dear ${passDetails.name},</p>
        <p>Your bus pass has been successfully issued. Below are the details:</p>
        <ul>
          <li><strong>Pass Number:</strong> ${passDetails.pass_number}</li>
          <li><strong>Name:</strong> ${passDetails.name}</li>
          <li><strong>Roll Number:</strong> ${passDetails.roll_number}</li>
          <li><strong>Course:</strong> ${passDetails.institution} - ${passDetails.department}</li>
          <li><strong>Address:</strong> ${passDetails.address}</li>
          <li><strong>Stage:</strong> ${passDetails.stage}</li>
          <li><strong>Bus Number:</strong> ${passDetails.bus}</li>
          <li><strong>Seat Number:</strong> ${passDetails.seat}</li>
          <li><strong>Valid Up To Academic Year:</strong> ${
            new Date(passDetails.creation_date).getFullYear()
          } - ${new Date(passDetails.creation_date).getFullYear() + 1}</li>
        </ul>
        <p>Thank you for registering with us!</p>
        <p>Best regards,<br/>The Bus Pass Team</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Bus pass issued and email sent successfully.' });
  } catch (err) {
    console.error('Error issuing bus pass:', err);
    res.status(500).json({ message: 'Error issuing bus pass.' });
  }
};

module.exports = { issuePass };
