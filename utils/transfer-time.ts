



export const transferDate = (currentDate: Date)=>{
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; 
    const year = currentDate.getFullYear();
    return `${year}-${month}-${day}`
}

export const transferTime = (currentDate: Date)=>{
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    return `${hours}:${minutes}:${seconds}`
}