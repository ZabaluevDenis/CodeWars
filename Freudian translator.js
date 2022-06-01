function toFreud(string) {
    if (string === ""){
        return ""
    }
    let newString = string.split(" ").map(x => "sex").join(" ")
    return newString
}