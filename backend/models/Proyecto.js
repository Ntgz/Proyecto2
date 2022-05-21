import mongoose from "mongoose";
import bcrypt from "bcrypt";
import generarId from "../helpers/generarId.js";


const proyectoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    token: {
        type: String,
        default: generarId(),
    }

});

//hasehar password
proyectoSchema.pre('save', async function(next){
    if(!this.isModified("password")){
        next();
    }
    const salt = await bcrypt.genSalt(10)   
    this.password = await bcrypt.hash(this.password, salt)});

const Proyecto = mongoose.model("Proyecto", proyectoSchema);

export default Proyecto;