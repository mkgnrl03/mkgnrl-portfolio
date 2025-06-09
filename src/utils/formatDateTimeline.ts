export function formatDateTimeline(start: Date, end: Date | "present"): string {
    const now = new Date();
    const endDate = end === "present" ? now : end;

    const format = (d: Date) => d.toLocaleString("default", { month: "short", year: "numeric" });
    const startStr = format(start);
    const endStr = end === "present" ? "Present" : format(endDate as Date);

    let years = endDate.getFullYear() - start.getFullYear();
    let months = endDate.getMonth() - start.getMonth();
    if (months < 0) { years--; months += 12; }

    const y = years ? `${years} yr${years > 1 ? "s" : ""}` : "";
    const m = months ? `${months} mo${months > 1 ? "s" : ""}` : "";
    const duration = [y, m].filter(Boolean).join(" & ");

    return `${startStr} - ${endStr} (${duration})`;
  }