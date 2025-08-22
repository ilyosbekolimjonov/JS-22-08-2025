function chatroomStatus(users) {
    const count = users.length

    if (count == 0) {
        console.log("no one online")
    } 
    else if (count == 1) {
        console.log(`${users[0]} online`)
    } 
    else if (count == 2) {
        console.log(`${users[0]} and ${users[1]} online`)
    } 
    else {
        console.log(`${users[0]}, ${users[1]} and ${count - 2} more online`)
    }
}

chatroomStatus([])

chatroomStatus(["paRIE_to"])

chatroomStatus(["s234f", "mailbox2"])

chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"])