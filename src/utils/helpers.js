const formatDate = (date) => {
    let formatter = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
    });
    return formatter.format(new Date(date));
};

export { formatDate };
