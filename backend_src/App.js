const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const deptRoutes = require('./routes/deptRoutes');
const adminRoutes = require('./routes/adminRoutes');
const routeRoutes = require('./routes/addbusRoutes');
const stageRoutes = require('./routes/stageRoute');
const busesRoutes = require('./routes/busRoute');
const adminaddBusRoutes = require('./routes/adminaddBusRoutes');
const applicationRoutes = require('./routes/applicationRoutes');
const verifiedApplicationsRoutes = require('./routes/verifiedApplicationRoutes');
const approvedApplicationsRoutes = require("./routes/approvedApplicationsRoutes");
const passRoutes = require("./routes/passRoutes");
const emailRoutes = require('./routes/emailRoutes');
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/dept', deptRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/routes', routeRoutes);
app.use('/api/stages', stageRoutes);
app.use('/api/buses', busesRoutes);
app.use('/api/addbus', adminaddBusRoutes);
app.use('/api', applicationRoutes);
app.use('/api', verifiedApplicationsRoutes);
app.use("/api/approved_applications", approvedApplicationsRoutes);
app.use("/api/approved_applications", passRoutes);
app.use('/api', emailRoutes);
// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

