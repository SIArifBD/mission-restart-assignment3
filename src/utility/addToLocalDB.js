const getStoredInstalledApps = () => {
    const storedInstallAppsStr = localStorage.getItem("installAppList");
    if(storedInstallAppsStr){
        const installAppsData = JSON.parse(storedInstallAppsStr);
        return installAppsData;
    }else{
        return [];
    }
};

// const addToStoreLocalDB = (id) => {
//     const installAppsData = getStoredInstalledApps();
//     if(installAppsData.includes(id)){
//         alert("You install this apps already")
//     }else{
//         installAppsData.push(id);
//         const data = JSON.stringify(installAppsData);
//         localStorage.setItem("installAppList", data)
//     }
// };

const addToStoreLocalDB = (id) => {
    const installAppsData = getStoredInstalledApps();
    const stringId = String(id);

    if (installAppsData.includes(stringId)) {
        alert("You install this app already");
    } else {
        installAppsData.push(stringId);
        localStorage.setItem("installAppList", JSON.stringify(installAppsData));
    }
};

const removeFromStoreDB = (id) => {
    const installAppsData = getStoredInstalledApps();
    // const convertedId = parseInt(id);
    const remainingApps = installAppsData.filter(appId => appId !== String(id));
    localStorage.setItem("installAppList", JSON.stringify(remainingApps));
};

export { addToStoreLocalDB, getStoredInstalledApps, removeFromStoreDB };