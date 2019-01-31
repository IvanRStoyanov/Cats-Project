const isInRole = (role) => {
    const currentRoles = sessionStorage.getItem('roles').split(', ');
    return currentRoles.indexOf(role) !== -1;
};

export default isInRole;