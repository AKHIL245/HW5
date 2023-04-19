const AWS = require("aws-sdk");
const s3 = new AWS.S3({});

const AWS_BUCKET_NAME = "hw5secassign";
const FILE_KEY = "Homework_5_Security_v2.pdf";

const readFile = async (key) => {
  const params = {
    Bucket: AWS_BUCKET_NAME,
    Key: key,
  };

  return await s3.getObject(params).promise();
};

const deleteFile = async (key) => {
  const params = {
    Bucket: AWS_BUCKET_NAME,
    Key: key,
  };

  return await s3.deleteObject(params).promise();
};

const init = async () => {
  try {
    // Attempt to read the file (Read only access is required)
    const readFileResponse = await readFile(FILE_KEY);
    console.log("Read file response: ", readFileResponse);

    // Attempt to delete the file (should fail without the required permissions)
    // const deleteFileResponse = await deleteFile(FILE_KEY);
    // console.log("Delete file response: ", deleteFileResponse);
  } catch (error) {
    console.error(error);
  }
};

(async () => {
  await init();
})();
