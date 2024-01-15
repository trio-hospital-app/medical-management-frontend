export default function generateCode(userId) {
    // Extract the first 5 characters of the userId
    const userIdPrefix = userId.substring(0, 5);
  
    // Get the current timestamp in seconds
    const timestamp = Math.floor(Date.now() / 1000);
  
    // Concatenate the userId prefix and timestamp with a hyphen
    const generatedCode = `${userIdPrefix}-${timestamp}`;
  
    return generatedCode;
  }
  