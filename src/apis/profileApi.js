const fetchProfileData = async () => {
  try {
    const response = await fetch("https://portfolio-backend-production-aadb.up.railway.app/api/profile");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export { fetchProfileData };