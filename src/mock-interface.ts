export interface UserDetails  {
    userName?: string,
    id?: number,
    maths?: number,
    science?: number,
    computer?: number,
}

export interface ISelDetail {
    computer: number | undefined;
    maths: number | undefined;
    science: number | undefined;
  }

export interface ISoccerData {
    "Name": string,
   "Nationality": string,
   "National_Position": string,
   "National_Kit": number | null,
   "Club": string,
   "Club_Position": string,
   "Club_Kit": number,
   "Club_Joining": string,
   "Contract_Expiry": number,
   "Rating": number,
   "Height": string,
   "Weight": string,
   "Preffered_Foot": string,
   "Birth_Date": string,
   "Age": number,
   "Preffered_Position": string,
   "Work_Rate": string,
   "Weak_foot": number,
   "Skill_Moves": number,
   "Ball_Control": number,
   "Dribbling": number,
   "Marking": number,
   "Sliding_Tackle":number,
   "Standing_Tackle": number,
   "Aggression": number,
   "Reactions": number,
   "Attacking_Position": number,
   "Interceptions": number,
   "Vision": number,
   "Composure": number,
   "Crossing": number,
   "Short_Pass": number,
   "Long_Pass": number,
   "Acceleration": number,
   "Speed": number,
   "Stamina": number,
   "Strength": number,
   "Balance": number,
   "Agility": number,
   "Jumping": number,
   "Heading": number,
   "Shot_Power": number,
   "Finishing": number,
   "Long_Shots": number,
   "Curve": number,
   "Freekick_Accuracy": number,
   "Penalties": number,
   "Volleys": number,
   "GK_Positioning": number,
   "GK_Diving": number,
   "GK_Kicking": number,
   "GK_Handling": number,
   "GK_Reflexes": number
}