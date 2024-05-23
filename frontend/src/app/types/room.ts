export default interface Room {
    _id: String;
    roomNumber: Number;
    capacity: Number;
    equipment: String;
    unavailableDates: [String];
}