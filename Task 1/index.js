import axios from 'axios'
import exceljs from 'exceljs'

async function main() {
    try {
        let res = await axios.get('https://go.microsoft.com/fwlink/?LinkID=521962', {
            responseType: 'arraybuffer',
        })

        let workbook = new exceljs.Workbook()
        workbook = await workbook.xlsx.load(res.data)

        const sheet = workbook.worksheets.at(0)
        const deleteIndexes = []
        const saleColumnNumber = 9

        sheet.columns.at(saleColumnNumber).values.forEach((sale, index) => {
            if (sale <= 50000 && index > 1) {
                deleteIndexes.push(index)
            }
        })

        deleteIndexes.forEach((index, indexIndex) => sheet.spliceRows(index - indexIndex, 1))
        await workbook.xlsx.writeFile('./output.xlsx')
        console.log('Done')
    } catch (_) {
        console.log('Cannot fetch data')
    }
}

main()
