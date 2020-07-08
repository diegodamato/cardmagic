import { Schema, model } from 'mongoose';


const magicCardSchema: Schema = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    rarity: {
        type: String,
        required: true
    }
});

export default model("magicCard", magicCardSchema);
    
    




