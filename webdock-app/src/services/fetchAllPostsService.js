const fetchAllPostData = async (statusValue) => {
    try {
        const response = await fetch(`http://localhost:8080/api/v1/postswithstatus`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export default fetchAllPostData;