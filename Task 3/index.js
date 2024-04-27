import axios from 'axios'

async function fetchTestcase() {
    return (await axios.get('https://share.shub.edu.vn/api/intern-test/input')).data
}

async function postResult(result, token) {
    const res = await axios.post('https://share.shub.edu.vn/api/intern-test/output', result, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    return res.data
}

const delta = (n) => (n % 2 == 0 ? 1 : -1)

function calculate(data, query) {
    const sums = [0]
    const alterSums = [0]
    for (let i = 0; i < data.length; i++) {
        sums.push(sums[i] + data[i])
        alterSums.push(alterSums[i] + delta(i) * data[i])
    }

    return query.map((each) => {
        const [from, to] = each.range

        if (each.type == '1') {
            return sums[to + 1] - sums[from]
        }
        return delta(from) * (alterSums[to + 1] - alterSums[from])
    })
}

async function main() {
    fetchTestcase()
        .then((res) => {
            const { data, query, token } = res
            const result = calculate(data, query)

            postResult(result, token)
                .then((res) => {
                    console.log(res)
                })
                .catch(() => {
                    console.log('Cannot post result')
                })
        })
        .catch(() => {
            console.log('Cannot fetch testcase')
        })
}

main()
