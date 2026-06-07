import xlsx from 'xlsx'
export class ExcelFiUtil{
static getExceldata(filepath:string,shettName:string)
{
    try {
        const workbook = xlsx.readFile(filepath)
        const sheet = workbook.Sheets[shettName]
        const jsondata = xlsx.utils.sheet_to_json(sheet)
        return jsondata
    } catch (error) {
        console.log(error)
    }
}
}