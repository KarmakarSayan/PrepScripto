    import mongoose from 'mongoose';

    const connectDB = async () => {
        try {
            // Attempt to connect to the MongoDB database using the connection string from environment variables
            await mongoose.connect(process.env.MONGO_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log("DB Connected Successfully");
        } catch (error) {
            // If the connection fails, log the error and exit the process
            console.error("DB Connection Failed:", error);
            process.exit(1); // Exit process with failure
        }
    };

    export default connectDB;
    

