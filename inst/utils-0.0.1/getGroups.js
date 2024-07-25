const getGroups = function(dfResults) {
    let groups = [...new Set(dfResults.map(d => d.GroupID))];
    const numericgroups = groups.every(group => /^\d+$/.test(group));
    groups.sort((a,b) => {
        return numericgroups
            ? a - b
            : a < b ? -1
            : b < a ?  1 : 0;
    });

    return groups;
}
