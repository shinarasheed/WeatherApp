import mongoose from 'mongoose';

const isProducttion = process.env.NODE_ENV === 'production';

async function connectDb() {
  try {
    const conn = await mongoose.connect(
      isProducttion
        ? `${process.env.MONGO_URI_PROD}`
        : `${process.env.MONGO_URI_DEV}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      }
    );
    console.log(`Mongodb connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
}

export default connectDb;
