const asyncHandler = require("../utils/asyncHandler"); 
const ApiResponse = require("../utils/ApiResponse");


const Complaint = require("../models/Complaint"); 

exports.getDashboard = asyncHandler(async (req, res) => {
    const citizenId = req.user._id;

    // This operation depends directly on fields like .citizen inside the first model
    const complaints = await Complaint.find({
        citizen: citizenId,
    })
        .populate("department", "name")
        .sort({ createdAt: -1 });

    const stats = {
        total: complaints.length,
        pending: complaints.filter(c => c.status === "PENDING").length,
        inProgress: complaints.filter(c =>
            ["ASSIGNED", "IN_PROGRESS"].includes(c.status)
        ).length,
        resolved: complaints.filter(c => c.status === "RESOLVED").length,
    };

    return res.status(200).json(
        new ApiResponse(
            200,
            {
                stats,
                recentComplaints: complaints.slice(0, 5),
            },
            "Dashboard fetched successfully"
        )
    );
});
