import mongoose, { Schema } from "mongoose";

const TempMemberCounterSchema = new Schema({
    letter: {type: String, required: true, unique: true},
    lastNumber: {type: Number, required: true, default: 0}
});

export default mongoose.models.TempMemberCounter || mongoose.model("TempMemberCounter", TempMemberCounterSchema);