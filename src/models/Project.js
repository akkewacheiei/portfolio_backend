import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  url: String,
  techStack: [String],
  createdAt: { type: Date, default: Date.now }
});

const Project = mongoose.model("Project", projectSchema);
export default Project;
