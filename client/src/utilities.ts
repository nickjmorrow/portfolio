export const getFormattedDate = (date: string) => {
	const formattedDate = new Date(parseInt(date, 10));
	return `${monthNames[formattedDate.getMonth()]} ${formattedDate.getFullYear()}`;
}

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
