// Code your solution here

function findMatching(driver, string) {
    let name = driver.filter(n => n.toUpperCase() === string.toUpperCase());
    return name;
}

function fuzzyMatch(driver, string) {
    let name = driver.filter(n => n.substring(0,2) === string.substring(0,2));
    return name;
}

function matchName(driver, string) {
    let name = driver.filter(n => n.name === string);
    return name;
}