import { Time } from "@angular/common";

export class Subject {
    subject_code: string;
    subject_desc: string;
    week_start_date: Date;
    week_end_date: Date;
    exact_class_date: Date;
    day_of_week: Number;
    room_number: Number;
    room: Number;
    gps_coordinates: Number;
    start_time: Time;
    end_time: Time;
    campus_code: string;
    hasStandardRoomDescription: Boolean;
    duration: number;
    duration_code: string;
    isHoliday: Boolean;
    
}
