export function formatDate(date: any, local: any) {
    console.log(date);
    const d = new Date(date)
    const options: any = { year: 'numeric', month: 'short', day: 'numeric' }
    const res = d.toLocaleDateString(local, options)
    console.log(d);
    return res
}
